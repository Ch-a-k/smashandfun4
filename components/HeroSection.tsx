'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeIn, fadeInUp, viewportConfig } from '../utils/animation';

interface HeroSectionProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const HeroSection = ({ videoRef }: HeroSectionProps) => {
  // Parallax effect for background elements
  const handleMouseMove = (e: React.MouseEvent) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 15;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 15;
    
    const elements = document.querySelectorAll('.parallax');
    elements.forEach((el: any) => {
      const speed = el.getAttribute('data-speed') || 1;
      el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      
      {/* Main content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10 pt-20 pb-20">
        {/* Logo or Decorative element */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-primary rounded-full opacity-30 animate-pulse-slow" />
            <div className="absolute inset-2 bg-primary rounded-full opacity-60 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
              <span className="text-4xl font-impact">S&F</span>
            </div>
          </div>
        </motion.div>
        
        {/* Main headline with parallax effect */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-impact text-white mb-6 parallax"
            data-speed="0.9"
          >
            <span className="block">Uwolnij</span>
            <span className="block">
              <span className="text-primary">Swoje</span> Emocje
            </span>
          </motion.h1>
        </div>
        
        <motion.p
          {...fadeInUp}
          animate="animate"
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-200 parallax"
          data-speed="0.8"
        >
          Odkryj niezapomniane doświadczenie rozbijania przedmiotów w bezpiecznym otoczeniu. 
          Uwolnij stres, baw się i poczuj ulgę!
        </motion.p>
        
        <motion.div
          {...fadeInUp}
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          {/* Main CTA Button */}
          <button className="btn-3d group">
            <span className="flex items-center gap-2">
              REZERWUJ TERAZ
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white text-sm mb-2 opacity-80">PRZEWIŃ W DÓŁ</span>
        <ChevronDown className="w-6 h-6 text-primary animate-bounce-slow" />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-primary to-secondary opacity-80" />
      <div className="absolute top-4 left-0 w-full h-[1px] bg-white/20" />
    </section>
  );
};

export default HeroSection;