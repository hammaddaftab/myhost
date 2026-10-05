import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight, X, Clock, Tag, CheckCircle2 } from 'lucide-react';
import { strings } from '../strings';

export default function ResourcesSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const { resources: r } = strings;
  const categories = r.categories;
  const posts: BlogPost[] = r.posts.map(p => ({
    id: p.id,
    title: p.title ?? '',
    category: p.category,
    readTime: p.readTime,
    date: p.date,
    excerpt: p.excerpt ?? '',
    tags: [...p.tags],
    highlights: p.highlights ? [...p.highlights] : []
  }));

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <section id="resources" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            eyebrow={r.eyebrow}
            title={r.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {r.description}
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedPost(post)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPost(post);
                }
              }}
              className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/40 hover:border-outline hover:shadow-elevation-1 transition-all duration-200 flex flex-col justify-between text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-on-surface-variant mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface-variant font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-on-surface-variant" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-serif-display font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-on-surface-variant mt-2.5 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Highlights preview */}
                <div className="mt-4 pt-3 border-t border-outline-variant/40 space-y-1.5">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                    {r.whatYoullLearn}
                  </p>
                  {post.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-on-surface">
                      <CheckCircle2 className="w-3.5 h-3.5 text-on-surface-variant shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/40">
                <div
                  className="w-full py-2.5 rounded-xl bg-surface-container group-hover:bg-surface-container-high text-on-surface border border-outline-variant/40 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-on-surface-variant" />
                  <span>{r.readGuideButton}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-scrim/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-on-surface-variant hover:text-on-surface bg-surface-container hover:bg-surface-container-high transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <Tag className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">{selectedPost.category}</span>
                <span className="text-on-surface-variant/50">•</span>
                <span className="font-mono">{selectedPost.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface leading-snug">
                {selectedPost.title}
              </h2>

              <p className="text-sm text-on-surface-variant leading-relaxed italic border-l-2 border-outline pl-3">
                "{selectedPost.excerpt}"
              </p>

              <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">
                  {r.modalKeyTakeaways}
                </h4>
                {selectedPost.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-on-surface">
                    <CheckCircle2 className="w-4 h-4 text-on-surface-variant shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-outline-variant/40">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-on-surface-variant hover:text-on-surface"
                >
                  {r.modalClose}
                </button>
                <a
                  href="#contact-booking"
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-on-primary bg-primary hover:opacity-90 transition-colors"
                >
                  {strings.navbar.bookAudit}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
