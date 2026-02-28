import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CalendarCheck } from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    state: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const message = `*New Registration for Matrugaya Rituals*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Address:* ${formData.address}%0A*State:* ${formData.state}%0A*Email:* ${formData.email}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919825561708?text=${message}`, '_blank');
  };

  return (
    <section id="register" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-left max-w-2xl mb-12">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-yellow-600 font-semibold tracking-wider uppercase text-sm mb-4 block"
              >
                Book your Matrugaya Shraddh
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Book your Matrugaya Shraddh
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Fill out the form to register for Matrugaya, Tripindi Shraddh, Narayan Bali, Asthi Visarjan, or Pind Daan. We will contact you shortly to confirm your booking and provide guidance.
              </motion.p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CalendarCheck className="text-yellow-600 mr-3 h-6 w-6" />
                Why Register Online?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Secure your preferred dates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Get personal guidance over phone/video call
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Know the preparation and requirements in advance
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50 focus:bg-white"
                  placeholder="Enter your 10-digit mobile number"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50 focus:bg-white resize-none"
                  placeholder="Enter your full address"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50 focus:bg-white"
                    placeholder="Enter your state"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-8 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-yellow-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Book your Matrugaya Shraddh
              </motion.button>
              <p className="text-xs text-center text-gray-500 mt-4">
                By clicking "Book your Matrugaya Shraddh", your details will be sent securely via WhatsApp to Pandit Prashant Pandya. <br/>
                Or email us directly at <a href="mailto:phpandya123@gmail.com" className="text-yellow-600 hover:underline">phpandya123@gmail.com</a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
