'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer, viewportConfig } from '../utils/animation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        when: "afterChildren"
      }
    }
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-10">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-36">
                <Image
                  src={scrolled ? "/images/logo.png" : "/images/logo2.png"}
                  alt="Smashandfun Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {!scrolled && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                />
              )}
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {['Usługi', 'O nas', 'Voucher', 'Kontakt'].map((item, index) => (
                <Link 
                  key={item} 
                  href={`/#${item.toLowerCase().replace(' ', '-')}`}
                  className={`px-3 py-2 text-lg font-impact tracking-wide ${
                    scrolled ? 'text-secondary' : 'text-white'
                  } hover:text-primary relative group transition-colors duration-300`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            
            {/* Call to Action Button */}
            <div className="ml-8 flex items-center space-x-3">
              <motion.a 
                href="tel:+48123456789"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-3 py-2 rounded-full ${
                  scrolled ? 'text-secondary' : 'text-white'
                } hover:text-primary`}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-lg font-impact">+48 123 456 789</span>
              </motion.a>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(243, 110, 33, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-2 rounded-full font-impact text-lg 
                         hover:bg-primary-dark transition-all duration-300 flex items-center space-x-2
                         shadow-lg shadow-primary/20"
              >
                <Calendar className="w-5 h-5" />
                <span>Rezerwuj</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${
                scrolled 
                  ? 'text-secondary bg-gray-100' 
                  : 'text-white bg-white/10 backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-5 space-y-3">
              {['Usługi', 'O nas', 'Voucher', 'Kontakt'].map((item, index) => (
                <motion.div key={item} variants={menuItemVariants}>
                  <Link
                    href={`/#${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-3 py-2 text-xl font-impact text-secondary hover:text-primary 
                              transition-colors flex items-center justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </Link>
                  <div className="h-[1px] bg-gray-100 mt-2"></div>
                </motion.div>
              ))}
              
              <motion.div variants={menuItemVariants} className="pt-4 flex flex-col space-y-3">
                <a 
                  href="tel:+48123456789"
                  className="flex items-center px-3 py-2 text-xl font-impact text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span>+48 123 456 789</span>
                </a>
                
                <button className="w-full bg-primary text-white p-4 rounded-xl font-impact text-xl 
                                  hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2
                                  shadow-lg shadow-primary/20">
                  <Calendar className="w-6 h-6" />
                  <span>Rezerwuj Teraz</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;