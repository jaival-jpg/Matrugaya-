import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    name: "Sameer Singh",
    language: "Hindi",
    text: "उनकी सेवाओं से खुश हूँ, पंडित जी बहुत मददगार थे और उन्होंने हमें अन्य पूजा सामग्री के लिए भी मार्गदर्शन किया।"
  },
  {
    name: "Jaival Pandya",
    language: "Gujarati",
    text: "તેમની સેવાઓથી ખુશ છીએ, પંડિતજી ખૂબ જ મદદરૂપ હતા અને અન્ય પૂજા સામગ્રી માટે પણ અમને માર્ગદર્શન આપ્યું."
  },
  {
    name: "Shinde",
    language: "Marathi",
    text: "त्यांच्या सेवांवर खूश आहोत, पंडितजी खूप उपयुक्त ठरले आणि त्यांनी आम्हाला इतर पूजा साहित्यासाठीही मार्गदर्शन केले."
  },
  {
    name: "Kartik Kumar",
    language: "Kannada",
    text: "ಅವರ ಸೇವೆಗಳಿಂದ ಸಂತೋಷವಾಗಿದೆ, ಪಂಡಿತ್ ಜಿ ಅವರು ತುಂಬಾ ಸಹಾಯ ಮಾಡಿದರು ಮತ್ತು ಇತರ ಪೂಜಾ ಸಾಮಗ್ರಿಗಳಿಗೆ ನಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದರು."
  },
  {
    name: "Keshav",
    language: "Tamil",
    text: "அவர்களின் சேவைகளில் மகிழ்ச்சி, பண்டிதர் மிகவும் உதவியாக இருந்தார் மற்றும் பிற பூஜை பொருட்களுக்கும் எங்களுக்கு வழிகாட்டினார்."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif text-gray-800 mb-6"
          >
            Matrugaya, Bindu Sarovar, Sidhpur
          </motion.h2>
        </div>

        <div className="flex flex-col items-center">
          {/* Static Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 8, rotateX: 8 }}
            className="mb-16 w-80 h-80 md:w-[450px] md:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform perspective-1000 transition-all duration-500 group"
          >
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ixZMDsvFDonJnkoOh3vBsPaysQq8rZpjxzwm2qezbOS21uG6UyoODWtsc7C6utzNjoMrsTai94mXGrIC6GAEjHac3bPcvnYNoELuZae9wJnv9qZSrZ1V1jILKf16xnjJudVlBwJpNl1f0IDfGK5iIw45TjTBkAmZPRvofXw6ByO8iwqEZjOcvMqbfx-4/s736/41818.jpg" 
              alt="Pooja Items"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Carousel */}
          <div className="relative w-full max-w-2xl px-4 md:px-12">
            <div className="w-full relative min-h-[220px] md:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-start gap-4 text-left"
                >
                  <div className="text-yellow-400 opacity-60 flex-shrink-0 mt-1">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                        {testimonials[currentIndex].language}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
