"use client";

import { useState } from "react";
import NameCard from "./NameCard";

interface GeneratedName {
  name: string;
  meaning: string;
  pronunciation: string;
  gender: string;
}

interface NameGeneratorProps {
  categorySlug: string;
  categoryTitle: string;
}

type Gender = "male" | "female" | "any";

export default function NameGenerator({
  categorySlug,
  categoryTitle,
}: NameGeneratorProps) {
  const [gender, setGender] = useState<Gender>("any");
  const [context, setContext] = useState("");
  const [names, setNames] = useState<GeneratedName[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/generate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: categorySlug,
          gender,
          context: context.trim() || undefined,
          count: 6,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setNames(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate names");
    } finally {
      setLoading(false);
    }
  };

  const genderOptions: { value: Gender; label: string }[] = [
    { value: "any", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  return (
    <div className="space-y-6">
      {/* Gender selector */}
      <div className="flex gap-2">
        {genderOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setGender(opt.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              gender === opt.value
                ? "bg-gold/20 border-gold text-gold"
                : "border-gold/20 text-muted hover:border-gold/40 hover:text-cream"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Context input */}
      <textarea
        value={context}
        onChange={(e) => setContext(e.target.value)}
        placeholder="Describe your character (optional)... e.g. 'A wise old wizard who guards ancient forests'"
        className="w-full rounded-lg border border-gold/20 bg-charcoal-dark p-4 text-cream placeholder:text-muted/60 focus:border-gold/50 focus:outline-none resize-none h-24"
        maxLength={500}
      />

      {/* Generate button */}
      <button
        onClick={generate}
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gold text-charcoal-dark font-heading font-bold text-lg hover:bg-amber disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Summoning Names...
          </span>
        ) : names.length > 0 ? (
          "Generate More"
        ) : (
          "Generate Names"
        )}
      </button>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-crimson/40 bg-crimson/10 p-4 text-crimson">
          {error}
        </div>
      )}

      {/* Results */}
      {names.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {names.map((n, i) => (
            <NameCard
              key={`${n.name}-${i}`}
              name={n.name}
              meaning={n.meaning}
              pronunciation={n.pronunciation}
            />
          ))}
        </div>
      )}
    </div>
  );
}
