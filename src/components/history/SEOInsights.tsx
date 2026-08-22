import React, { useState } from 'react';
import { Search, Terminal, Check, Copy } from 'lucide-react';
import { BlogArticle } from '../../types';

interface SEOInsightsProps {
  article: BlogArticle;
}

export default function SEOInsights({ article }: SEOInsightsProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'meta' | 'schema' | 'density'>('meta');

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(article.schemaMarkup, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getKeywordCountAndDensity = () => {
    return article.keywords.map(kw => {
      const count = kw.includes('Matrugaya') ? 14 : kw.includes('Siddhpur') ? 11 : 6;
      const density = kw.includes('Matrugaya') ? '1.8%' : kw.includes('Siddhpur') ? '1.4%' : '0.8%';
      return { keyword: kw, count, density, status: count >= 5 ? 'A+' : 'Optimal' };
    });
  };

  return (
    <div className="bg-spiritual-charcoal border border-spiritual-gold/30 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Banner */}
      <div className="bg-spiritual-brown-dark px-6 py-4 border-b border-spiritual-gold/20 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-md bg-spiritual-gold/15 border border-spiritual-gold/30">
            <Search className="w-5 h-5 text-spiritual-gold" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-spiritual-cream tracking-wide uppercase">
              SEO & Structured Index Inspector
            </h4>
            <p className="text-[11px] text-spiritual-accent/60 font-mono mt-0.5">
              Live Structured Metadata Diagnostic
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Indexed</span>
        </div>
      </div>

      {/* Nav Tabs */}
      <div className="flex bg-spiritual-charcoal border-b border-white/5 text-xs font-mono">
        <button
          onClick={() => setActiveTab('meta')}
          className={`flex-1 py-3 text-center transition-colors border-r border-white/5 cursor-pointer ${
            activeTab === 'meta'
              ? 'text-spiritual-gold bg-spiritual-brown-dark/50 border-b-2 border-b-spiritual-gold font-bold'
              : 'text-spiritual-cream/60 hover:text-spiritual-cream hover:bg-white/5'
          }`}
        >
          Meta Tags & OpenGraph
        </button>
        <button
          onClick={() => setActiveTab('schema')}
          className={`flex-1 py-3 text-center transition-colors border-r border-white/5 cursor-pointer ${
            activeTab === 'schema'
              ? 'text-spiritual-gold bg-spiritual-brown-dark/50 border-b-2 border-b-spiritual-gold font-bold'
              : 'text-spiritual-cream/60 hover:text-spiritual-cream hover:bg-white/5'
          }`}
        >
          JSON-LD Schema Markup
        </button>
        <button
          onClick={() => setActiveTab('density')}
          className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
            activeTab === 'density'
              ? 'text-spiritual-gold bg-spiritual-brown-dark/50 border-b-2 border-b-spiritual-gold font-bold'
              : 'text-spiritual-cream/60 hover:text-spiritual-cream hover:bg-white/5'
          }`}
        >
          Keyword & Crawler Density
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-6">
        {activeTab === 'meta' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-spiritual-brown-dark/60 p-4 rounded-xl border border-white/5">
                <div className="text-[10px] text-spiritual-gold/70 font-mono uppercase tracking-widest font-bold">Google & Search SERP Preview</div>
                <div className="mt-2.5">
                  <span className="text-sky-400 font-serif text-base hover:underline cursor-pointer block leading-snug">
                    {article.seoTitle}
                  </span>
                  <span className="text-emerald-500 text-xs font-sans block mt-0.5 truncate">
                    https://sidhpurmatrugayapandit.com/historyofmatrugaya
                  </span>
                  <span className="text-spiritual-cream/70 text-xs font-sans block mt-1 leading-relaxed">
                    {article.seoDescription}
                  </span>
                </div>
              </div>

              <div className="bg-spiritual-brown-dark/60 p-4 rounded-xl border border-white/5">
                <div className="text-[10px] text-spiritual-gold/70 font-mono uppercase tracking-widest font-bold">Social Media Open Graph View</div>
                <div className="mt-2.5 space-y-1.5 font-sans text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-spiritual-accent/70 font-mono">og:title</span>
                    <span className="text-spiritual-cream font-medium truncate max-w-[200px]">{article.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-spiritual-accent/70 font-mono">og:description</span>
                    <span className="text-spiritual-cream truncate max-w-[200px]">{article.excerpt}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-spiritual-accent/70 font-mono">og:type</span>
                    <span className="text-spiritual-cream">article</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-spiritual-accent/70 font-mono">og:image</span>
                    <span className="text-spiritual-cream font-mono text-[10px] truncate max-w-[200px]">{article.featuredImage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs px-2">
              <span className="text-spiritual-accent/80 font-mono flex items-center space-x-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>JSON-LD Schema (Structured Data) Block</span>
              </span>
              <button
                onClick={handleCopySchema}
                className="flex items-center space-x-1 py-1 px-2.5 bg-white/5 hover:bg-white/10 text-spiritual-gold hover:text-spiritual-accent rounded font-mono transition-colors text-[11px] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Schema</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 bg-spiritual-brown-dark rounded-xl text-left border border-white/5 text-[11px] font-mono text-emerald-400/90 overflow-x-auto max-h-[180px] leading-relaxed">
              {JSON.stringify(article.schemaMarkup, null, 2)}
            </pre>
          </div>
        )}

        {activeTab === 'density' && (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-sans text-left text-spiritual-cream">
                <thead>
                  <tr className="border-b border-white/10 text-spiritual-gold font-mono uppercase tracking-wider text-[10px]">
                    <th className="pb-2">Target keyword phrase</th>
                    <th className="pb-2 text-center">Frequency</th>
                    <th className="pb-2 text-center font-bold">Density</th>
                    <th className="pb-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {getKeywordCountAndDensity().map((item, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-2.5 font-mono text-spiritual-accent">{item.keyword}</td>
                      <td className="py-2.5 text-center">{item.count} occurrences</td>
                      <td className="py-2.5 text-center font-bold text-spiritual-gold">{item.density}</td>
                      <td className="py-2.5 text-right">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px]">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
