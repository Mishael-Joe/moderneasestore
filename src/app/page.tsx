import { ProductGrid } from "@/components/product-grid";
import { Separator } from "@/components/ui/separator";
import { products, siteConfig } from "@/config/site";
import { ImageMinusIcon } from "lucide-react";

export default async function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
      {/* Promotional Video Section */}
      <section aria-label="Current promotions" className="mb-6">
        {/* Video Section */}
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
          <ImageMinusIcon className="w-14 h-14 text-gray-500" />
        </div>
      </section>

      <Separator className="bg-site-primary-color/50" />

      {/* Main Product Grid Area */}
      <section aria-labelledby="products-heading" className="pb-16">
        <h1 id="products-heading" className="sr-only">
          {siteConfig.name} Product Collection
        </h1>

        <ProductGrid products={products} />
      </section>
    </main>
  );
}
