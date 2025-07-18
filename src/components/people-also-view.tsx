"use client";

import { Product } from "@/types/products";
import { ProductGrid } from "./product-grid";

interface Props {
  products: Product[];
}

export function PeopleAlsoView({ products }: Props) {
  if (!products.length) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold tracking-tight">People Also View</h2>
      <ProductGrid products={products} />
    </div>
  );
}
