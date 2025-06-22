'use client';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Aarav Mehta',
      review: 'Absolutely stunning quality and delivery was lightning fast. Luxentra is a game changer!',
    },
    {
      name: 'Kiara Sharma',
      review: 'Their smart accessories blend luxury with functionality. Totally in love!',
    },
    {
      name: 'Devansh Iyer',
      review: 'Customer support and packaging were top-notch. Would recommend to anyone serious about tech.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Customers Say</h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-1 bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <p className="text-gray-700 text-sm mb-4">&quot;{t.review}&quot;</p>
            <p className="text-sm font-semibold text-gray-900">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
