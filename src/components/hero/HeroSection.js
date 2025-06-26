// "use client";

// import { ShoppingBagIcon } from "@heroicons/react/24/solid";

// export default function HeroSection() {
//   return (
//     <section className="bg-black text-white text-center py-24 px-6">
//       <h1 className="text-5xl font-extrabold mb-4">Luxury Meets Technology</h1>
//       <p className="text-lg mb-6 max-w-xl mx-auto">
//         Explore curated gadgets & designer tech to elevate your lifestyle.
//       </p>
//       <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200">
//         <ShoppingBagIcon className="h-5 w-5" />
//         Shop Now
//       </button>
//     </section>
//   );
// }

'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 mt-60 mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-5">
          Luxury Meets Technology
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Explore curated gadgets & designer tech to elevate your lifestyle.
        </p>
      </div>
    </section>
  );
}
