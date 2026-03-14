import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryPages = categories.map((category) => ({
    url: `https://mythnames.com/${category.slug}/`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://mythnames.com/",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    ...categoryPages,
  ];
}
