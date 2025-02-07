// src/components/ProductDetails.tsx
'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2"
        >
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-800">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <div className="flex flex-col">
                <h1 className="text-3xl font-bold tracking-tight text-white">{product.name}</h1>
                <div className="mt-4">
                    <span className="inline-flex items-center rounded-full bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-300">
                        {product.category}
                    </span>
                </div>
                <p className="mt-6 text-xl font-semibold text-purple-400">${product.price}</p>
                <div className="mt-6 space-y-6">
                    <p className="text-base text-gray-300">{product.description}</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 flex w-full items-center justify-center rounded-lg bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    );
}