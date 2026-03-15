import { categoriesPart1 } from "./categories-part1";
import { categoriesPart2 } from "./categories-part2";
import { categoriesPart3 } from "./categories-part3";
import { categoriesPart5 } from "./categories-part5";
import { categoriesPart6 } from "./categories-part6";

export interface NameCategory {
  slug: string;
  title: string;
  tagline: string;
  metaDescription: string;
  nameType: string;
  description: string;
  systemPrompt: string;
  group: string;
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const categories: NameCategory[] = [
  ...categoriesPart1,
  ...categoriesPart2,
  ...categoriesPart3,
  ...categoriesPart5,
  ...categoriesPart6,
];

export const groups: string[] = [
  ...new Set(categories.map((c) => c.group)),
];

export function getCategoryBySlug(slug: string): NameCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoriesByGroup(group: string): NameCategory[] {
  return categories.filter((c) => c.group === group);
}
