'use client';

import Image from 'next/image';
import { Gift, Star, Sparkles, CreditCard } from 'lucide-react';

const VoucherSection = () => {
  return (
    <section id="voucher" className="py-20 bg-[--dark] shadow-2xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center space-x-2 bg-white/10 text-white px-5 py-2 rounded-full backdrop-blur-md border border-white/20 mb-4"
          >
            <Gift className="w-5 h-5 text-primary" />
            <span>Voucher Prezentowy</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-impact text-white mb-4">
            Podaruj <span className="text-primary">Emocje</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Voucher na wizytę w Smash&Fun to idealny prezent dla każdego, kto potrzebuje odreagować stres
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-impact text-white mb-2">Personalizacja</h3>
                <p className="text-gray-300">
                  Możesz spersonalizować voucher dodając własną wiadomość dla osoby obdarowanej
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-impact text-white mb-2">Płatność Online</h3>
                <p className="text-gray-300">
                  Szybka i bezpieczna płatność online z natychmiastowym otrzymaniem vouchera na e-mail
                </p>
              </div>
            </div>
            
            <div>
              <button className="btn-primary w-full md:w-auto">
                <Gift className="w-5 h-5" />
                <span className="ml-2">Kup Voucher</span>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative z-10">
            <div className="bestseller-card relative aspect-[16/10] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-dark/30 z-10"></div>
              <Image
                src="/images/voucher.png"
                alt="Smash&Fun Voucher"
                fill
                className="object-cover"
              />
              
              <span className="bestseller-badge">
                <Star className="w-5 h-5 inline-block mr-1" />
                BESTSELLER
              </span>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h3 className="text-2xl font-impact text-white">Voucher Smash&Fun</h3>
                <p className="text-white/80">Idealny prezent dla każdego</p>
              </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 w-40 h-40 text-primary/20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#f36e21" fillOpacity="0.6"/>
              </svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 text-primary/20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" fill="#f36e21" fillOpacity="0.8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoucherSection;