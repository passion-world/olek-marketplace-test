// src/app/products/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import Breadcrumb from '@/components/Breadcrumb';
import { Product } from '@/types/product';
import { useDebounce } from '@/hooks/useDebounce';
import productsData from '@/data/products.json';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const debouncedSearch = useDebounce(search, 300);
  const debouncedCategory = useDebounce(category, 300);

  // Get unique categories from products
  const categories = ['All', ...Array.from(new Set(productsData.products.map(p => p.category)))];

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { products } = await getProducts(
        debouncedSearch, 
        debouncedCategory === 'All' ? '' : debouncedCategory
      );
      setProducts(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, [debouncedSearch, debouncedCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900"
    >
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }]} />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center justify-between gap-6 md:flex-row mb-8"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Our <span className="text-purple-400">Products</span>
            </h1>
            <div className="w-full max-w-lg flex space-x-4">
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="relative flex-grow"
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full rounded-xl border-0 bg-gray-800/50 backdrop-blur-sm py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="relative"
              >
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="appearance-none w-full rounded-xl border-0 bg-gray-800/50 backdrop-blur-sm py-3 px-4 pr-8 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-gray-900 text-gray-400">
                        {cat} Categories
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {isLoading ? (
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="animate-pulse"
                >
                  <div className="rounded-xl bg-gray-800/50 h-[300px]" />
                  <div className="mt-4 h-4 bg-gray-800/50 rounded-full w-3/4" />
                  <div className="mt-2 h-4 bg-gray-800/50 rounded-full w-1/2" />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}