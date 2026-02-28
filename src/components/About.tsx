import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, HeartHandshake, ShieldCheck, Star } from 'lucide-react';

export default function About() {
  const specialities = [
    "Knowledgeable team of professionals",
    "Complete client satisfaction",
    "Ethical business policies",
    "Live in touch with our customers",
    "Reliable services",
    "Transparent dealings",
    "Easy payment mode",
    "We listen, we understand, we provide solutions",
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      {/* Decorative background blur blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic text-gray-900 mb-6 drop-shadow-sm"
          >
            About Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Welcome to Sidhpur Matrugaya Pandit Prashant Pandya, your trusted spiritual partner for conducting sacred Hindu rituals with devotion, authenticity, and spiritual precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:bg-white/80 group">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <Star className="text-yellow-500 mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-700" />
                Our Specialities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-100/40 backdrop-blur-lg p-8 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-2 transition-all duration-500 hover:shadow-xl group">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 flex items-center">
                <HeartHandshake className="text-yellow-600 mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                A Great Experience
              </h3>
              <p className="text-gray-700">
                Located in the holy town of Sidhpur, Gujarat, which is especially revered for Matrugaya rituals, we offer complete Vedic services for ancestral peace and spiritual liberation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group border-4 border-white/50">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjha4sLfGPpxdNmgO8MOL4qJHtc87UQOvqK7qyvt97XOGg26pri_UvWM36GJXaDpkevImtgdVzmM5CIx6UuzUDUkaWkxxvD-m69RFFDzaj1TM-5K5PfG-W33T0JfnoYqOTY2jrbP6UOMlSNFi1RB91qIh3EXPvL6hFz7PEvVRkqQv3B9wHlk1htN05MsuRG/s932/21110.jpg" 
                alt="Pandit Prashant Pandya" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-2xl font-serif italic mb-1">Pandit Prashant Pandya</p>
                <p className="text-yellow-300 font-medium tracking-wide">Matrugaya Tirth Pandit</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-12 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 max-w-[240px] z-10 hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Authentic</p>
                  <p className="text-sm text-gray-500">Vedic Traditions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
