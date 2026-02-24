import React from 'react';
import { motion } from 'motion/react';
import { Phone, CalendarCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Pandit doing Pooja"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/80 to-black/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-200 text-sm font-semibold tracking-wider uppercase"
          >
            Sidhpur Matrugaya Tirth
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            Pandit Prashant Pandya
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto font-light drop-shadow-md">
            Your trusted spiritual partner for conducting sacred Hindu rituals with devotion, authenticity, and spiritual precision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#register"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-yellow-900 bg-yellow-400 hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-500/20"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              Register Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919825561708"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192.39,105.46,238.4,94.45,280.9,74.5,321.39,56.44Z" className="fill-yellow-50"></path>
        </svg>
      </div>
    </section>
  );
}
