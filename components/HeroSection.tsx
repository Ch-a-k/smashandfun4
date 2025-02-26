'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const HeroSection = ({ videoRef }: HeroSectionProps) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl mb-6"
        >
          Uwolnij Swoją Złość
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
          Zrelaksuj się niszcząc przedmioty w naszym pokoju złości. 
          Idealne miejsce na odstresowanie się i dobrą zabawę.
        </motion.p>
        
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary text-white px-8 py-3 rounded-full text-xl font-impact hover:bg-secondary transition-colors"
        >
          Zarezerwuj Teraz
        </motion.button>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const servicesSection = document.getElementById('services');
          servicesSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-12 h-12 text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;