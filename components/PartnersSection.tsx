'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const partners = [
  {
    name: 'Partner 1',
    logo: '/images/partner1.png',
    url: 'https://example.com/partner1',
  },
  {
    name: 'Partner 2',
    logo: '/images/partner2.png',
    url: 'https://example.com/partner2',
  }
];

const PartnersSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark"></div>
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-impact mb-4">
            Nasi <span className="text-primary">Partnerzy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Współpracujemy z najlepszymi firmami, aby zapewnić Ci najwyższą jakość usług
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlay on sides */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div 
            className="flex flex-wrap justify-center items-center gap-12 md:gap-24 py-8"
          >
            {partners.map((partner, index) => (
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative w-48 h-24 grayscale hover:grayscale-0 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-4"
                />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            <span className="mr-2">Zostań naszym partnerem</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;