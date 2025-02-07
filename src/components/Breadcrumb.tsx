// src/components/Breadcrumb.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-800 p-4 rounded-md mb-4"
    >
      <ol className="flex space-x-2 text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link href={item.href} className="hover:text-purple-400">
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}