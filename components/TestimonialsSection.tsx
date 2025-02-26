'use client';

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { fadeIn, fadeInUp, staggerContainer, viewportConfig } from '../utils/animation';

const testimonials = [
  {
    name: 'Anna Kowalska',
    role: 'Manager',
    content: 'Świetny sposób na odstresowanie się po ciężkim dniu w pracy! Profesjonalna obsługa i świetna atmosfera.',
    rating: 5,
    image: '/images/testimonial1.jpg'
  },
  {
    name: 'Piotr Nowak',
    role: 'Programista',
    content: 'Byłem tu z zespołem na team building. Wszyscy byli zachwyceni! Polecam każdemu, kto chce się odstresować w nietypowy sposób.',
    rating: 5,
    image: '/images/testimonial2.jpg'
  },
  {
    name: 'Marta Wiśniewska',
    role: 'Nauczycielka',
    content: 'Fantastyczne miejsce! Bezpieczne, profesjonalne i naprawdę pomaga się odstresować. Na pewno wrócę!',
    rating: 5,
    image: '/images/testimonial3.jpg'
  },
  {
    name: 'Kamil Zieliński',
    role: 'Przedsiębiorca',
    content: 'Doskonały sposób na pozbycie się stresu! Obsługa bardzo profesjonalna, wszystko dokładnie wytłumaczone. Polecam!',
    rating: 5,
    image: '/images/testimonial4.jpg'
  },
];

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-impact mb-4">
            Co mówią nasi <span className="text-primary">Klienci</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sprawdź opinie osób, które już skorzystały z naszych usług
          </p>
        </div>

        {/* Desktop view - grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-impact">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
              
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
        
        {/* Mobile view - carousel */}
        <div className="md:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl relative">
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-impact">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                              fill={i < testimonial.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm italic mb-3">"{testimonial.content}"</p>
                    
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        
        <div
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            Dodaj Swoją Opinię
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;