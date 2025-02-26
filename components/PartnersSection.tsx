'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Partner 1',
    logo: '/images/partner1.png',
  },
  {
    name: 'Partner 2',
    logo: '/images/partner2.png',
  },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          Nasi Partnerzy
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;