import { categoriesPart1 } from "./categories-part1";
import { categoriesPart2 } from "./categories-part2";

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
