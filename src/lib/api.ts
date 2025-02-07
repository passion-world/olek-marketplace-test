import { Product, ProductsResponse } from '@/types/product';
import productsData from '@/data/products.json';

export async function getProducts(search?: string, category?: string): Promise<ProductsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredProducts = productsData.products;

  if (search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  return {
    ...productsData,
    products: filteredProducts,
    total: filteredProducts.length,
  };
}

export async function getProduct(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const product = productsData.products.find((p) => p.id === id);
  return product || null;
}
