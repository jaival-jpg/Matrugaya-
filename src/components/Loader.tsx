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

    // Keep loader active for 2 seconds to ensure smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/70 backdrop-blur-lg pointer-events-auto select-none"
        >
          {/* Centered soft white card */}
          <div className="flex flex-col items-center justify-center p-8 sm:p-10 rounded-[2.2rem] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-white/80">
            {/* Pure code CSS/SVG Brown Circle Spinner */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="brown-spinner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3e1a00" stopOpacity="1" />
                    <stop offset="60%" stopColor="#6B2D00" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#9a4300" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {/* Background Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#3e1a00"
                  strokeOpacity="0.1"
                  strokeWidth="9"
                />
                {/* Animated Brown Arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="url(#brown-spinner-grad)"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray="170 100"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
