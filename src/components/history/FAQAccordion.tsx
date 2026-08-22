import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-[#FFFDF9] border-2 border-spiritual-gold/80 rounded-2xl p-6 md:p-8 shadow-md">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-spiritual-charcoal flex items-center space-x-2">
            <HelpCircle className="w-6 h-6 text-spiritual-terracotta" />
            <span>Spiritual Inquiries & Answers</span>
          </h3>
          <p className="text-sm text-spiritual-charcoal/70 font-sans mt-0.5">
            Key Vedic details clarified for families performing Matrugaya rituals.
          </p>
        </div>

        {/* Search bar specifically for FAQs */}
        <div className="relative max-w-xs w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-4 h-4 text-spiritual-terracotta/60" />
          </span>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white/70 backdrop-blur-sm border border-spiritual-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-spiritual-gold focus:border-spiritual-gold placeholder-spiritual-charcoal/40 text-spiritual-charcoal font-medium"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-spiritual-gold shadow-md shadow-spiritual-gold/5'
                    : 'bg-white/50 hover:bg-white border-spiritual-terracotta/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-spiritual-charcoal hover:text-spiritual-terracotta transition-colors duration-200 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 p-1 rounded-full bg-spiritual-sand">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-spiritual-terracotta" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-spiritual-terracotta" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-spiritual-sand text-sm leading-relaxed text-spiritual-charcoal/80 font-sans space-y-2">
                        <p>{faq.answer}</p>
                        <div className="flex items-center space-x-1.5 pt-2 text-[11px] uppercase tracking-wider text-spiritual-gold font-mono font-semibold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI and Search Crawler Friendly Verified Answer</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 bg-white/40 rounded-xl border border-dashed border-spiritual-terracotta/20 p-6 text-spiritual-charcoal/60">
            No specific answers found matching "{searchQuery}". Try exploring general guidelines or contacting our Pandits directly.
          </div>
        )}
      </div>

      {/* JSON-LD Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        })}
      </script>
    </div>
  );
}
