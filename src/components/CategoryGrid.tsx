import Link from "next/link";
import { type NameCategory, groups } from "@/data/categories";

interface CategoryGridProps {
  categories: NameCategory[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  const grouped = groups.map((group) => ({
    group,
    items: categories.filter((c) => c.group === group),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="space-y-12">
      {grouped.map(({ group, items }) => (
        <section key={group}>
          <h2 className="font-heading text-2xl text-gold mb-6">{group}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}/`}
                className="group block rounded-lg border border-gold/10 bg-charcoal p-5 hover:border-gold/30 hover:bg-charcoal/80"
              >
                <h3 className="font-heading text-lg text-cream group-hover:text-gold">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  {category.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
