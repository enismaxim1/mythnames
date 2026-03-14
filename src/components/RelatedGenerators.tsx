import Link from "next/link";
import { getCategoryBySlug } from "@/data/categories";

interface RelatedGeneratorsProps {
  slugs: string[];
}

export default function RelatedGenerators({ slugs }: RelatedGeneratorsProps) {
  const related = slugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => c != null);

  if (related.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-2xl text-gold mb-4">
        Related Name Generators
      </h2>
      <div className="flex flex-wrap gap-3">
        {related.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}/`}
            className="rounded-lg border border-gold/10 bg-charcoal px-4 py-3 hover:border-gold/30 hover:bg-charcoal/80"
          >
            <span className="font-heading text-sm text-cream hover:text-gold">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
