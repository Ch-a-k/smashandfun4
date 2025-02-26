'use client';

import { Package, Star, Check, ChevronRight, Hammer, Shield, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import { fadeIn, fadeInUp, staggerContainer, viewportConfig } from '../utils/animation';

const packages = [
  {
    name: 'TRUDNY',
    items: '35 szklanych przedmiotów, 5 meble, 8 sprzętów RTV i AGD, 10 mniejszych sprzętów RTV i AGD',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-6 osób',
    duration: 'do 180 min',
    price: '999 PLN',
    icon: Hammer,
  },
  {
    name: 'ŚREDNI',
    items: '30 szklanych przedmiotów, 3 meble, 5 sprzętów RTV i AGD',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-4 osoby',
    duration: 'do 120 min',
    price: '499 PLN',
    bestseller: true,
    icon: Hammer,
  },
  {
    name: 'ŁATWY',
    items: '25 szklanych przedmiotów, 2 meble, 3 sprzęty RTV i AGD',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-2 osoby',
    duration: 'do 45 min',
    price: '299 PLN',
    icon: Hammer,
  },
  {
    name: 'BUŁKA Z MASŁEM',
    items: '25 szklanych przedmiotów',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-2 osoby',
    duration: 'do 30 min',
    price: '199 PLN',
    icon: Hammer,
  },
];

const additionalItems = [
  { name: '10 szklanych przedmiotów', price: '50 PLN', icon: Package },
  { name: 'Klawiatura', price: '20 PLN', icon: Package },
  { name: 'TV/monitor', price: '100 PLN', icon: Package },
  { name: 'Meble', price: '120 PLN', icon: Package },
  { name: 'Drukarka', price: '50 PLN', icon: Package },
  { name: 'Myszka komputerowa', price: '10 PLN', icon: Package },
  { name: 'Telefon', price: '30 PLN', icon: Package },
  { name: 'Nagrywanie GoPro', price: '50 PLN', icon: Package },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20">
          <Image src="/images/pattern.svg" alt="Pattern" width={80} height={80} className="opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20">
          <Image src="/images/pattern.svg" alt="Pattern" width={80} height={80} className="opacity-20" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-impact mb-4">
            Wybierz Swój <span className="text-primary">Pakiet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy różne pakiety dostosowane do Twoich potrzeb. Wybierz ten, który najlepiej Ci odpowiada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-6 ${
                pkg.bestseller ? 'bestseller-card' : 'bg-white shadow-xl hover:shadow-2xl transition-all duration-300'
              }`}
            >
              {pkg.bestseller && (
                <div className="bestseller-badge">
                  <Star className="w-5 h-5 inline-block mr-1" />
                  BESTSELLER
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-impact">{pkg.name}</h3>
              </div>
              
              <div className="mb-6 bg-gray-50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <Package className="w-5 h-5 text-primary mr-2" />
                  DO ZDEMOLOWANIA
                </h4>
                <p className="text-gray-600">{pkg.items}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  NARZĘDZIA
                </h4>
                <p className="text-gray-600">{pkg.tools}</p>
              </div>
              
              <div className="mb-6 space-y-2">
                <p className="text-gray-600 flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  {pkg.capacity}
                </p>
                <p className="text-gray-600 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  {pkg.duration}
                </p>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <p className="text-3xl font-impact text-primary">{pkg.price}</p>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <button className="w-full btn-primary">
                Wybierz
              </button>
            </div>
          ))}
        </div>

        <div
          className="bg-gray-50 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-impact mb-6 text-center relative inline-block">
            Dodatkowe Przedmioty
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span>{item.name}</span>
                </div>
                <span className="font-impact text-primary">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;