import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      {/* Decorative background blur blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic text-gray-900 mb-6 drop-shadow-sm"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Get in touch with Sidhpur Matrugaya Pandit Prashant Pandya for any inquiries, bookings, or spiritual guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 mt-1">Bindu Sarovar, Sidhpur, Patan, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Phone Numbers</p>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+919825561708" className="hover:text-yellow-600 transition-colors">+91-9825561708</a><br/>
                      <a href="tel:+918200817133" className="hover:text-yellow-600 transition-colors">+91-8200817133</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:phpandya123@gmail.com" className="hover:text-yellow-600 transition-colors">phpandya123@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Websites</p>
                    <p className="text-gray-600 mt-1">
                      <a href="http://www.sidhpurmatrugayapandit.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition-colors block">sidhpurmatrugayapandit.com</a>
                      <a href="http://www.sidhpurmatrugayatirthkshetrapandit.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition-colors block">sidhpurmatrugayatirthkshetrapandit.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+919825561708" className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-1 active:scale-95 group">
                <Phone className="h-8 w-8 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Call Now</span>
              </a>
              <a href="https://wa.me/919825561708" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 active:scale-95 group">
                <MessageCircle className="h-8 w-8 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 hover:shadow-yellow-500/10 transition-shadow duration-500 relative group"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Matrugaya+Pujan+Sidhpur+Pandit+Prashant+Pandya+Bindu+Sarovar&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sidhpur Matrugaya Pandit Prashant Pandya Location"
              className="w-full h-full min-h-[400px]"
            ></iframe>
            <a 
              href="https://maps.app.goo.gl/Qf6C4gguh4TYhzwFA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white/95 hover:bg-yellow-500 hover:text-white text-gray-900 font-medium px-4 py-2.5 rounded-xl shadow-lg border border-yellow-200 text-sm flex items-center gap-2 transition-all duration-300 backdrop-blur-md"
            >
              <MapPin className="w-4 h-4 text-yellow-600 group-hover:text-white" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
