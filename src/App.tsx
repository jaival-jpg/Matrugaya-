/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import HistoryPage from './components/history/HistoryPage';
import HistoryOfMatrugayaHtmlPage from './components/history/HistoryOfMatrugayaHtmlPage';

function normalizePath(pathname: string): string {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    // Global interceptor for standard internal link clicks to /about, /history-of-matrugaya, or /
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      if (
        href === '/about' ||
        href === '/historyofmatrugaya' ||
        href === '/history-of-matrugaya' ||
        href === '/history-of-matrugaya.html' ||
        href === '/' ||
        href === '/#home'
      ) {
        e.preventDefault();
        const targetPath = href.startsWith('/#') ? '/' : href;
        if (targetPath !== currentPath) {
          window.history.pushState({}, '', href);
          setCurrentPath(normalizePath(targetPath));
          if (href.includes('#')) {
            const hash = href.split('#')[1];
            setTimeout(() => {
              const el = document.getElementById(hash);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        } else if (href.includes('#')) {
          const hash = href.split('#')[1];
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (
        href.startsWith('#') &&
        (currentPath === '/about' ||
          currentPath === '/historyofmatrugaya' ||
          currentPath === '/history-of-matrugaya' ||
          currentPath === '/history-of-matrugaya.html')
      ) {
        // If on inner page and user clicks a hash link like #services or #contact
        e.preventDefault();
        window.history.pushState({}, '', '/' + href);
        setCurrentPath('/');
        setTimeout(() => {
          const hash = href.replace('#', '');
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [currentPath]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(normalizePath(path));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isHistoryOfMatrugayaRoute =
    currentPath === '/history-of-matrugaya' ||
    currentPath === '/history-of-matrugaya.html';

  if (isHistoryOfMatrugayaRoute) {
    return (
      <HistoryOfMatrugayaHtmlPage
        onNavigateHome={() => navigateTo('/')}
        onNavigateAbout={() => navigateTo('/about')}
      />
    );
  }

  const isAboutRoute = currentPath === '/about' || currentPath === '/historyofmatrugaya';

  if (isAboutRoute) {
    return (
      <HistoryPage 
        onNavigateHome={() => navigateTo('/')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth overflow-x-hidden select-none">
      <Loader />
      <Navbar onNavigate={navigateTo} />
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
