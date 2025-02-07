export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  specifications: {
    [key: string]: string | undefined;
  };
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}
