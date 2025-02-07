// src/app/products/[id]/not-found.tsx
'use client';

import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900/20"
    >
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Not Found', href: '#' }]} />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gray-800 rounded-lg p-6 text-center"
          >
            <h1 className="text-3xl font-bold text-white">Product Not Found</h1>
            <p className="mt-4 text-lg text-gray-300">The product you are looking for does not exist.</p>
            <Link href="/products" className="mt-6 inline-block rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-500">
              Back to Products
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}