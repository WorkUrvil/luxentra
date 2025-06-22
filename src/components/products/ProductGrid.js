"use client";

import Image from "next/image";
import ProductCard from "./ProductCard";

const bestSellers = [
  {
    id: 1,
    name: "Luxury AI Earbuds",
    image: "/luxury-earbuds.png",
    price: 12999,
  },
  {
    id: 2,
    name: "Designer Smart Laptop",
    image: "/luxury-laptop.png",
    price: 89999,
  },
  {
    id: 3,
    name: "Premium 5G Smartphone",
    image: "/luxury-phone.png",
    price: 74999,
  },
  {
    id: 4,
    name: "Minimalist Smart Hub",
    image: "/window.svg",
    price: 4999,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
