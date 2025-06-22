"use client";

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded mb-4 mx-auto"
      />
      <h4 className="font-semibold mb-1 text-center">{product.name}</h4>
      <p className="text-sm text-gray-600 mb-4 text-center">
        ₹{product.price.toLocaleString()}
      </p>
      <button className="mt-auto bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
        Buy Now
      </button>
    </div>
  );
}
