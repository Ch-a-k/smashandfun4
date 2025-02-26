'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Smashandfun Logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/#services" className="nav-link text-lg text-secondary hover:text-primary transition-colors">
                Usługi
              </Link>
              <Link href="/#about" className="nav-link text-lg text-secondary hover:text-primary transition-colors">
                O nas
              </Link>
              <Link href="/#voucher" className="nav-link text-lg text-secondary hover:text-primary transition-colors">
                Voucher
              </Link>
              <Link href="/#contact" className="nav-link text-lg text-secondary hover:text-primary transition-colors">
                Kontakt
              </Link>
              <button className="bg-primary text-white px-6 py-2 rounded-full font-impact text-lg hover:bg-secondary transition-colors">
                Rezerwuj
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/#services"
              className="block px-3 py-2 text-base font-impact text-secondary hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Usługi
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 text-base font-impact text-secondary hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              O nas
            </Link>
            <Link
              href="/#voucher"
              className="block px-3 py-2 text-base font-impact text-secondary hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Voucher
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 text-base font-impact text-secondary hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-full font-impact text-lg hover:bg-secondary transition-colors">
              Rezerwuj
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar