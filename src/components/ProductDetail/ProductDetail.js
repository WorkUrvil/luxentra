"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const variants = JSON.parse(searchParams.get("variants") || "[]");

  const [selectedVariant, setSelectedVariant] = useState(variants[0] || "");

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#faf7f2] to-[#f0ece5] min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="w-full h-[400px] bg-white rounded-3xl flex items-center justify-center shadow-lg">
          <Image
            src={image || "/placeholder.png"}
            alt={name || "Product"}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-extrabold text-[#0e2f2f] mb-2">{name}</h1>
          <p className="text-[#bfa980] text-xl font-semibold mb-4">₹{Number(price).toLocaleString()}</p>

          <p className="text-gray-600 mb-6 max-w-lg leading-relaxed">{description}</p>

          {/* Variants */}
          {variants.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[#0e2f2f] font-medium mb-2">Select Variant:</h4>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                      selectedVariant === variant
                        ? "bg-[#bfa980] text-white border-[#bfa980]"
                        : "text-[#0e2f2f] border-[#bfa980]/40 hover:bg-[#e9e5d6]"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-bold shadow hover:from-[#e9e5d6] hover:to-[#bfa980] border border-[#bfa980]/40 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
