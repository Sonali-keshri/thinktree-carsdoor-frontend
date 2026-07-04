'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandShowcase from '@/components/BrandShowcase';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import StackSection from '@/components/StackSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />

      {/* ===== Stack group 1: Hero -> About -> Services ===== */}
      <StackSection zIndex={0}>
        <HeroSection />
      </StackSection>

      <StackSection zIndex={1}>
        <AboutSection />
      </StackSection>

      <StackSection zIndex={2} >
        <ServicesSection />
      </StackSection>

      {/* ===== Normal flow, not part of any stack ===== */}
      <StackSection zIndex={3} >

        <WhyChooseUs />
      </StackSection>
      <StackSection zIndex={4} >
        <BrandShowcase />
      </StackSection>
      {/* ===== Stack group 2: Testimonial -> Blog ===== */}
      <StackSection zIndex={5}>
        <TestimonialSection />
      </StackSection>

      <StackSection zIndex={6} >
        <BlogSection />
      </StackSection>

      {/* ===== Normal flow, not part of any stack ===== */}
      <StackSection zIndex={7} isLast>
      <ContactSection />
      </StackSection>
      <Footer />
    </div>
  );
}