'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const originalTestimonials = [
  {
    name: 'Urvil Kargathala',
    review: 'Absolutely stunning quality and delivery was lightning fast. Luxentra is a game changer!',
  },
  {
    name: 'Dharmil Gajjar',
    review: 'Their smart accessories blend luxury with functionality. Totally in love!',
  },
  {
    name: 'Urvil Kargathala',
    review: 'Their smart accessories blend luxury with functionality. Totally in love!',
  },
  {
    name: 'Dharmil Gajjar',
    review: 'The unboxing experience felt like opening a premium designer item. Love the detailing.',
  },
  {
    name: 'Urvil Kargathala',
    review: 'I feel like I own the future. Luxentra’s gadgets are bold, smart, and sexy.',
  },
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(shuffleArray(originalTestimonials));
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-4xl font-bold text-center mb-14">
        What Our Customers Say
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={false}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="max-w-6xl mx-auto pb-10"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full flex flex-col justify-between backdrop-blur-xl bg-white/70 border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.3l6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-800 text-base leading-relaxed italic mb-6">
                “{t.review}”
              </p>

              {/* Name */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <p className="text-gray-900 font-medium">{t.name}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
