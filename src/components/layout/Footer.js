'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 text-center">
      <p className="text-lg font-semibold mb-4">Luxentra</p>

      <div className="text-sm text-gray-400 space-x-6 mb-6">
        <Link href="/about" className="hover:text-white">About</Link>
        <Link href="/products" className="hover:text-white">Products</Link>
        <Link href="/contact" className="hover:text-white">Contact</Link>
      </div>

      <p className="text-xs text-gray-500">© {new Date().getFullYear()} Luxentra. All rights reserved.</p>
    </footer>
  );
}
