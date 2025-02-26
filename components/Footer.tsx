'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, ArrowRight, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer, viewportConfig } from '../utils/animation';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-secondary text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          {...staggerContainer}
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company info */}
          <motion.div 
            {...fadeInUp}
            whileInView="animate"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-36">
                <Image
                  src="/images/logo2.png"
                  alt="Smashandfun Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority={false}
                />
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Zrelaksuj się niszcząc przedmioty w naszym pokoju złości. 
              Idealne miejsce na odstresowanie się i dobrą zabawę.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div 
            {...fadeInUp}
            whileInView="animate"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <h3 className="text-2xl font-impact relative inline-block">
              Menu
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {['Usługi', 'O nas', 'Voucher', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/#${item.toLowerCase().replace(' ', '-')}`} 
                    className="group flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            {...fadeInUp}
            whileInView="animate"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <h3 className="text-2xl font-impact relative inline-block">
              Kontakt
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <a href="tel:+48123456789" className="text-white hover:text-primary transition-colors">+48 123 456 789</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@smashandfun.pl" className="text-white hover:text-primary transition-colors">info@smashandfun.pl</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Adres</p>
                  <span className="text-white">ul. Przykładowa 123, Warszawa</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Opening hours */}
          <motion.div 
            {...fadeInUp}
            whileInView="animate"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <h3 className="text-2xl font-impact relative inline-block">
              Godziny Otwarcia
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="text-sm text-gray-400">Poniedziałek - Piątek</p>
                  <p className="text-white">10:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="text-sm text-gray-400">Sobota - Niedziela</p>
                  <p className="text-white">12:00 - 22:00</p>
                </div>
              </li>
            </ul>
            
            <div className="pt-4">
              <button className="btn-primary w-full">
                Zarezerwuj Teraz
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section with copyright */}
        <motion.div 
          {...fadeInUp}
          whileInView="animate"
          viewport={viewportConfig}
          className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Smashandfun. Wszystkie prawa zastrzeżone.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-primary">Polityka Prywatności</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-primary">Regulamin</Link>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;