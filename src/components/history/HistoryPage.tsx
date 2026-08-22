import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, Compass, Heart, ChevronRight, Phone, MessageSquare, 
  MapPin, ExternalLink, Globe, Volume2, VolumeX, Share2, Bookmark, ArrowLeft
} from 'lucide-react';
import { BLOG_ARTICLES } from '../../data/blogArticles';
import { BlogArticle } from '../../types';
import HistoryHeader from './HistoryHeader';
import FAQAccordion from './FAQAccordion';
import ArticleEditor from './ArticleEditor';
import RitualStepGuide from './RitualStepGuide';
import InquiryModal from './InquiryModal';
import WhatsAppIcon from './WhatsAppIcon';
import SEOInsights from './SEOInsights';

interface HistoryPageProps {
  onNavigateHome: () => void;
}

export default function HistoryPage({ onNavigateHome }: HistoryPageProps) {
  const [articles, setArticles] = useState<BlogArticle[]>(BLOG_ARTICLES);
  const [activeArticle, setActiveArticle] = useState<BlogArticle>(BLOG_ARTICLES[0]);
  const [currentSection, setCurrentSection] = useState('introduction');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [savedBookmark, setSavedBookmark] = useState(false);
  const [activeTab, setActiveTab] = useState<'read' | 'editor' | 'seo'>('read');

  const speechUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  // Set page titles and meta-description dynamically for /historyofmatrugaya
  useEffect(() => {
    const originalTitle = document.title;
    document.title = activeArticle.seoTitle || "History of Matrugaya Siddhpur | Rituals & Heritage | Pandit Prashant Pandya";

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc && activeArticle.seoDescription) {
      metaDesc.setAttribute('content', activeArticle.seoDescription);
    }

    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, [activeArticle]);

  // Monitor scroll positioning to update current highlights in Table of Contents
  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    });

    activeArticle.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeArticle]);

  // Scroll to element smoothly
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setCurrentSection(id);
    }
  };

  // Add new article
  const handleAddNewArticle = (newArticle: BlogArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
    setActiveArticle(newArticle);
    setActiveTab('read');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Senior citizens audio narration helper
  const handleToggleSpeech = () => {
    if (isReadingAloud) {
      window.speechSynthesis?.cancel();
      setIsReadingAloud(false);
    } else {
      const textBlock = document.getElementById('blog-main-body')?.innerText || '';
      if (!textBlock) return;
      
      const utterance = new SpeechSynthesisUtterance(
        `Reading article: ${activeArticle.title}. By ${activeArticle.author.name}. ${textBlock.slice(0, 1500)}...`
      );
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
      utterance.onend = () => setIsReadingAloud(false);
      utterance.onerror = () => setIsReadingAloud(false);
      speechUtterance.current = utterance;
      setIsReadingAloud(true);
      window.speechSynthesis?.speak(utterance);
    }
  };

  // Clean-up voice synthesis
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  // Copy current URL to clipboard
  const handleShareCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-spiritual-cream font-sans selection:bg-spiritual-gold selection:text-spiritual-charcoal overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 sacred-dots pointer-events-none z-0" />

      {/* Persistent Sticky Header */}
      <HistoryHeader 
        activeSection={currentSection}
        onNavigate={scrollToId}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onGoHome={onNavigateHome}
      />

      {/* Live Alert for saved bookmark */}
      {savedBookmark && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-spiritual-brown-dark border border-spiritual-gold/40 text-spiritual-gold rounded-full text-xs font-mono font-medium shadow-2xl flex items-center space-x-2 animate-bounce">
          <Check className="w-4 h-4 text-emerald-500" />
          <span>Article marked and saved under browser bookmarks</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Navigation Breadcrumb & Toolbar */}
        <div className="flex flex-wrap items-center justify-between border-b border-spiritual-terracotta/10 pb-4 mb-8 gap-4">
          <div className="flex items-center space-x-2 text-xs font-medium text-spiritual-charcoal/70">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-spiritual-terracotta flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Main Website</span>
            </button>
            <span>/</span>
            <span className="text-spiritual-terracotta font-semibold">History of Matrugaya</span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Read Aloud Button */}
            <button
              onClick={handleToggleSpeech}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                isReadingAloud 
                  ? 'bg-spiritual-terracotta text-white border-spiritual-terracotta animate-pulse'
                  : 'bg-white/80 hover:bg-white text-spiritual-charcoal border-spiritual-terracotta/20 shadow-sm'
              }`}
              title="Listen to article audio narration"
            >
              {isReadingAloud ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-spiritual-gold" />}
              <span>{isReadingAloud ? 'Stop Audio' : 'Listen Article'}</span>
            </button>

            {/* Quick Share */}
            <button
              onClick={handleShareCopy}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/80 hover:bg-white text-spiritual-charcoal border border-spiritual-terracotta/20 shadow-sm transition-all cursor-pointer"
              title="Share article link"
            >
              <Share2 className="w-3.5 h-3.5 text-spiritual-gold" />
              <span>{shareCopied ? 'Link Copied!' : 'Share'}</span>
            </button>

            {/* Bookmark */}
            <button
              onClick={() => {
                setSavedBookmark(true);
                setTimeout(() => setSavedBookmark(false), 2500);
              }}
              className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-spiritual-charcoal border border-spiritual-terracotta/20 shadow-sm transition-all cursor-pointer"
              title="Bookmark article"
            >
              <Bookmark className="w-4 h-4 text-spiritual-gold" />
            </button>
          </div>
        </div>

        {activeTab === 'editor' ? (
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <button 
                onClick={() => setActiveTab('read')} 
                className="text-xs font-bold text-spiritual-terracotta hover:underline flex items-center gap-1"
              >
                ← Back to Article
              </button>
            </div>
            <ArticleEditor onPublish={handleAddNewArticle} />
          </div>
        ) : activeTab === 'seo' ? (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="mb-4">
              <button 
                onClick={() => setActiveTab('read')} 
                className="text-xs font-bold text-spiritual-terracotta hover:underline flex items-center gap-1"
              >
                ← Back to Article
              </button>
            </div>
            <SEOInsights article={activeArticle} />
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Image Frame & H1 Title */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative group rounded-2xl overflow-hidden p-[3px] bg-gradient-to-r from-spiritual-gold via-spiritual-terracotta to-spiritual-brown-dark shadow-xl hover:shadow-spiritual-gold/20 transition-all duration-500">
                <div className="rounded-2xl overflow-hidden aspect-video bg-[#FFF8EE]">
                  <img 
                    src={activeArticle.featuredImage} 
                    alt={activeArticle.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E120A]/40 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="text-center mt-3 text-[11px] text-spiritual-charcoal/60 font-mono italic">
                Siddhpur Holy Bindu Sarovar Ancestral Puja (Historical Pilgrimage Site)
              </div>

              {/* H1 Heading */}
              <h1 className="font-serif italic font-extrabold text-[#2A1D15] text-3xl md:text-5xl lg:text-5xl mt-8 leading-tight tracking-tight">
                {activeArticle.title}
              </h1>
              
              {activeArticle.subtitle && (
                <p className="mt-4 text-base md:text-lg text-spiritual-terracotta font-medium max-w-2xl mx-auto">
                  {activeArticle.subtitle}
                </p>
              )}
            </div>

            {/* Dual Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Body Content */}
              <div className="lg:col-span-8 space-y-8">
                <article 
                  id="blog-main-body"
                  className="prose max-w-none text-spiritual-charcoal leading-relaxed font-sans text-lg md:text-xl font-medium space-y-8"
                >
                  {/* Introduction Section */}
                  <div id="introduction" className="scroll-mt-24 space-y-4">
                    <p className="first-letter:text-5xl first-letter:font-sans first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-spiritual-terracotta">
                      Matrugaya is one of the most sacred Hindu rituals performed for the peace and spiritual liberation of the mother's soul after death. This ritual holds deep emotional and religious importance in Hindu culture and is mainly performed in Siddhpur, Gujarat, a holy town known for ancestral rituals and spiritual traditions.
                    </p>
                    <p>
                      Every year, thousands of families visit Siddhpur to perform Matrugaya Vidhi with proper Vedic rituals under the guidance of experienced priests. The town is especially famous because it is believed to be one of the holiest places for rituals dedicated to mothers.
                    </p>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* What is Matrugaya */}
                  <div id="what-is-matrugaya" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      What is Matrugaya?
                    </h2>
                    <p>
                      The word <strong>Matrugaya</strong> comes from Sanskrit roots representing family ties and spiritual dues:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm md:text-base font-sans leading-relaxed my-4 text-spiritual-charcoal/90">
                      <li><strong>Matru</strong> means mother, representing the physical source of life and nourishment.</li>
                      <li><strong>Gaya</strong> refers to ancestral rituals, Shradh ceremonies, and prayers aimed at providing salvation (Moksha) for the spirit.</li>
                    </ul>
                    <p>
                      Matrugaya is a sacred ritual performed to honor the memory of a deceased mother and pray for peace, blessings, and salvation for her soul. In Hindu traditions, parents are considered equal to God, and performing rituals for them is regarded as a sacred responsibility.
                    </p>
                    <p>
                      Unlike general Shradh ceremonies which are aimed at ancestors in general (Pitrus), <strong>Matrugaya specifically focuses on rituals dedicated exclusively to the departed mother and maternal lineage.</strong>
                    </p>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Why Siddhpur Famous */}
                  <div id="why-siddhpur-famous" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      Why is Siddhpur Famous for Matrugaya?
                    </h2>
                    <p>
                      Siddhpur, located in northern Gujarat (Patan district), is one of the most spiritually important places connected with maternal rituals in the entire Indian subcontinent. The town is situated near the holy Saraswati River and is home to the sacred <strong>Bindu Sarovar</strong>.
                    </p>
                    <p>
                      According to Hindu beliefs and scriptures, <strong>Lord Parashurama</strong> (the sixth incarnation of Lord Vishnu) performed ancestral rituals for his mother Renuka specifically here in Siddhpur to clear maternal debt. Since then, the place became universally recognized and revered as the prime destination for Matrugaya ceremonies.
                    </p>
                    <p>
                      Bindu Sarovar is considered one of the rare holy places dedicated strictly to maternal ancestral rituals, making it unique compared to Gaya in Bihar which is prominent for paternal rituals. Because of this spiritual importance, devotees from Gujarat, Rajasthan, Maharashtra, Madhya Pradesh, and across the world visit Siddhpur throughout the year.
                    </p>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Spiritual Importance */}
                  <div id="spiritual-importance" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      Spiritual Importance of Matrugaya
                    </h2>
                    <p>
                      In Hindu culture, mothers are considered the foundation of life, family, and values. Matrugaya is not only a ritual but also an emotional expression of gratitude, respect, and remembrance toward the soul that gave life.
                    </p>
                    <p>
                      Performing Matrugaya according to traditional Shastras:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-sans leading-relaxed my-4 text-spiritual-charcoal/90">
                      <li>Brings eternal <strong>peace, satisfaction, and liberation (Moksha)</strong> to the departed mother's soul.</li>
                      <li>Helps relieve ancestral obstacles or blockages (Matru Dosha / Pitru Dosha) in the family tree.</li>
                      <li>Secures ancestral blessings for children and future generations, fostering health and prosperity.</li>
                      <li>Provides deep emotional closure and fulfillment to family members.</li>
                      <li>Maintains spiritual harmony and positive energy in the home.</li>
                    </ul>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Interleaved Ritual Steps Timeline */}
                  <div id="how-performed" className="scroll-mt-24 py-4">
                    <RitualStepGuide />
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Best Time to Perform */}
                  <div id="best-time" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      Best Time to Perform Matrugaya
                    </h2>
                    <p>
                      Matrugaya can generally be performed throughout the year, but many families prefer sacred timelines to elevate the spiritual effect:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-sans leading-relaxed my-4 text-spiritual-charcoal/90">
                      <li><strong>Pitru Paksha:</strong> The dedicated 16-day ancestral lunar phase.</li>
                      <li><strong>Amavasya:</strong> No-moon Hindu nights which carry high cosmic significance for tarpan.</li>
                      <li><strong>Mother's Death Anniversary (Tithi):</strong> Special family remembrance days.</li>
                      <li><strong>Auspicious Hindu months:</strong> Kartik, Chaitra, and Shravan months or during eclipses.</li>
                    </ul>
                    <p>
                      It is always recommended to consult Pandit Prashant Pandya beforehand to determine the most auspicious date and timing based on Gotra and Tithi.
                    </p>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Bindu Sarovar */}
                  <div id="bindu-sarovar" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      What is Bindu Sarovar?
                    </h2>
                    <p>
                      <strong>Bindu Sarovar</strong> is one of the five most sacred lakes (Pancha Sarovar) in Hindu mythology and plays the central role in Matrugaya rituals. According to ancient texts (Shrimad Bhagavata Purana), the sacred lake was formed from the compassion teardrops of Lord Vishnu when he was moved by Sage Kardama's devotion.
                    </p>
                    <p>
                      Lord Kapil Muni, an incarnation of Lord Vishnu, preached the Sankhya philosophy of spiritual wisdom to his mother Devahuti on the banks of Bindu Sarovar, granting her ultimate liberation. Devotees perform prayers, Tarpan, and Pind Daan on the holy steps of Bindu Sarovar to this day.
                    </p>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Proper Guidance from Pandit */}
                  <div id="proper-guidance" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      Importance of Proper Guidance
                    </h2>
                    <p>
                      Since Matrugaya is a deeply sacred ritual, families require proper guidance from experienced and authorized priests in Siddhpur. An authentic Pandit guides the Sanskrit mantras, Gotra sankalp, sacred pind daan, and traditional offerings with precision.
                    </p>
                    
                    <div className="bg-amber-50 rounded-2xl p-6 border border-spiritual-gold/40 shadow-sm my-4 font-sans space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl text-spiritual-terracotta">ॐ</span>
                        <h4 className="font-bold text-spiritual-terracotta text-base">
                          Authorized Siddhpur Priest: Pandit Prashant Pandya
                        </h4>
                      </div>
                      <p className="text-sm text-spiritual-charcoal/90 leading-relaxed">
                        In Siddhpur, <strong>Pandit Prashant Pandya</strong> conducts and performs all Matrugaya pooja rituals, including <em>Sankalp, Bindu Sarovar Tarpan, Pind Daan, Brahmin Bhojan, and Narayan Bali Vidhi</em>. With authentic Vedic knowledge and compassionate care, he helps devotees complete their mother's salvation vidhi smoothly.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <a 
                          href="tel:+919825561708"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-spiritual-terracotta hover:bg-spiritual-brown-dark text-white rounded-lg text-xs font-bold transition-transform hover:scale-105 shadow"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call: 98255 61708</span>
                        </a>
                        <a 
                          href="https://wa.me/919825561708?text=Pranam%20Pandit%20Prashant%20Pandya%20ji,%20I%20want%20information%20and%20auspicious%20dates%20for%20Matrugaya%20Pooja%20in%20Siddhpur."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-xs font-bold transition-transform hover:scale-105 shadow"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-white" />
                          <span>WhatsApp: 98255 61708</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Documents & Requirements */}
                  <div id="documents-required" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      Documents & Information Required
                    </h2>
                    <p>
                      For proper coordination, families should keep the following information handy:
                    </p>
                    <ul className="list-disc pl-6 space-y-1.5 text-sm md:text-base font-sans leading-relaxed my-4 text-spiritual-charcoal/90">
                      <li>Name of the departed mother / grandmother.</li>
                      <li>Family Gotra details.</li>
                      <li>Number of family members attending.</li>
                      <li>Traditional pooja samagri (arranged directly upon arrival with Panditji).</li>
                    </ul>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Modern Awareness */}
                  <div id="modern-awareness" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      Popular Inquiries About Matrugaya
                    </h2>
                    <p>
                      Key topics devotees look for when planning their journey to Siddhpur:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4 text-sm font-sans">
                      {[
                        'Best Matrugaya Pandit in Siddhpur (Pandit Prashant Pandya)',
                        'Matrugaya authentic Vedic procedure step-by-step',
                        'Siddhpur ritual travel and lodging guidelines',
                        'Bindu Sarovar history and auspicious timings',
                        'Tripindi Shradh and Narayan Bali rituals'
                      ].map((term, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-white/70 px-3 py-2 rounded-lg border border-spiritual-terracotta/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-spiritual-gold animate-pulse" />
                          <span>{term}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sacred-divider">
                    <span className="sacred-divider-glyph">ॐ</span>
                  </div>

                  {/* Travel & Accommodation */}
                  <div id="travel-accommodation" className="scroll-mt-24 space-y-4">
                    <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A1D15] tracking-tight border-b-2 border-spiritual-gold/80 pb-3 mt-6">
                      Travel & Accommodation in Siddhpur
                    </h2>
                    <p>
                      Siddhpur is well-connected by railway (Siddhpur Station - SID) and Gujarat State Transport (GSRTC) highways:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 font-sans">
                      <div className="bg-white/90 p-4 rounded-xl border border-spiritual-terracotta/10 text-center">
                        <span className="font-bold text-spiritual-terracotta text-sm uppercase">Hotels</span>
                        <p className="text-xs text-spiritual-charcoal/80 mt-1">Hotel MariGold<br />Hotel Siddharth</p>
                      </div>
                      <div className="bg-white/90 p-4 rounded-xl border border-spiritual-terracotta/10 text-center">
                        <span className="font-bold text-spiritual-terracotta text-sm uppercase">Dharamshalas</span>
                        <p className="text-xs text-spiritual-charcoal/80 mt-1">Swaminarayan Mandir Dharamshala</p>
                      </div>
                      <div className="bg-white/90 p-4 rounded-xl border border-spiritual-terracotta/10 text-center">
                        <span className="font-bold text-spiritual-terracotta text-sm uppercase">Transport</span>
                        <p className="text-xs text-spiritual-charcoal/80 mt-1">Local auto rickshaws & taxi service</p>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="sacred-divider">
                  <span className="sacred-divider-glyph">ॐ</span>
                </div>

                {/* FAQ Section */}
                <div id="faq-section" className="scroll-mt-24">
                  <FAQAccordion faqs={activeArticle.faqs} />
                </div>

                {/* Social Share Toolbar */}
                <div className="p-5 bg-[#FAF2E8] border border-spiritual-terracotta/15 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
                  <div>
                    <h5 className="font-display font-bold text-sm text-spiritual-charcoal">
                      Share this sacred historical guide
                    </h5>
                    <p className="text-xs text-spiritual-charcoal/70">
                      Help other families discover authentic Matrugaya guidance.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const text = `Read "${activeArticle.title}" - Complete Guide on Matrugaya Siddhpur: `;
                        window.open(`https://wa.me/?text=${encodeURIComponent(text + window.location.href)}`, '_blank');
                      }}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-transform hover:scale-105 cursor-pointer"
                    >
                      WhatsApp Share
                    </button>
                    <button
                      onClick={handleShareCopy}
                      className="px-4 py-2 bg-white hover:bg-spiritual-sand text-spiritual-charcoal border border-spiritual-terracotta/20 rounded-lg text-xs font-bold transition-all cursor-pointer"
                    >
                      {shareCopied ? 'Copied Link!' : 'Copy Link'}
                    </button>
                  </div>
                </div>

                {/* Devotees Feedback & Gratitude */}
                <div className="bg-white/80 p-6 rounded-2xl border border-spiritual-gold/20 font-sans">
                  <h4 className="font-display text-lg font-bold text-spiritual-charcoal mb-4 flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                    <span>Devotees Gratitude Feed</span>
                  </h4>
                  <div className="space-y-4 text-xs md:text-sm text-spiritual-charcoal/80">
                    <div className="bg-spiritual-sand/40 p-3 rounded-lg border border-spiritual-terracotta/5">
                      <p className="italic">"We came from Indore for my mother's rituals. Performing the Tarpan at Bindu Sarovar was deeply emotional and peaceful. Thanks to Pandit Prashant Pandya ji for guiding our queries so simply."</p>
                      <span className="block text-[11px] font-mono font-bold mt-2 text-spiritual-terracotta">- Jaival Pandya, Indore</span>
                    </div>
                    <div className="bg-spiritual-sand/40 p-3 rounded-lg border border-spiritual-terracotta/5">
                      <p className="italic">"The procedures were explained verse by verse with pure Shastrik accuracy. Very satisfied with the Brahmin bhojan arrangement. Highly recommended Siddhpur Pandit."</p>
                      <span className="block text-[11px] font-mono font-bold mt-2 text-spiritual-terracotta">- Shardul Deshmukh, Mumbai</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Sidebar & Explorer */}
              <div className="lg:col-span-4 space-y-6">
                {/* 1. Interactive Table of Contents */}
                <div className="bg-white border border-spiritual-terracotta/15 rounded-2xl p-6 shadow-md sticky top-28 hidden lg:block">
                  <h4 className="font-display font-semibold text-base text-spiritual-charcoal border-b border-spiritual-gold/20 pb-2 mb-4">
                    Table of Contents
                  </h4>
                  <nav className="space-y-2">
                    {activeArticle.sections.map((sec) => {
                      const isSelected = currentSection === sec.id;
                      return (
                        <button
                          key={sec.id}
                          onClick={() => scrollToId(sec.id)}
                          className={`flex items-start w-full text-left text-xs transition-all duration-200 cursor-pointer ${
                            isSelected 
                              ? 'text-spiritual-terracotta font-bold translate-x-1.5' 
                              : 'text-spiritual-charcoal/70 hover:text-spiritual-terracotta'
                          }`}
                        >
                          <ChevronRight className={`w-3.5 h-3.5 mr-1.5 flex-shrink-0 mt-0.5 ${
                            isSelected ? 'text-spiritual-gold' : 'text-spiritual-charcoal/20'
                          }`} />
                          <span>{sec.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* 2. Panditji Action Card */}
                <div className="bg-[#1E120A] border-2 border-spiritual-gold rounded-2xl p-6 shadow-xl text-white relative overflow-hidden space-y-4">
                  <div className="absolute top-0 right-0 p-4 text-7xl text-spiritual-gold/5 font-display select-none">
                    ॐ
                  </div>
                  <span className="text-[10px] font-mono font-bold text-spiritual-accent uppercase tracking-widest block">
                    Main Siddhpur Vedic Priest
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-bold text-spiritual-cream">
                      Pandit Prashant Pandya
                    </h4>
                    <p className="text-xs text-spiritual-accent font-medium mt-0.5">
                      Performs All Matrugaya Poojas & Shradh Vidhi in Siddhpur
                    </p>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    Conducting complete Shastrik rituals including <strong>Matrugaya Tarpan, Pind Daan, Sankalp, Brahmin Bhojan, and Narayan Bali</strong> at Bindu Sarovar, Siddhpur.
                  </p>
                  <div className="space-y-2 py-1 text-[11px] font-mono text-spiritual-accent/90">
                    <div className="flex items-center space-x-2">
                      <span className="text-spiritual-gold">✦</span>
                      <span>Direct Contact & WhatsApp: <strong>98255 61708</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-spiritual-gold">✦</span>
                      <span>Siddhpur Bindu Sarovar Tirtha Kshetra</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-spiritual-gold">✦</span>
                      <span>Auspicious Dates & Gotra Calculation</span>
                    </div>
                  </div>

                  {/* Direct Contact Buttons */}
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    <a 
                      href="tel:+919825561708"
                      className="w-full py-3 bg-spiritual-accent hover:bg-spiritual-gold text-spiritual-brown-dark font-bold text-xs uppercase tracking-wider rounded-lg transition-transform hover:scale-102 flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now: 98255 61708</span>
                    </a>
                    
                    <a 
                      href="https://wa.me/919825561708?text=Pranam%20Pandit%20Prashant%20Pandya%20ji,%20I%20would%20like%20to%20inquire%20about%20Matrugaya%20Pooja%20Vidhi%20in%20Siddhpur."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-transform hover:scale-102 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>WhatsApp: 98255 61708</span>
                    </a>

                    <button 
                      onClick={() => setIsInquiryOpen(true)}
                      className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-lg border border-spiritual-gold/30 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Fill Online Booking Form</span>
                    </button>
                  </div>
                </div>

                {/* 3. Related Articles list */}
                <div className="bg-white border border-spiritual-terracotta/15 rounded-2xl p-6 shadow-md">
                  <h4 className="font-display font-semibold text-sm text-spiritual-charcoal uppercase tracking-widest border-b border-spiritual-gold/20 pb-2 mb-4">
                    Explore Rituals
                  </h4>
                  <div className="space-y-4 text-spiritual-charcoal">
                    {articles.map((art) => {
                      const isCurrent = art.id === activeArticle.id;
                      return (
                        <div 
                          key={art.id}
                          onClick={() => {
                            setActiveArticle(art);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer flex gap-3 ${
                            isCurrent 
                              ? 'bg-[#FAF2E8] border-spiritual-gold shadow-sm' 
                              : 'bg-white border-spiritual-terracotta/5 hover:border-spiritual-gold/40'
                          }`}
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-spiritual-sand flex-shrink-0 border border-spiritual-terracotta/10">
                            <img 
                              src={art.featuredImage} 
                              alt={art.title} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] uppercase font-mono font-bold text-spiritual-terracotta">
                              {art.category}
                            </span>
                            <h5 className="font-display text-xs font-bold leading-tight truncate mt-0.5 hover:text-spiritual-terracotta transition-colors">
                              {art.title}
                            </h5>
                            <span className="text-[9px] font-mono text-spiritual-charcoal/50 block mt-1">
                              {art.readTime}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Official Websites & Verified Profiles */}
                <div className="bg-white border border-spiritual-terracotta/20 rounded-2xl p-6 shadow-md space-y-4">
                  <div className="flex items-center space-x-2 border-b border-spiritual-gold/20 pb-3">
                    <Globe className="w-4 h-4 text-spiritual-terracotta" />
                    <h4 className="font-display font-bold text-sm text-spiritual-charcoal uppercase tracking-wider">
                      Official Websites & Portals
                    </h4>
                  </div>
                  <p className="text-xs text-spiritual-charcoal/75 leading-relaxed">
                    Explore official resources, booking channels, and verified profiles:
                  </p>
                  <div className="space-y-3 font-sans">
                    <a 
                      href="https://www.sidhpurmatrugayapandit.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-3 rounded-xl bg-spiritual-cream/70 hover:bg-amber-50 border border-spiritual-terracotta/15 hover:border-spiritual-gold transition-all group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-spiritual-terracotta group-hover:text-spiritual-brown-dark flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-spiritual-gold" />
                          Sidhpur Matrugaya Pandit
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-spiritual-charcoal/40 group-hover:text-spiritual-terracotta transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono text-spiritual-terracotta/80 block mt-1 underline truncate">
                        www.sidhpurmatrugayapandit.com
                      </span>
                    </a>

                    <a 
                      href="https://matrugaya.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-3 rounded-xl bg-spiritual-cream/70 hover:bg-amber-50 border border-spiritual-terracotta/15 hover:border-spiritual-gold transition-all group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-spiritual-terracotta group-hover:text-spiritual-brown-dark flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-spiritual-gold" />
                          Matrugaya Vercel Portal
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-spiritual-charcoal/40 group-hover:text-spiritual-terracotta transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono text-spiritual-terracotta/80 block mt-1 underline truncate">
                        matrugaya.vercel.app
                      </span>
                    </a>

                    <a 
                      href="https://www.google.com/search?client=ms-android-xiaomi-terr1-rso1&hs=OBpV&sca_esv=326223ae55b11ae7&cs=1&output=search&kgmid=%2Fg%2F11vrvfmyps&q=Matrugaya%20Tirth%20Pandit%20Prashant%20Pandya&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F2&kgs=1159ed09dc3107d4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-3 rounded-xl bg-spiritual-cream/70 hover:bg-amber-50 border border-spiritual-terracotta/15 hover:border-spiritual-gold transition-all group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-spiritual-terracotta group-hover:text-spiritual-brown-dark flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-spiritual-gold" />
                          Google Profile & Location
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-spiritual-charcoal/40 group-hover:text-spiritual-terracotta transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono text-spiritual-terracotta/80 block mt-1 underline truncate">
                        Pandit Prashant Pandya Location
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Decorative Footer */}
      <footer className="bg-spiritual-brown-dark border-t-2 border-spiritual-gold/30 mt-16 pt-12 pb-36 md:pb-24 text-white/80 font-sans relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-3">
            <h5 className="font-display text-lg font-bold text-spiritual-gold tracking-wide">
              History of Matrugaya
            </h5>
            <p className="text-xs text-white/65 leading-relaxed">
              Serving the global Hindu community with authentic Shastrik awareness, travel guides, and holy Bindu Sarovar Matrugaya rituals.
            </p>
            <div className="pt-2 text-xs text-spiritual-accent font-medium">
              <span>Main Priest: <strong>Pandit Prashant Pandya</strong></span>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-spiritual-gold">
              Contact & Booking
            </h5>
            <div className="text-xs text-white/75 leading-relaxed space-y-1">
              <span className="block font-semibold text-white">Pandit Prashant Pandya</span>
              <span className="block">Siddhpur Bindu Sarovar Tirth, Gujarat</span>
              <a href="tel:+919825561708" className="block text-spiritual-accent hover:text-spiritual-gold font-bold">
                Phone: +91 98255 61708
              </a>
              <a href="https://wa.me/919825561708" target="_blank" rel="noopener noreferrer" className="block text-emerald-400 hover:text-emerald-300 font-bold">
                WhatsApp: +91 98255 61708
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-spiritual-gold">
              Navigation
            </h5>
            <ul className="text-xs space-y-2 text-white/70 font-sans">
              <li>
                <button onClick={onNavigateHome} className="hover:text-spiritual-gold transition-colors">
                  Main Website Home
                </button>
              </li>
              <li>
                <a href="#how-performed" onClick={(e) => { e.preventDefault(); scrollToId('how-performed'); }} className="hover:text-spiritual-gold transition-colors">
                  Vedic Step Guide
                </a>
              </li>
              <li>
                <a href="#faq-section" onClick={(e) => { e.preventDefault(); scrollToId('faq-section'); }} className="hover:text-spiritual-gold transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="https://www.sidhpurmatrugayapandit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors">
                  Official Website
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-spiritual-gold">
              Maternal Ancestral Sites
            </h5>
            <p className="text-xs text-white/65 leading-relaxed">
              Bindu Sarovar, Siddhpur, Gujarat<br />
              Saraswati River Ghats<br />
              Kapil Muni Hermitage<br />
              Alp Sarovar Footprints
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/45">
          <span>© {new Date().getFullYear()} Matrugaya Information Portal. Guided by Pandit Prashant Pandya (+91 98255 61708). All Rights Reserved.</span>
          <div className="flex space-x-4 mt-4 md:mt-0 font-mono text-[10px]">
            <button onClick={onNavigateHome} className="hover:text-spiritual-gold">Main Website</button>
            <span>•</span>
            <a href="#introduction" onClick={(e) => { e.preventDefault(); scrollToId('introduction'); }} className="hover:text-spiritual-gold">Overview</a>
            <span>•</span>
            <a href="#faq-section" onClick={(e) => { e.preventDefault(); scrollToId('faq-section'); }} className="hover:text-spiritual-gold">FAQs</a>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1E120A]/95 backdrop-blur-md border-t-2 border-spiritual-gold/50 px-4 sm:px-6 py-3 shadow-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-spiritual-accent rounded-xl text-spiritual-brown-dark flex items-center justify-center font-bold text-base border border-spiritual-gold shadow-md">
            ॐ
          </div>
          <div className="leading-tight">
            <span className="text-sm font-extrabold text-spiritual-cream block tracking-tight">
              Pandit Prashant Pandya
            </span>
            <a 
              href="tel:+919825561708" 
              className="text-xs font-mono font-bold text-spiritual-accent hover:text-spiritual-gold flex items-center gap-1 mt-0.5"
            >
              <span>+91 98255 61708</span>
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="tel:+919825561708"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-spiritual-accent hover:bg-spiritual-gold text-spiritual-brown-dark border border-spiritual-gold flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            title="Call Pandit Prashant Pandya (98255 61708)"
            aria-label="Call Pandit Prashant Pandya"
          >
            <Phone className="w-5 h-5 text-spiritual-brown-dark stroke-[2.5]" />
          </a>
          <a
            href="https://wa.me/919825561708?text=Pranam%20Pandit%20Prashant%20Pandya%20ji,%20I%20want%20to%20inquire%20about%20Matrugaya%20Pooja%20in%20Siddhpur."
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            title="Chat on WhatsApp with Pandit Prashant Pandya"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Floating active components */}
      {isInquiryOpen && <InquiryModal onClose={() => setIsInquiryOpen(false)} />}
    </div>
  );
}
