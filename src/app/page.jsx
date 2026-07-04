
'use client';

import { Package } from 'lucide-react';
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

      {/* ===== Stacked scroll sections ===== */}
      {/* <StackSection zIndex={0}> */}
      <HeroSection />
      {/* </StackSection> */}

      <StackSection zIndex={0}>
        <AboutSection />
      </StackSection>

      <StackSection zIndex={1} isLast>
        <ServicesSection />
      </StackSection>



      <WhyChooseUs />



      <BrandShowcase />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
