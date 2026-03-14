import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import NameGenerator from "@/components/NameGenerator";
import FAQSection from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.metaDescription,
    alternates: {
      canonical: `https://mythnames.com/${category.slug}/`,
    },
    openGraph: {
      title: `${category.title} | MythNames`,
      description: category.metaDescription,
      url: `https://mythnames.com/${category.slug}/`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | MythNames`,
      description: category.metaDescription,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mythnames.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title,
        item: `https://mythnames.com/${category.slug}/`,
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: category.title,
    url: `https://mythnames.com/${category.slug}/`,
    description: category.metaDescription,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema),
        }}
      />

      {/* Header */}
      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-cream mb-4">
        {category.title}
      </h1>
      <p className="text-muted text-lg mb-10">{category.tagline}</p>

      {/* Interactive Generator (client component) */}
      <NameGenerator
        categorySlug={category.slug}
        categoryTitle={category.title}
      />

      {/* Server-rendered About section for SEO */}
      <section className="mt-16">
        <h2 className="font-heading text-2xl text-gold mb-4">
          About {category.nameType} Names
        </h2>
        <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-4">
          {category.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Server-rendered FAQ for SEO */}
      {category.faqs && category.faqs.length > 0 && (
        <section className="mt-16">
          <h2 className="font-heading text-2xl text-gold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQSection faqs={category.faqs} />
        </section>
      )}

      {/* Related generators */}
      {category.related && category.related.length > 0 && (
        <div className="mt-16">
          <RelatedGenerators slugs={category.related} />
        </div>
      )}
    </div>
  );
}
