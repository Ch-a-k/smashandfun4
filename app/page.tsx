'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import VoucherSection from '@/components/VoucherSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative">
      <HeroSection videoRef={videoRef} />
      <ServicesSection />
      <FacilitiesSection />
      <VoucherSection />
      <TestimonialsSection />
      <PartnersSection />
      <Footer />

      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-primary p-3 rounded-full shadow-lg hover:bg-secondary transition-colors"
        >
          <ChevronDown className="w-6 h-6 text-white transform rotate-180" />
        </button>
      </div>
    </div>
  );
}