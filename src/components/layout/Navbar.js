"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Products", href: "#" },
  { name: "Collections", href: "#" },
  { name: "About", href: "#" },
  { name: "Support", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/60 dark:bg-[#0e2f2f]/80 backdrop-blur-2xl border-b border-[#bfa980]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-extrabold bg-gradient-to-r from-[#0e2f2f] via-[#bfa980] to-[#e9e5d6] bg-clip-text text-transparent tracking-widest uppercase drop-shadow">
              Luxentra
            </span>
          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-[#0e2f2f] hover:text-[#bfa980] transition-colors tracking-wide uppercase px-2 py-1 rounded-lg hover:bg-[#e9e5d6]/40"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-semibold shadow hover:from-[#e9e5d6] hover:to-[#bfa980] border border-[#bfa980]/30 transition-all">
              Shop Now
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#e9e5d6]/40"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-7 w-7 text-[#0e2f2f]" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-[#0e2f2f]" />
            )}
          </button>
        </div>
        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-white/90 dark:bg-[#0e2f2f]/95 shadow-lg p-6 flex flex-col gap-4 animate-fade-in">
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
            <a href="#" className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-semibold shadow border border-[#bfa980]/30 transition-all">
              Shop Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
