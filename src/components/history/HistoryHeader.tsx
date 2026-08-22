import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, Award, HelpCircle, PhoneCall, BookOpen, ArrowLeft, Home } from 'lucide-react';

interface HistoryHeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
  onGoHome: () => void;
}

export default function HistoryHeader({ activeSection, onNavigate, onOpenInquiry, onGoHome }: HistoryHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Overview', id: 'introduction', icon: BookOpen },
    { title: 'Ritual Process', id: 'how-performed', icon: Sprout },
    { title: 'Bindu Sarovar', id: 'bindu-sarovar', icon: Award },
    { title: 'FAQs', id: 'faq-section', icon: HelpCircle },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-navbar transition-all duration-300">
        {/* Reading Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-spiritual-gold to-spiritual-accent transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Back to Main Link */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onGoHome}
                className="flex items-center space-x-2 text-spiritual-cream/80 hover:text-spiritual-gold transition-colors text-xs font-semibold py-1.5 px-2.5 rounded-lg hover:bg-white/5 border border-spiritual-gold/20 mr-1"
                title="Return to Main Website"
              >
                <ArrowLeft className="w-4 h-4 text-spiritual-gold" />
                <span className="hidden sm:inline">Main Website</span>
              </button>

              <div 
                className="flex items-center space-x-3 cursor-pointer" 
                onClick={onGoHome}
              >
                <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-spiritual-gold/40 bg-spiritual-charcoal/80">
                  <span className="text-lg sm:text-xl font-display font-black text-spiritual-gold">ॐ</span>
                  <div className="absolute -inset-1 rounded-full border border-spiritual-accent/10 animate-ping opacity-30" />
                </div>
                <div>
                  <span className="block font-display text-xl sm:text-2xl font-bold tracking-wider text-spiritual-cream">
                    Matru<span className="text-spiritual-gold">gaya</span>
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] font-mono text-spiritual-accent/80">
                    History & Vidhi Guide
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-md text-xs lg:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-spiritual-gold bg-spiritual-charcoal/60 shadow-inner border border-spiritual-gold/30'
                        : 'text-spiritual-cream/80 hover:text-spiritual-gold hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 opacity-75 text-spiritual-gold" />
                    <span>{link.title}</span>
                  </button>
                );
              })}
            </nav>

            {/* Direct Action buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="tel:+919825561708"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider text-spiritual-brown-dark bg-spiritual-accent hover:bg-spiritual-gold border border-spiritual-gold/70 shadow-lg hover:shadow-spiritual-gold/20 transition-all duration-300 cursor-pointer"
                title="Direct call to Pandit Prashant Pandya"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call: 98255 61708</span>
              </a>
              <button 
                onClick={onOpenInquiry}
                className="px-3.5 py-2 rounded-md text-xs font-semibold uppercase tracking-wider text-spiritual-cream bg-spiritual-charcoal/60 hover:bg-spiritual-charcoal border border-spiritual-gold/40 transition-all duration-300 cursor-pointer"
              >
                Book Pooja
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href="tel:+919825561708"
                className="p-2 rounded-full bg-spiritual-accent text-spiritual-brown-dark border border-spiritual-gold"
                title="Call Pandit Prashant Pandya (98255 61708)"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-spiritual-cream hover:text-spiritual-gold focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-spiritual-brown-dark border-b border-spiritual-gold/30 px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
            <div className="py-2 border-b border-white/5 mb-3 flex items-center justify-between text-xs uppercase tracking-widest font-mono text-spiritual-accent">
              <span>Spiritual Sections</span>
              <button onClick={onGoHome} className="text-spiritual-gold flex items-center gap-1 font-sans">
                <Home className="w-3.5 h-3.5" /> Main Home
              </button>
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex w-full items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'text-spiritual-gold bg-spiritual-charcoal border border-spiritual-gold/30 shadow-md'
                      : 'text-spiritual-cream hover:bg-white/5 hover:text-spiritual-gold'
                  }`}
                >
                  <Icon className="w-5 h-5 text-spiritual-gold" />
                  <span>{link.title}</span>
                </button>
              );
            })}
            <div className="pt-4 border-t border-white/5 mt-4 space-y-2">
              <a
                href="tel:+919825561708"
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-spiritual-accent hover:bg-spiritual-gold text-spiritual-brown-dark font-bold rounded-lg shadow-lg uppercase tracking-wide text-sm border border-spiritual-gold"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Panditji: 98255 61708</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-spiritual-charcoal/80 text-spiritual-cream font-semibold rounded-lg text-xs uppercase tracking-wider border border-spiritual-gold/30"
              >
                <span>Open WhatsApp Booking Form</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onGoHome();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-white/5 text-spiritual-cream hover:text-spiritual-gold font-medium rounded-lg text-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Main Website</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
