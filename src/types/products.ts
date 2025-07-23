export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  description: string;
  specifications: {
    [key: string]: string | number | undefined;
  };
}
