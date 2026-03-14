import { categories } from "@/data/categories";
import CategoryGrid from "@/components/CategoryGrid";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
          AI Name Generator
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          Generate unique fantasy, D&amp;D, cultural, and character names with
          AI. Each name comes with meaning, pronunciation, and lore.
        </p>
      </div>

      <CategoryGrid categories={categories} />
    </div>
  );
}
