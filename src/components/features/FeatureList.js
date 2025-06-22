'use client';

import {
  ShieldCheckIcon,
  RocketLaunchIcon,
  GiftIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const uspFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Premium Materials',
    desc: 'Crafted with the finest materials and build quality.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Next-Gen Design',
    desc: 'Modern tech with sleek, timeless aesthetics.',
  },
  {
    icon: GiftIcon,
    title: 'Exclusive Collections',
    desc: 'Limited edition gadgets curated for enthusiasts.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Smart Compatibility',
    desc: 'Seamless experience across all devices.',
  },
];

export default function FeatureList() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Luxentra?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
        {uspFeatures.map(({ icon: Icon, title, desc }, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <Icon className="h-8 w-8 text-black mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
