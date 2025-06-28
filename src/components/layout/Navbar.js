'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Products', href: 'all-items' },
  { name: 'Collections', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Support', href: '#' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/60 dark:bg-[#0e2f2f]/80 backdrop-blur-2xl border-b border-[#bfa980]/20 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative h-24 flex items-center justify-between">
          <motion.div
            initial={false}
            animate={{
              position: scrolled ? 'relative' : 'absolute',
              top: scrolled ? 0 : '50%',
              left: scrolled ? 0 : '50%',
              x: scrolled ? 0 : '-50%',
              y: scrolled ? 0 : '-50%',
              justifyContent: scrolled ? 'flex-start' : 'center',
              width: scrolled ? 'auto' : '100%',
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="flex items-center"
          >
            <motion.a
              href="#"
              animate={{
                fontSize: scrolled ? '1.5rem' : '2.5rem',
              }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="font-serif font-extrabold tracking-widest uppercase drop-shadow bg-gradient-to-r from-[#0e2f2f] via-[#bfa980] to-[#e9e5d6] bg-clip-text text-transparent"
            >
              Luxentra
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          {scrolled && (
            <div className="hidden md:flex items-center gap-8 ml-auto">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-[#0e2f2f] hover:text-[#bfa980] transition-colors tracking-wide uppercase px-2 py-1 rounded-lg hover:bg-[#e9e5d6]/40"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-semibold shadow hover:from-[#e9e5d6] hover:to-[#bfa980] border border-[#bfa980]/30 transition-all"
              >
                Shop Now
              </a>
            </div>
          )}

          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#e9e5d6]/40 ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-7 w-7 text-[#0e2f2f]" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-[#0e2f2f]" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 rounded-2xl bg-white/90 dark:bg-[#0e2f2f]/95 shadow-lg p-6 flex flex-col gap-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-[#0e2f2f] hover:text-[#bfa980] transition-colors tracking-wide uppercase px-2 py-2 rounded-lg hover:bg-[#e9e5d6]/40"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-semibold shadow border border-[#bfa980]/30 transition-all"
              >
                Shop Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
