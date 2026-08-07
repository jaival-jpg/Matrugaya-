/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Videos from './components/Videos';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth overflow-x-hidden select-none">
      <Loader />
      <Navbar />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Videos />
        <Registration />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
