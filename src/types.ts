export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: 'Matrugaya' | 'Narayan Bali' | 'Tripindi Shradh' | 'Siddhpur Rituals' | 'Spiritual Guidance';
  tags: string[];
  publishedDate: string;
  readTime: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
    description: string;
  };
  seoTitle: string;
  seoDescription: string;
  schemaMarkup: any;
  sections: { id: string; title: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
}

export interface InquiryFormData {
  name: string;
  phone: string;
  gotra?: string;
  preferredDate?: string;
  deceasedRelation?: string;
  notes?: string;
}
