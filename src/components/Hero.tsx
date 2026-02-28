import React from 'react';
import { motion } from 'motion/react';
import { Phone, CalendarCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-yellow-900 to-black overflow-hidden">
        {/* Blurred background for mobile to fill empty space */}
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUOaKHmsMCWemXDcWZIdWcQxtnhQSXkhdZuQfafkAxHe2__1n392YuG_FC7gLKgnYVlWTUHOeUgdQ9XLa6c6YCdma7M7P-WeGkaXp3VoImri0plmThCAHbEWp1aAVQ-SroQSecFTqeuKh_1ZpxUKr238fT2kBdMmeuw29nRcWB508OFp41PPzJFJS74-eE/s1600/41817.jpg"
          alt="Background Blur"
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 md:hidden scale-110"
          referrerPolicy="no-referrer"
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUOaKHmsMCWemXDcWZIdWcQxtnhQSXkhdZuQfafkAxHe2__1n392YuG_FC7gLKgnYVlWTUHOeUgdQ9XLa6c6YCdma7M7P-WeGkaXp3VoImri0plmThCAHbEWp1aAVQ-SroQSecFTqeuKh_1ZpxUKr238fT2kBdMmeuw29nRcWB508OFp41PPzJFJS74-eE/s1600/41817.jpg"
          alt="Pandit doing Pooja"
          className="relative w-full h-full object-contain md:object-cover drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] brightness-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/40 via-transparent to-transparent mix-blend-multiply"></div>
        {/* Bottom shadow gradient for stylish blend */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col justify-between flex-1 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 -mt-8 md:-mt-12"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif italic tracking-wide text-yellow-400 drop-shadow-2xl leading-tight">
            Matrugaya Tirth Pandit <br />
            Prashant Pandya
          </h1>
        </motion.div>
          
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-auto pt-12"
        >
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
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
