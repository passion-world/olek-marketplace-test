// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
              >
                TechStore
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8 hidden md:block">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`${pathname === item.href
                      ? 'text-purple-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-400'
                    } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    className={`${pathname === item.href
                      ? 'text-purple-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-400'
                      } block px-3 py-2 text-base font-medium`}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}