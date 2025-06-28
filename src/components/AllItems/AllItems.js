"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const products = [
  {
    name: "Luxury AI Earbuds",
    image: "/luxury-earbuds.png",
    price: 12999,
    slug: "luxury-ai-earbuds",
    category: "Accessories",
    brand: "LuxSound",
    description: "Experience the ultimate wireless sound with built-in AI features.",
    variants: ["Black", "White", "Gold"]
  },
  {
    name: "Designer Smart Laptop",
    image: "/luxury-laptop.png",
    price: 89999,
    slug: "designer-smart-laptop",
    category: "Laptops",
    brand: "EliteTech",
    description: "Slim, powerful and stylish — designed for tech elites.",
    variants: ["Silver", "Space Gray"]
  },
  {
    name: "Premium 5G Smartphone",
    image: "/luxury-phone.png",
    price: 74999,
    slug: "premium-5g-smartphone",
    category: "Phones",
    brand: "LuxeMobile",
    description: "Next-gen smartphone with stunning design and blazing speed.",
    variants: ["Midnight", "Ivory", "Rose Gold"]
  },
  {
    name: "Minimalist Smart Hub",
    image: "/window.svg",
    price: 4999,
    slug: "minimalist-smart-hub",
    category: "Smart Hubs",
    brand: "SmartHaus",
    description: "Elegant smart hub to control your luxury lifestyle.",
    variants: ["White"]
  },
];

const categories = ["All", "Phones", "Laptops", "Accessories", "Smart Hubs"];
const brands = ["All", "LuxSound", "EliteTech", "LuxeMobile", "SmartHaus"];

export default function AllItems() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);

  const filteredProducts = products.filter((p) => {
    const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;
    const brandMatch = selectedBrand === "All" || p.brand === selectedBrand;
    const priceMatch = p.price <= maxPrice;
    return categoryMatch && brandMatch && priceMatch;
  });

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#faf7f2] to-[#f0ece5] min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#0e2f2f] uppercase tracking-widest mt-10">
          Our Exclusive Collection
        </h2>
        <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
          Curated technology for those who demand elegance, power, and distinction.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#bfa980] text-white border-[#bfa980]"
                  : "text-[#0e2f2f] border-[#bfa980]/40 hover:bg-[#e9e5d6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="brand" className="text-[#0e2f2f] font-medium text-sm">Brand:</label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="text-sm rounded-full px-4 py-2 border border-[#bfa980]/50 bg-white text-[#0e2f2f] focus:outline-none shadow-sm"
          >
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Price Slider */}
        <div className="flex items-center gap-4">
          <span className="text-[#0e2f2f] font-medium text-sm whitespace-nowrap">
            Up to ₹{maxPrice.toLocaleString()}
          </span>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-52 accent-[#bfa980]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {filteredProducts.map((product, index) => (
          <div key={index} className="relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 group cursor-pointer overflow-hidden">
            <div className="absolute top-3 right-3 bg-[#bfa980]/10 rounded-full p-2">
              <Sparkles className="text-[#bfa980] h-5 w-5" />
            </div>
            <div className="w-full h-48 flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#0e2f2f]">{product.name}</h3>
            <p className="text-[#bfa980] font-bold text-xl mt-2">
              ₹{product.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">{product.brand}</p>

            {/* Buy Now Button */}
            <div className="mt-4">
              <Link
                href={{
                  pathname: `/product/${product.slug}`,
                  query: { name: product.name, image: product.image, price: product.price, description: product.description, variants: JSON.stringify(product.variants) }
                }}
                className="inline-block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-semibold shadow hover:from-[#e9e5d6] hover:to-[#bfa980] border border-[#bfa980]/40 transition-all"
              >
                Buy Now
              </Link>
            </div>

            <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Discover more luxury tech →
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-600 mb-4 text-lg">Looking for something exclusive?</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-bold shadow hover:from-[#e9e5d6] hover:to-[#bfa980] border border-[#bfa980]/40 transition-all"
        >
          Contact Us for Premium Requests
        </Link>
      </div>
    </section>
  );
}
