"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <section className="bg-black text-white text-center py-24 px-6">
      <h1 className="text-5xl font-extrabold mb-4">Luxury Meets Technology</h1>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Explore curated gadgets & designer tech to elevate your lifestyle.
      </p>
      <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200">
        <ShoppingBagIcon className="h-5 w-5" />
        Shop Now
      </button>
    </section>
  );
}
