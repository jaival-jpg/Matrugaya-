import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-yellow-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
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
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-yellow-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
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
              <a href="tel:+919825561708" className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center transition-all shadow-md shadow-yellow-500/20 group">
                <Phone className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Call Now</span>
              </a>
              <a href="https://wa.me/919825561708" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center transition-all shadow-md shadow-green-500/20 group">
                <MessageCircle className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.887968434526!2d72.32768057533508!3d23.916843978556557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf39200000001%3A0x6b00000000000000!2sBindu%20Sarovar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bindu Sarovar Location"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
