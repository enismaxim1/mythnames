import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getCategoryBySlug } from "@/data/categories";

// Simple in-memory rate limiter: IP -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) {
    return false;
  }

  entry.count++;
  return true;
}

// Clean up stale entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_WINDOW_MS);

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  // Parse body
  let body: {
    category?: string;
    gender?: string;
    context?: string;
    count?: number;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { category: slug, gender = "any", context, count = 6 } = body;

  if (!slug || typeof slug !== "string") {
    return NextResponse.json(
      { error: "Category is required" },
      { status: 400 }
    );
  }

  const validGenders = ["male", "female", "any"];
  if (!validGenders.includes(gender)) {
    return NextResponse.json(
      { error: "Gender must be 'male', 'female', or 'any'" },
      { status: 400 }
    );
  }

  const nameCount = Math.min(Math.max(Number(count) || 6, 1), 12);

  const category = getCategoryBySlug(slug);
  if (!category) {
    return NextResponse.json(
      { error: "Category not found" },
      { status: 404 }
    );
  }

  // Build prompt
  const systemPrompt = `You are a name generator specializing in ${category.nameType} names. ${category.systemPrompt}

You MUST respond with a valid JSON array and nothing else. No markdown, no code fences, no explanation.
Each element must have exactly these fields:
- "name": the generated name (string)
- "meaning": a brief meaning or origin (string, 1-2 sentences)
- "pronunciation": phonetic pronunciation (string, without slashes)
- "gender": "male", "female", or "neutral" (string)`;

  const genderInstruction =
    gender === "any"
      ? "Generate a mix of male, female, and gender-neutral names."
      : `Generate ${gender} names.`;

  const contextInstruction = context
    ? `The user is looking for names for: ${context}`
    : "";

  const userPrompt = `Generate exactly ${nameCount} unique ${category.nameType} names. ${genderInstruction} ${contextInstruction}

Return ONLY a JSON array.`.trim();

  // Call OpenAI API
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Service configuration error" },
      { status: 500 }
    );
  }

  const client = new OpenAI({ apiKey });

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.9,
      max_tokens: 1024,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const text = completion.choices[0]?.message?.content;
    if (!text) {
      throw new Error("No text response from AI");
    }

    const parsed = JSON.parse(text);

    if (!Array.isArray(parsed)) {
      throw new Error("Response is not an array");
    }

    // Validate and sanitize each entry
    const names = parsed.map(
      (entry: { name?: string; meaning?: string; pronunciation?: string; gender?: string }) => ({
        name: String(entry.name || ""),
        meaning: String(entry.meaning || ""),
        pronunciation: String(entry.pronunciation || ""),
        gender: String(entry.gender || "neutral"),
      })
    );

    return NextResponse.json(names);
  } catch (err) {
    console.error("Generation error:", err);
    return NextResponse.json(
      { error: "Failed to generate names. Please try again." },
      { status: 500 }
    );
  }
}
