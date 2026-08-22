import React, { useState } from 'react';
import { PenTool, CheckCircle, FilePlus, Sparkles } from 'lucide-react';
import { BlogArticle } from '../../types';

interface ArticleEditorProps {
  onPublish: (newArticle: BlogArticle) => void;
}

export default function ArticleEditor({ onPublish }: ArticleEditorProps) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<'Matrugaya' | 'Narayan Bali' | 'Tripindi Shradh' | 'Siddhpur Rituals' | 'Spiritual Guidance'>('Matrugaya');
  const [tags, setTags] = useState('Matrugaya, Siddhpur, Vedic Rituals');
  const [authorName, setAuthorName] = useState('Pandit Prashant Pandya');
  const [content, setContent] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill out the Title and Content to publish the article.');
      return;
    }

    const tagArray = tags.split(',').map(t => t.trim()).filter(Boolean);
    const slugValue = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const newArticle: BlogArticle = {
      id: `custom-article-${Date.now()}`,
      slug: slugValue || 'new-spiritual-guidance',
      title,
      subtitle: subtitle || 'New ancestral ritual insights',
      excerpt: content.slice(0, 140) + '...',
      content: `<p>${content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>')}</p>`,
      category,
      tags: tagArray.length > 0 ? tagArray : ['Siddhpur', 'Vedic rituals'],
      publishedDate: 'Just Now',
      readTime: `${Math.max(2, Math.ceil(content.split(/\s+/).length / 200))} Min Read`,
      featuredImage: '/images/siddhpur_ritual_hero.jpg',
      author: {
        name: authorName,
        avatar: '/images/pandit_prashant_pandya.jpg',
        description: 'Vedic scholar guiding spiritual seekers in Siddhpur.'
      },
      seoTitle: seoTitle || `${title} | Siddhpur Spiritual Guide`,
      seoDescription: seoDescription || `${title}. Understand traditional procedures, best times, and Vedic guidance in Siddhpur.`,
      keywords: tagArray,
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "author": { "@type": "Person", "name": authorName }
      },
      sections: [
        { id: 'custom-intro', title: 'Introduction' },
        { id: 'custom-body', title: 'Ritual Philosophy' }
      ],
      faqs: []
    };

    onPublish(newArticle);
    setSuccessMessage(true);

    // Reset inputs
    setTitle('');
    setSubtitle('');
    setContent('');
    setSeoTitle('');
    setSeoDescription('');

    setTimeout(() => {
      setSuccessMessage(false);
    }, 4000);
  };

  return (
    <div className="bg-[#FAF2E8] border border-spiritual-terracotta/20 rounded-2xl p-6 md:p-8 shadow-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-spiritual-terracotta/10 rounded-lg text-spiritual-terracotta">
          <PenTool className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-spiritual-charcoal">
            Spiritual Publishing Panel
          </h3>
          <p className="text-sm text-spiritual-charcoal/70">
            Easily author new articles on Siddhpur rituals to immediately expand the blog catalog in real time.
          </p>
        </div>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 rounded-xl flex items-center space-x-3 text-sm animate-bounce">
          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>
            <strong>Success!</strong> Your article has been dynamically published to the active blog feed below.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Post Title */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest font-mono font-bold text-spiritual-charcoal/80">
              Article Main Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Complete Guide for Tripindi Shradh in Siddhpur"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-spiritual-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-spiritual-gold focus:border-spiritual-gold text-sm text-spiritual-charcoal"
            />
          </div>

          {/* Subtitle / Excerpt */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest font-mono font-bold text-spiritual-charcoal/80">
              Spiritual Subtitle
            </label>
            <input
              type="text"
              placeholder="e.g. Fulfill family debts and overcome persistent Pitru Dosha"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-spiritual-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-spiritual-gold focus:border-spiritual-gold text-sm text-spiritual-charcoal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest font-mono font-bold text-spiritual-charcoal/80">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full px-4 py-2.5 bg-white border border-spiritual-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-spiritual-gold focus:border-spiritual-gold text-sm text-spiritual-charcoal font-medium"
            >
              <option value="Matrugaya">Matrugaya</option>
              <option value="Narayan Bali">Narayan Bali</option>
              <option value="Tripindi Shradh">Tripindi Shradh</option>
              <option value="Siddhpur Rituals">Siddhpur Rituals</option>
              <option value="Spiritual Guidance">Spiritual Guidance</option>
            </select>
          </div>

          {/* Author */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest font-mono font-bold text-spiritual-charcoal/80">
              Vedic Author Name
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Pandit Name"
              className="w-full px-4 py-2.5 bg-white border border-spiritual-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-spiritual-gold focus:border-spiritual-gold text-sm text-spiritual-charcoal"
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest font-mono font-bold text-spiritual-charcoal/80">
              Keywords / Tags
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-spiritual-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-spiritual-gold focus:border-spiritual-gold text-sm text-spiritual-charcoal"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-widest font-mono font-bold text-spiritual-charcoal/80">
            Spiritual Content / Body Text *
          </label>
          <textarea
            required
            rows={5}
            placeholder="Write details on the ritual procedures, cosmic meanings, materials needed, and experiences in Siddhpur..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-spiritual-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-spiritual-gold focus:border-spiritual-gold text-sm text-spiritual-charcoal leading-relaxed"
          />
        </div>

        {/* SEO configuration */}
        <div className="bg-white/40 p-5 rounded-xl border border-spiritual-terracotta/10 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-spiritual-terracotta tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Search Engine Meta Tuning (Optional)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="block font-mono text-spiritual-charcoal/70">Meta SEO Title Override</label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder="e.g. Best Narayan Bali Puja in Siddhpur: Priest Guidance"
                className="w-full px-3.5 py-2 bg-white border border-spiritual-terracotta/20 rounded-md focus:outline-none text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block font-mono text-spiritual-charcoal/70">Meta SEO Description Override</label>
              <input
                type="text"
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder="e.g. Read full details on Narayan Bali in Siddhpur..."
                className="w-full px-3.5 py-2 bg-white border border-spiritual-terracotta/20 rounded-md focus:outline-none text-xs"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-3.5 bg-spiritual-terracotta hover:bg-spiritual-terracotta-dark text-white font-bold rounded-xl shadow-lg uppercase tracking-wider text-xs transition-all cursor-pointer border border-spiritual-gold/20"
          >
            <FilePlus className="w-4 h-4 text-spiritual-accent" />
            <span>Publish Article to live board</span>
          </button>
        </div>
      </form>
    </div>
  );
}
