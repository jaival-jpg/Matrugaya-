/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
