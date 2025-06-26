"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold mb-2">Luxentra</h3>
          <p className="text-sm text-gray-400 mb-4">
            Elevating your lifestyle with premium tech & elegant design.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-1 font-semibold">For Queries:</p>
            <a
              href="mailto:support@luxentra.com"
              className="hover:text-white flex items-center justify-center md:justify-start gap-2"
            >
              <Mail size={16} />
              support@luxentra.com
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex justify-center md:justify-start gap-4 text-gray-400">
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Luxentra. All rights reserved.
      </div>
    </footer>
  );
}
