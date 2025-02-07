// src/components/Footer.tsx
'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="bg-gray-900 dark:bg-gray-800 text-gray-300 dark:text-gray-200 py-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechStore. All rights reserved.
        </p>
        <p className="text-sm">
          <a href="/privacy" className="text-purple-400 hover:text-purple-300">
            Privacy Policy
          </a>
          {' | '}
          <a href="/terms" className="text-purple-400 hover:text-purple-300">
            Terms of Service
          </a>
        </p>
      </div>
    </motion.footer>
  );
}