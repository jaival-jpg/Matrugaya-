import React, { useState } from 'react';
import { X, Send, CalendarCheck, CheckCircle } from 'lucide-react';

interface InquiryModalProps {
  onClose: () => void;
}

export default function InquiryModal({ onClose }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out Name and Phone number to continue.');
      return;
    }

    // Build pre-filled WhatsApp message
    const message = `Pranam Panditji, My name is: ${formData.name}\nMobile: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nMessage/Query: ${formData.message || 'I want inquiry regarding Matrugaya Pooja dates and vidhi.'}`;

    // Log internally
    try {
      const savedInquiries = JSON.parse(localStorage.getItem('matrugaya_inquiries') || '[]');
      savedInquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('matrugaya_inquiries', JSON.stringify(savedInquiries));
    } catch {
      // ignore
    }

    setSubmitted(true);

    // Open WhatsApp after a short delay
    setTimeout(() => {
      const cleanPhone = "919825561708";
      const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-spiritual-brown-dark/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="bg-[#FFFDF9] border-2 border-spiritual-gold rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl z-10 text-spiritual-charcoal relative">
        {/* Banner */}
        <div className="bg-[#2A1D15] px-6 py-5 border-b border-spiritual-gold/20 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl text-spiritual-gold">ॐ</span>
            <div>
              <h4 className="font-sans font-bold text-lg text-spiritual-cream leading-tight">
                Matrugaya Ritual Consultation
              </h4>
              <p className="text-xs text-spiritual-accent/80 font-normal mt-0.5">
                Direct guidance from Pandit Prashant Pandya (Siddhpur)
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-spiritual-cream/70 hover:text-spiritual-cream transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h5 className="font-sans text-xl font-bold text-spiritual-charcoal">
                  Ritual Proposal Generated!
                </h5>
                <p className="text-sm text-spiritual-charcoal/80 max-w-sm mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Opening WhatsApp to coordinate details directly on Panditji's number: <strong>9825561708</strong>.
                </p>
              </div>
              <p className="text-xs text-spiritual-gold font-bold animate-pulse">
                Redirecting to WhatsApp chat...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-start space-x-2.5 bg-spiritual-sand/80 px-4 py-3 rounded-lg border border-spiritual-gold/20 text-sm text-spiritual-charcoal/90">
                <CalendarCheck className="w-5 h-5 text-spiritual-terracotta flex-shrink-0 mt-0.5" />
                <span>Fill in your details below. This will initiate a direct WhatsApp message to Pandit Prashant Pandya.</span>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-spiritual-terracotta">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-spiritual-terracotta/25 rounded-lg text-sm font-medium focus:ring-2 focus:ring-spiritual-gold outline-none"
                />
              </div>

              {/* Number */}
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-spiritual-terracotta">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter phone or Whatsapp number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-spiritual-terracotta/25 rounded-lg text-sm font-medium focus:ring-2 focus:ring-spiritual-gold outline-none"
                />
              </div>

              {/* Email (optional) */}
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-spiritual-terracotta">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-spiritual-terracotta/25 rounded-lg text-sm font-medium focus:ring-2 focus:ring-spiritual-gold outline-none"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-spiritual-terracotta">
                  Your Message / Query
                </label>
                <textarea
                  rows={3}
                  placeholder="Write details of ritual inquiry, family travel details, or preferred dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-spiritual-terracotta/25 rounded-lg text-sm font-medium focus:ring-2 focus:ring-spiritual-gold outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg border border-spiritual-terracotta/20 hover:bg-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-6 py-3 bg-spiritual-terracotta hover:bg-spiritual-terracotta-dark text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Connect via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
