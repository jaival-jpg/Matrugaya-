import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhFnEM7kYfZZycc-1RCJbkRd8L_qRFdcol-kw-ALDDV-pyvBhcDvK2kfrzX5me3EZVSFTAtJKxVvQP6y5ab3VRs1t50QnD53al04neZr_xcRn35o8CSu_T8NrtCa9__45xKrtmbhA4_ZWys7OlYgsOGGxfUTxaTdNDx0GMDYZQD0auPFBDP0396u5xu1b7/s1280/26732.jpg", alt: "Matrugaya Rituals" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitx-MQQKMjeNW8TK5oiw3v9nf0R4XKnARKv-lvnACrI5dOaQFGb7trnnRKmKPNDlicZ6A1EZOHoyMN7pCf7HJ0sYjw4GrByH-t9KmlQfEGi5hFFl1YChfEBZ2stk2o04ivk7zWH9B3JSiovSvbMGCDXFOCD_44PzvQCCUrXIUf8n5uXGTdIYVIvspt5yXI/s1083/26711.jpg", alt: "Sidhpur Ceremonies" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitx-MQQKMjeNW8TK5oiw3v9nf0R4XKnARKv-lvnACrI5dOaQFGb7trnnRKmKPNDlicZ6A1EZOHoyMN7pCf7HJ0sYjw4GrByH-t9KmlQfEGi5hFFl1YChfEBZ2stk2o04ivk7zWH9B3JSiovSvbMGCDXFOCD_44PzvQCCUrXIUf8n5uXGTdIYVIvspt5yXI/s1083/26711.jpg", alt: "Family Participation" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrjTREHtuoEVnK0WJO7nKz4hjJaWzZ3gNz336Huvcbu9oxpw8xFe6OlkxQNM827Pts_IWK0Dm3LJP91jmph_pyj6y2_F09hb6FQFhGeedjJnv0mIEyWN-DCyx59srn6SIRJ97wBCz1Bfkc7UrzazlDToi3kKGOxyoPkyUAP3vXkYr-nGlRCRed3foLdFUW/s1600/26702.jpg", alt: "River Rituals" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZGOVj8m27qi5zJfnKF4DNwMsVNVSg1KRiB8MMXVFUs0pRBIW0Bsik0ZWCIX4W6MEwky2pAA1LEktrarUp7ZLVy6_bAwZKtp0CD0a7bLW_UKAJwmHZQSaHjJYCjIklpzGnebTmVu3HsP7xXiK-JDDw7-Qgbr9pD6KEQTLlLrS2AvEDWjrY3OgLgJEhKlJC/s1600/26705.jpg", alt: "Temple Views" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKrGcSCfI00PXucjbE6WaZzCgXogneH4ZoFtk-3ma8u2H9PzRYAAI6fdz3MAPBN2k7Ebs3UWMMWxNmGeeiWFxVqulNIef0mjvjqM8MtOFTpFnihQagJNRR2NsaeOY4CSgF2UZNV762Vg0yncNKjohnRMk20Mec1Gq51umFRLJQjFOZTYpxPMrdm24ghHXd/s1600/26721.jpg", alt: "Puja Process" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkxwYdhGNzkXEcwXpm_eP1u5fDf1Erc4rQG33Rbc3jIRRnib5CNdYUsGijnrtYSy6Cb96eZLgN5PEz-75m9Y-Jqd0JHfmTZAfAvyYDOab79q2Bi0ZduJjQZiC6K6ZXC_vxVipxT205hgTRUz9rV5fsUal7fdWKe0K4XuCgna8Ay7NBir6PlZM4Z454QwWm/s1280/26716.jpg", alt: "Vedic Traditions" },
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
