'use client';

import Image from 'next/image';

const scenes = [
  {
    title: "Create with Intelligence",
    subtitle: "AI-powered tools for your dream studio.",
    image: "/cai.jpeg",
  },
  {
    title: "Design Your Workflow",
    subtitle: "Minimalist hubs & luxe laptops for productivity.",
    image: "/dyw.jpeg",
  },
  {
    title: "Live Effortlessly",
    subtitle: "Smart lifestyle gadgets that elevate your every day.",
    image: "/le.jpeg",
  },
];

export default function LifestyleSection() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl font-bold mb-4">Scenes of Luxury Living</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          From desk to downtime, discover how Luxentra fits into every moment of your modern life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {scenes.map((scene, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src={scene.image}
              alt={scene.title}
              width={600}
              height={400}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold mb-1">{scene.title}</h3>
              <p className="text-sm">{scene.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
