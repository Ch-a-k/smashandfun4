'use client';

import { motion } from 'framer-motion';
import { Package, Star } from 'lucide-react';

const packages = [
  {
    name: 'TRUDNY',
    items: '35 szklanych przedmiotów, 5 meble, 8 sprzętów RTV i AGD, 10 mniejszych sprzętów RTV i AGD',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-6 osoby',
    duration: 'do 180 min',
    price: '999 PLN',
  },
  {
    name: 'ŚREDNI',
    items: '30 szklanych przedmiotów, 3 meble, 5 sprzętów RTV i AGD',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-4 osoby',
    duration: 'do 120 min',
    price: '499 PLN',
    bestseller: true,
  },
  {
    name: 'ŁATWY',
    items: '25 szklanych przedmiotów, 2 meble, 3 sprzęty RTV i AGD',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-2 osoby',
    duration: 'do 45 min',
    price: '299 PLN',
  },
  {
    name: 'BUŁKA Z MASŁEM',
    items: '25 szklanych przedmiotów',
    tools: 'ubranie, kask, rękawice',
    capacity: '1-2 osoby',
    duration: 'do 30 min',
    price: '199 PLN',
  },
];

const additionalItems = [
  { name: '10 szklanych przedmiotów', price: '50 PLN' },
  { name: 'Klawiatura', price: '20 PLN' },
  { name: 'TV/monitor', price: '100 PLN' },
  { name: 'Meble', price: '120 PLN' },
  { name: 'Drukarka', price: '50 PLN' },
  { name: 'Myszka komputerowa', price: '10 PLN' },
  { name: 'Telefon', price: '30 PLN' },
  { name: 'Nagrywanie GoPro', price: '50 PLN' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          Wybierz Swój Pakiet
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-2xl p-6 shadow-xl ${
                pkg.bestseller ? 'bestseller-card' : 'border-2 border-secondary'
              }`}
            >
              {pkg.bestseller && (
                <div className="bestseller-badge">
                  <Star className="w-5 h-5 inline-block mr-1" />
                  BESTSELLER
                </div>
              )}
              
              <h3 className="text-2xl mb-4">{pkg.name}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg mb-2">DO ZDEMOLOWANIA</h4>
                <p className="text-gray-600">{pkg.items}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg mb-2">NARZĘDZIA</h4>
                <p className="text-gray-600">{pkg.tools}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600">{pkg.capacity}</p>
                <p className="text-gray-600">{pkg.duration}</p>
              </div>
              
              <p className="text-3xl font-impact text-primary">{pkg.price}</p>
              
              <button className="mt-4 w-full bg-primary text-white py-3 rounded-full font-impact hover:bg-secondary transition-colors">
                Wybierz
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-2xl p-8"
        >
          <h3 className="text-2xl mb-6 text-center">Dodatkowe Przedmioty</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
              >
                <span>{item.name}</span>
                <span className="font-impact text-primary">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;