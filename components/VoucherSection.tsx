'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gift } from 'lucide-react';

const VoucherSection = () => {
  return (
    <section id="voucher" className="py-20 bg-[--dark] shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Gift className="w-5 h-5" />
              <span className="font-impact">POMYSŁ NA PREZENT</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl text-white">
              Podaruj Bliskim Niezapomniane Emocje!
            </h2>
            
            <p className="text-xl text-gray-400">
              Kup voucher na dowolny pakiet Smash&Fun i pozwól im przeżyć ekscytującą przygodę w Pokoju Złości, 
              którą zapamiętają na długo!
            </p>
            
            <button className="bg-primary text-white px-8 py-3 rounded-full text-xl font-impact 
              hover:bg-secondary transition-colors inline-flex items-center space-x-2"
            >
              <Gift className="w-6 h-6" />
              <span>Kup Voucher</span>
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/voucher.png"
                alt="Smash&Fun Voucher"
                fill
                className="object-cover"
              />
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg"
            >
              <Gift className="w-8 h-8 animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoucherSection;