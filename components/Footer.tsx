'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="Smashandfun Logo"
                width={180}
                height={50}
                className="mb-4 brightness-0 invert"
                priority={false}
              />
            </Link>
            <p className="text-gray-300">
              Zrelaksuj się niszcząc przedmioty w naszym pokoju złości.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+48123456789">+48 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@smashandfun.pl">info@smashandfun.pl</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>ul. Przykładowa 123, Warszawa</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/#voucher" className="hover:text-primary transition-colors">
                  Voucher
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {new Date().getFullYear()} Smashandfun. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;