import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-500">Matrugaya</span>
              <span className="ml-2 text-sm font-medium text-gray-400">Pandit Prashant Pandya</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted spiritual partner for conducting sacred Hindu rituals with devotion, authenticity, and spiritual precision in Sidhpur, Gujarat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Matrugaya</a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Tripindi Shraddh</a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Narayan Bali / Nag Bali</a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Asthi Visarjan</a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">Pind Daan</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3" />
                <span className="text-base text-gray-400">Bindu Sarovar, Sidhpur, Patan, Gujarat</span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3" />
                <span className="text-base text-gray-400">+91-9825561708, +91-8200817133</span>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3" />
                <span className="text-base text-gray-400">phpandya123@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3" />
                <a href="http://www.sidhpurmatrugayapandit.com" className="text-base text-gray-400 hover:text-yellow-500 transition-colors">sidhpurmatrugayapandit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sidhpur Matrugaya Pandit Prashant Pandya. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://connecttapp.in/sidhpur-matrugaya-pandit-prashant-pandya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
              Digital Profile
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
