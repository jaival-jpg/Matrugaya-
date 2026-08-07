import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload key background images while loading screen is active
    const imagesToPreload = [
      '/images/hero_bg.jpg',
      '/images/pandit_prashant_pandya.jpg'
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Keep loader active for 2.2 seconds to allow background images to render smoothly
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/85 backdrop-blur-md pointer-events-auto select-none"
        >
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl border border-white/80">
            <img
              src="/images/brown_loader-1.gif"
              alt="Loading..."
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
