'use client';

import { motion } from 'framer-motion';
import { Shield, Gamepad, Sparkles, Video } from 'lucide-react';

const facilities = [
  {
    icon: Shield,
    title: 'Sprzęt Ochronny',
    description: 'Zapewniamy ubranie ochronne, kaski i rękawice w cenie pakietu.',
  },
  {
    icon: Gamepad,
    title: 'Strefa Relaksu',
    description: 'Odpoczywaj w naszym kąciku relaksacyjnym z konsolą PlayStation.',
  },
  {
    icon: Sparkles,
    title: 'Komfort',
    description: 'Zadbamy o wszystkie niezbędne środki higieniczne dla Twojego komfortu.',
  },
  {
    icon: Video,
    title: 'Nagrywanie',
    description: 'Chcesz nagrać wideo i pochwalić się znajomym? Poinformuj administratora przed wizytą!',
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          Co Zapewniamy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover"
            >
              <facility.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl mb-4">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;