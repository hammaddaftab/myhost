import { PricingPlan, Testimonial, CaseStudy, ProcessStep, Differentiator, FAQItem, BlogPost } from '../types';
import { strings } from '../strings';

export const PROCESS_STEPS: ProcessStep[] = strings.process.steps.map(s => ({
  step: s.step,
  title: s.title,
  subtitle: s.subtitle,
  description: s.description,
  deliverables: [...s.deliverables],
  duration: (s as { duration?: string }).duration
}));

export const DIFFERENTIATORS: Differentiator[] = strings.differentiators.items.map(d => ({
  title: d.title,
  subtitle: d.subtitle,
  description: d.description,
  iconName: d.iconName,
  highlights: d.highlights ? [...d.highlights] : undefined,
  assets: (d as { assets?: { src: string; alt: string; label?: string }[] }).assets
    ? [...(d as { assets?: { src: string; alt: string; label?: string }[] }).assets!]
    : undefined
}));

export const PRICING_PLANS: PricingPlan[] = strings.pricing.plans.map(p => ({
  id: p.id,
  name: p.name,
  tagline: p.tagline,
  priceMonthly: p.priceMonthly ?? 0,
  priceAnnual: p.priceAnnual ?? 0,
  percentageRate: p.percentageRate ?? undefined,
  description: p.description,
  features: [...p.features],
  ctaText: p.ctaText,
  popular: p.popular
}));

export const FREE_FIRST_FIVE_TERMS = {
  headline: strings.pricing.freeTrialBanner.headline,
  subheadline: strings.pricing.freeTrialBanner.subheadline,
  badge: strings.pricing.freeTrialBanner.badge,
  terms: [...strings.pricing.freeTrialBanner.terms]
};

export const CASE_STUDIES: CaseStudy[] = strings.socialProof.caseStudies.map(cs => ({
  id: cs.id,
  tag: cs.tag,
  title: cs.title,
  platform: cs.platform as 'Airbnb' | 'VRBO' | 'Multi-Platform',
  duration: cs.duration,
  metricHighlight: cs.metricHighlight ?? '',
  metricLabel: cs.metricLabel,
  summary: cs.summary,
  challenge: cs.challenge,
  solution: cs.solution,
  result: cs.result
}));

export const TESTIMONIALS: Testimonial[] = strings.socialProof.testimonials.map(t => ({
  id: t.id,
  author: t.author ?? '',
  role: t.role,
  location: t.location,
  avatar: t.avatar,
  quote: t.quote ?? '',
  rating: t.rating,
  stats: t.stats.map(s => ({
    label: s.label,
    value: s.value ?? '',
    before: s.before ?? undefined,
    after: s.after ?? undefined
  }))
}));

export const FAQS: FAQItem[] = strings.faq.items.map(f => ({
  id: f.id,
  category: f.category as 'General' | 'Reviews' | 'Pricing' | 'Operations',
  question: f.question,
  answer: f.answer ?? ''
}));

export const BLOG_POSTS: BlogPost[] = strings.resources.posts.map(b => ({
  id: b.id,
  title: b.title ?? '',
  category: b.category,
  readTime: b.readTime,
  date: b.date,
  excerpt: b.excerpt ?? '',
  tags: [...b.tags],
  highlights: b.highlights ? [...b.highlights] : []
}));

export const TRUST_BADGES = (strings.aboutTrust.partnerLogoList ?? []).map(tb => ({
  name: tb.name,
  label: tb.label,
  metric: tb.metric
}));
