export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  percentageRate?: string;
  popular?: boolean;
  highlightOffer?: boolean;
  features: string[];
  ctaText: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  stats: {
    label: string;
    value: string;
    before?: string;
    after?: string;
  }[];
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  summary: string;
  platform: 'Airbnb' | 'VRBO' | 'Multi-Platform';
  duration: string;
  metricHighlight: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration?: string;
}

export interface DifferentiatorAsset {
  src: string;
  alt: string;
  label?: string;
}

export interface Differentiator {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights?: string[];
  assets?: DifferentiatorAsset[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Reviews' | 'Pricing' | 'Operations';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  tags: string[];
  highlights: string[];
}
