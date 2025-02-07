// src/components/ProductCard.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              title={product.name}
              className="h-full w-full object-cover object-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">
              {product.name}
            </h2>
            <div className="mt-4 flex items-center justify-between">
              <motion.p 
                className="text-2xl font-bold text-purple-400"
                whileHover={{ scale: 1.05 }}
              >
                ${product.price}
              </motion.p>
              <motion.span 
                className="inline-flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-400/20"
                whileHover={{ scale: 1.05 }}
              >
                {product.category}
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}