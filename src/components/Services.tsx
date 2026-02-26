import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Matrugaya",
      description: "A highly sacred ritual performed only at Sidhpur for the peace and salvation of mother's souls. According to Hindu beliefs, this ceremony brings eternal peace to the departed maternal soul.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhax3S3m43pon7A3CBbJYRDnRZM49nDaAD947WbjC3v72XyGOvlGQVsk_WH0SAO4U41amkz8PFd-mG2ZXsq0_nLRYJ2TWI4IwOrznV_4Kaa-lU03YW6chNhyphenhyphenEQrVKec_9_l5TIb_7BxXZDNAmgX5x6RHjeK7Sd4fUUy4TsuhZeR-8Id2QSY7OEfWzylSn_A/s520/26714.jpg"
    },
    {
      title: "Tripindi Shraddh",
      description: "A ritual to appease unsatisfied or forgotten ancestral spirits. It helps remove ancestral doshas (pitru dosh) and ensures peace in family life.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjDqTmni_nrBc1gyiGqLoHbSrI4iMxI68oG2ClwVKNEK6GA-mfIYLJeGo8n6AFnKtatveDoOj5W_y8RjCeW6h0TVJ-i9pM5Zbt4gnc7nFKz-fE8UTfkL9sUcUSx9__2Un4M5WYDIlVZTggfrF7XwBeBOr3CVKyoMTLLQGtlRxMFKUpeWYuQD9MXrCc2Lat/s506/26709.jpg"
    },
    {
      title: "Narayan Bali / Nag Bali",
      description: "Powerful rituals for those suffering from ancestral curses, untimely deaths in the family, or repeated obstacles in life. This ceremony helps cleanse karmic blockages and brings spiritual upliftment.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzymPegfgouQFJC5y8MdH47Ubl9ZWH_bEugBVKKACCC2q-VcLDOQ7u_IYLn_rZbad7TRG0CH5EBNl7xJcNa2Vt7tm5tAns0fhwMa4l99oGOZ2ow4KUqR62tw1RjNxXPZXUfHOu21ZOyyeUSaL8CEdwqFWvqvALs_jJYY8YUn67-f82otKYKCPlcAZxWJs6/s1280/26720.jpg"
    },
    {
      title: "Asthi Visarjan",
      description: "Ceremonial immersion of the ashes of the deceased in the sacred Saraswati River in Sidhpur as per Hindu religious rites.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFlQr4h66GwxwZsB-zTn-018on7dUq_dHApLhEtNQBMXGvI0MhAHGe7WXgKTsxwF_xJR89hRMoJlGcRzXmlTeEuLT1AIbSYViurdxih1Dz92nCp60mj-qQN8pxxOaL35G-C0CgbnYHG-TFkUplzj49eCUOR77IRXKjhqsDpz4Prm1vhJzqsIz5HIutwVWt/s735/26710.jpg"
    },
    {
      title: "Pind Daan",
      description: "A crucial offering made to the souls of ancestors for their liberation (moksha). It is considered an important duty (karma) of every descendant.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1BAsgyqGzXtFYU8JW1c_amZb9kh5l4hrnpYxeUGE2hhWEgFSjNOuw_qaXwFBQolmePYf0vayONJ-pixe1Q3K_fdJLGr429OdtYAcBguE5gqOwWfRb2srMLVxrD7aeDMmMwgNxK_e715Evogd6oEoOR82vnhP9sKg4QEKzWx9s9RGm17P3Pph3U8CFcm6l/s702/26718.jpg"
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
