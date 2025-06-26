// "use client";

// import Image from "next/image";

// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={300}
//         height={300}
//         className="rounded mb-4 mx-auto"
//       />
//       <h4 className="font-semibold mb-1 text-center">{product.name}</h4>
//       <p className="text-sm text-gray-600 mb-4 text-center">
//         ₹{product.price.toLocaleString()}
//       </p>
//       <button className="mt-auto bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
//         Buy Now
//       </button>
//     </div>
//   );
// }

// components/ProductCard.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-primary font-bold text-xl">₹{product.price.toLocaleString()}</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
        <p className="text-sm mb-2">Luxury build with smart features</p>
        <button className="mt-2 border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
          View Details
        </button>
      </div>

      {/* Optional Badge */}
      {product.id === 2 && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
          Editor’s Pick
        </span>
      )}
    </motion.div>
  );
}

