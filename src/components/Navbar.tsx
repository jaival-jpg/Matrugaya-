import React from 'react';
import { Menu, X, Phone, BookOpen } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (path: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Home', href: '#home', isRoute: false },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'History of Matrugaya', href: '/history-of-matrugaya', isRoute: true },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'Gallery', href: '#gallery', isRoute: false },
    { name: 'Testimonials', href: '#testimonials', isRoute: false },
    { name: 'Videos', href: '#videos', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute: boolean) => {
    if (isRoute) {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(href);
      } else {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
      }
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xl border-b border-white/20 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-serif font-bold text-yellow-600 group-hover:scale-105 transition-transform duration-300">Matrugaya</span>
              <span className="ml-2 text-sm font-medium text-gray-600 hidden sm:block group-hover:text-yellow-600 transition-colors duration-300">Pandit Prashant Pandya</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                className={`relative text-gray-700 hover:text-yellow-600 px-2 py-2 rounded-md text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all hover:after:w-full ${
                  link.isRoute ? 'text-yellow-700 font-semibold' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              Register Now
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  link.isRoute 
                    ? 'text-yellow-700 bg-yellow-50/80 font-bold' 
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 mt-4 text-center rounded-md text-base font-medium bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
