'use client';

import Image from 'next/image';

const categories = [
  { title: 'Luxury Phones', image: '/luxury-phone.jpg' },
  { title: 'Smart Laptops', image: '/luxury-laptop.png' },
  { title: 'AI Accessories', image: '/luxury-earbuds.png' },
  { title: 'Tech Lifestyle', image: '/window.svg' },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 text-center rounded-xl hover:shadow-lg transition"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              width={100}
              height={100}
              className="mx-auto mb-4"  
            />
            <h3 className="text-lg font-semibold">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
