/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Videos />
        <Registration />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
