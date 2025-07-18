export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  specifications: {
    brand: string;
    [key: string]: string | number | undefined;
  };
}
