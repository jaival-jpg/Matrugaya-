import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: "https://storage.googleapis.com/aistudio-janus-prod-app-data/user_data/images/b440e28d-195c-4217-a169-d9129528646b.jpg", alt: "Rituals at Sidhpur" },
    { src: "https://storage.googleapis.com/aistudio-janus-prod-app-data/user_data/images/0010901e-282c-47a3-87f5-862803b904c6.jpg", alt: "Ceremonies" },
    { src: "https://storage.googleapis.com/aistudio-janus-prod-app-data/user_data/images/841029c9-9477-4404-b903-82054a3628bb.jpg", alt: "Family Participation" },
    { src: "https://storage.googleapis.com/aistudio-janus-prod-app-data/user_data/images/318318b7-601d-4f18-a68f-a9572620a2e7.jpg", alt: "River Rituals" },
    { src: "https://storage.googleapis.com/aistudio-janus-prod-app-data/user_data/images/223b2b93-b68f-449e-b83c-f48123288c83.jpg", alt: "Temple Views" },
    { src: "https://storage.googleapis.com/aistudio-janus-prod-app-data/user_data/images/63556093-f14d-495c-89a1-8b066614457e.jpg", alt: "Puja Process" },
  ];

  return (
    <section id="gallery" className="py-24 bg-yellow-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Glimpses of sacred rituals, ceremonies, family participation, river rituals, temple views, and the puja process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg tracking-wide">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
