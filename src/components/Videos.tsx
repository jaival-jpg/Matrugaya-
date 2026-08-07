import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Videos() {
  const [playFirst, setPlayFirst] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (playFirst) return;

      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // If the top of the about section is above the bottom of the viewport
        if (rect.top <= window.innerHeight) {
          setPlayFirst(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, [playFirst]);

  const videos = [
    { id: "QZzVqedwINM", title: "Introduction Video 1" },
    { id: "e6gw6GW9hmg", title: "Introduction Video 2" }
  ];

  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic text-gray-900 mb-6 drop-shadow-sm"
          >
            Video Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Watch our introduction videos to learn more about the sacred rituals and our services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              className="rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] aspect-video w-full bg-white p-3 transform perspective-1000 transition-all duration-500 group"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0${index === 0 && playFirst ? '&autoplay=1' : ''}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
