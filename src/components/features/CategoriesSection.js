'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const categories = [
  { title: 'Luxury Phones', image: '/luxury-phone.jpg' },
  { title: 'Smart Laptops', image: '/luxury-phone.jpg' },
  { title: 'AI Accessories', image: '/luxury-phone.jpg' },
  { title: 'Tech Lifestyle', image: '/luxury-phone.jpg' },
  { title: 'Designer Audio', image: '/luxury-phone.jpg' },
  { title: 'Home Tech', image: '/luxury-phone.jpg' },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Categories
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Autoplay]}
        className="pb-12"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out text-center px-6 py-8 flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-48 h-48 flex justify-center items-center mb-6">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={200}
                  height={200}
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-xl font-semibold mt-2">{cat.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
