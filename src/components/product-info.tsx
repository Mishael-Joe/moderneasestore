import { Product } from "@/types/products";
import { Badge } from "@/components/ui/badge";
import { formatNaira } from "@/lib/utils";
import { Button } from "./ui/button";

interface Props {
  product: Product;
}

export function ProductInfo({ product }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-xl text-foreground font-semibold">
        {formatNaira(product.price)}
      </p>
      <p className="text-muted-foreground">{product.description}</p>
      <Badge variant="outline">{product.specifications.brand}</Badge>
      <div className="w-full">
        <Button className="w-full bg-site-primary-color hover:bg-site-primary-color/80 cursor-pointer">
          Inquire
        </Button>
      </div>
    </div>
  );
}
