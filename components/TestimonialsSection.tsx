'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anna Kowalska',
    role: 'Manager',
    content: 'Świetny sposób na odstresowanie się po ciężkim dniu w pracy! Profesjonalna obsługa i świetna atmosfera.',
    rating: 5,
  },
  {
    name: 'Piotr Nowak',
    role: 'Programista',
    content: 'Byłem tu z zespołem na team building. Wszyscy byli zachwyceni! Polecam każdemu, kto chce się odstresować w nietypowy sposób.',
    rating: 5,
  },
  {
    name: 'Marta Wiśniewska',
    role: 'Nauczycielka',
    content: 'Fantastyczne miejsce! Bezpieczne, profesjonalne i naprawdę pomaga się odstresować. Na pewno wrócę!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Co Mówią Nasi Klienci</h2>
          <p className="text-xl text-gray-600">
            Poznaj opinie osób, które już skorzystały z naszych usług
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-impact text-xl">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-impact text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;