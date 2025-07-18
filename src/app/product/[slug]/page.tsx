import { ProductImage } from "@/components/product-image";
import { ProductInfo } from "@/components/product-info";
import { ProductSpecs } from "@/components/product-specs";
import { PeopleAlsoView } from "@/components/people-also-view";
import { products, siteConfig } from "@/config/site";
import { Product } from "@/types/products";

// Types
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Udua Store",
      description: "The requested product could not be found.",
    };
  }

  const productName = product.name;
  const productImage = product.image;
  const productDescription =
    product.description?.substring(0, 160) ||
    "Discover high-quality products on Udua";

  return {
    title: `${productName} | ${siteConfig.name} Store`,
    description: productDescription,
    openGraph: {
      title: productName,
      description: productDescription,
      images: [productImage],
      type: "website",
    },
    alternates: {
      canonical: `/product/${slug}`,
    },
  };
}

// Simulated product fetching function
async function getProductBySlug(slug: string): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null;
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 4); // Display 4 other products

  return (
    <section className="max-w-6xl mx-auto p-4 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImage src={product.image} alt={product.name} />
        <div>
          <ProductInfo product={product} />
          <ProductSpecs specifications={product.specifications} />
        </div>
      </div>

      <PeopleAlsoView products={otherProducts} />
    </section>
  );
}
