'use client';

import { Shield, Gamepad, Sparkles, Video, Check } from 'lucide-react';
import Image from 'next/image';

const facilities = [
  {
    icon: Shield,
    title: 'Sprzęt Ochronny',
    description: 'Zapewniamy ubranie ochronne, kaski i rękawice w cenie pakietu.',
    features: ['Kaski ochronne', 'Rękawice', 'Ubranie ochronne', 'Ochrona oczu'],
  },
  {
    icon: Gamepad,
    title: 'Strefa Relaksu',
    description: 'Odpoczywaj w naszym kąciku relaksacyjnym z konsolą PlayStation.',
    features: ['Konsola PlayStation', 'Wygodne kanapy', 'Napoje', 'Przekąski'],
  },
  {
    icon: Sparkles,
    title: 'Komfort',
    description: 'Zadbamy o wszystkie niezbędne środki higieniczne dla Twojego komfortu.',
    features: ['Prysznice', 'Ręczniki', 'Szafki na rzeczy', 'Środki higieniczne'],
  },
  {
    icon: Video,
    title: 'Nagrywanie',
    description: 'Chcesz nagrać wideo i pochwalić się znajomym? Poinformuj administratora przed wizytą!',
    features: ['Kamera GoPro', 'Profesjonalny montaż', 'Zdjęcia', 'Udostępnianie'],
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-20 h-20">
          <Image src="/images/pattern.svg" alt="Pattern" width={80} height={80} className="opacity-20" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20">
          <Image src="/images/pattern.svg" alt="Pattern" width={80} height={80} className="opacity-20" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-impact mb-4">
            Co <span className="text-primary">Zapewniamy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dbamy o Twój komfort i bezpieczeństwo, zapewniając wszystko, czego potrzebujesz
            do niezapomnianej wizyty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <facility.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-impact">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-impact mb-3">{facility.title}</h3>
              <p className="text-gray-600 mb-4">{facility.description}</p>
              
              <ul className="space-y-2">
                {facility.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center text-gray-700"
                  >
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            Zarezerwuj Wizytę
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;