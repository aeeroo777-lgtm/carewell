import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import ReviewsMarquee from '@/app/components/ReviewsMarquee';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsMarquee />
      <ContactSection />
      <Footer />
    </main>
  );
}