import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Matrugaya",
      description: "A highly sacred ritual performed only at Sidhpur for the peace and salvation of mother's souls. According to Hindu beliefs, this ceremony brings eternal peace to the departed maternal soul.",
      image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Tripindi Shraddh",
      description: "A ritual to appease unsatisfied or forgotten ancestral spirits. It helps remove ancestral doshas (pitru dosh) and ensures peace in family life.",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Narayan Bali / Nag Bali",
      description: "Powerful rituals for those suffering from ancestral curses, untimely deaths in the family, or repeated obstacles in life. This ceremony helps cleanse karmic blockages and brings spiritual upliftment.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Asthi Visarjan",
      description: "Ceremonial immersion of the ashes of the deceased in the sacred Saraswati River in Sidhpur as per Hindu religious rites.",
      image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Pind Daan",
      description: "A crucial offering made to the souls of ancestors for their liberation (moksha). It is considered an important duty (karma) of every descendant.",
      image: "https://images.unsplash.com/photo-1621213076126-724806085a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-yellow-600 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Our Specialized Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Sacred Rituals & Ceremonies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We offer complete Vedic services for ancestral peace and spiritual liberation, performed by experienced and qualified Vedic Pandits.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#register" className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group/link">
                  Book Service 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-4">Online Registration & Support</h3>
            <p className="text-yellow-50 mb-8">
              We offer easy online booking for your rituals with guidance over phone/video call for preparation, requirements, and best dates to perform the ceremonies.
            </p>
            <a 
              href="#register" 
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-50 transition-colors shadow-lg"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
