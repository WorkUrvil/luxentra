'use client';

import Image from 'next/image';

export default function LifestyleSection() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Tech That Defines Luxury</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        From designer wearables to intelligent gadgets, Luxentra curates modern technology that enhances your lifestyle with elegance and performance.
      </p>
      <div className="flex justify-center">
        <Image
          // src="/luxury-laptop.png" // You can replace this with a hero lifestyle image (e.g. /luxury-banner.png)
          alt="Luxentra Lifestyle"
          width={900}
          height={450}
          className="rounded-xl shadow-xl object-cover"
        />
      </div>
    </section>
  );
}
