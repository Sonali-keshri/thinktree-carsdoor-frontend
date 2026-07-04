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

   
      <StackSection zIndex={0}>
        <HeroSection />
      </StackSection>

      <StackSection zIndex={1}>
        <AboutSection />
      </StackSection>

      <StackSection zIndex={2} >
        <ServicesSection />
      </StackSection>


        <WhyChooseUs zIndex={3}/>

      <StackSection zIndex={4} >
        <BrandShowcase />
      </StackSection>
      <StackSection zIndex={5}>
        <TestimonialSection />
      </StackSection>

      <StackSection zIndex={6} >
        <BlogSection />
      </StackSection>

      <StackSection zIndex={7} isLast>
      <ContactSection />
      </StackSection>
      <Footer />
    </div>
  );
}