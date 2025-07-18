"use client";

import Image from "next/image";
import Link from "next/link";
import { XCircle } from "lucide-react";
import { shimmer, toBase64 } from "@/lib/image";
import { formatNaira } from "@/lib/utils";
import type { Product } from "@/types/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * ProductGrid Component - Simplified for basic product display
 */
export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div
        className="mx-auto grid h-96 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900"
        role="alert"
        aria-live="polite"
      >
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 md:grid-cols-4 pt-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="group text-sm"
            aria-labelledby={`product-${product.id}-title`}
          >
            <Link href={`/product/${product.slug}`} prefetch={false}>
              <Card className="group transition-shadow hover:shadow-md p-0 hover:text-site-primary-color">
                <CardHeader className="p-0">
                  <div className="aspect-square w-full overflow-hidden rounded-t-lg border-b border-gray-200 bg-gray-100 dark:border-gray-800">
                    <Image
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(300, 150)
                      )}`}
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={150}
                      className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                      quality={85}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      loading="lazy"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-2 px-3 pb-4">
                  <CardTitle className="text-base font-medium line-clamp-1">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm font-bold mt-1 text-muted-foreground">
                    {formatNaira(product.price)}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
