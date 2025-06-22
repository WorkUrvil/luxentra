'use client';

import HeroSection from '@/components/hero/HeroSection';
import CategoriesSection from '@/components/features/CategoriesSection';
import ProductGrid from '@/components/products/ProductGrid';
import FeatureList from '@/components/features/FeatureList';
import LifestyleSection from '@/components/features/LifestyleSection';
import TestimonialSection from '@/components/testimonials/TestimonialSection';
import NewsletterSection from '@/components/common/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <ProductGrid />
      <FeatureList />
      <LifestyleSection />
      <TestimonialSection />
      {/* <NewsletterSection /> */}
    </>
  );
}
