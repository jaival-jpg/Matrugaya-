import React from 'react';
import { motion } from 'motion/react';
import { Phone, CalendarCheck } from 'lucide-react';

export default function Hero() {
  const line1 = "Matrugaya Tirth Pandit";
  const line2 = "Prashant Pandya";

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -12, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-28 sm:pt-36 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Background Image with Minimal Overlay */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <img
          src="/images/hero_bg.jpg"
          alt="Bindu Sarovar Sidhpur Temple"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-110 contrast-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Soft, minimal overlay gradient for maximum image visibility while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col justify-between flex-1 w-full">
        <div className="space-y-6 pt-2 sm:pt-4 md:pt-6">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-7xl font-serif italic tracking-wide text-[#3e1a00] font-bold drop-shadow-[0_2px_10px_rgba(255,255,255,0.75)] leading-tight"
          >
            <span className="inline-block whitespace-nowrap">
              {line1.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="inline-block whitespace-nowrap">
              {line2.split('').map((char, index) => (
                <motion.span key={`line2-${index}`} variants={letterVariants} className="inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </div>
          
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mt-auto pt-12"
        >
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold font-serif drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'Georgia, serif' }}>
            Your trusted spiritual partner for conducting sacred Hindu rituals with devotion, authenticity, and spiritual precision.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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
