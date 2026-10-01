import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight, X, Clock, Tag, CheckCircle2 } from 'lucide-react';

export default function ResourcesSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Platform Policy Updates', 'Seasonal Pricing Strategies', 'STR Best Practice Guides'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <section id="resources" className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            eyebrow="Blog & Resources"
            title="STR Best Practice Guides, Policy Updates & Pricing Strategies"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
            Stay ahead of platform algorithm updates, learn how to dispute retaliatory reviews, and discover how to optimize dynamic pricing for maximum RevPAR.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
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
              className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between text-left group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-zinc-200 text-emerald-800 font-semibold shadow-xs">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-serif-display font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-zinc-600 mt-2.5 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Highlights preview */}
                <div className="mt-4 pt-3 border-t border-zinc-200 space-y-1.5">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                    What You'll Learn:
                  </p>
                  {post.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-zinc-200 hover:border-emerald-300 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-zinc-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-emerald-800">
                <Tag className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">{selectedPost.category}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-500 font-mono">{selectedPost.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-zinc-900 leading-snug">
                {selectedPost.title}
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed italic border-l-2 border-emerald-600 pl-3">
                "{selectedPost.excerpt}"
              </p>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Key Strategic Takeaways
                </h4>
                {selectedPost.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-zinc-600 space-y-3 leading-relaxed pt-2">
                <p>
                  At MyHost, our operations team implements these exact protocols every single day on behalf of our host partners. Rather than relying on guesswork, our co-hosting playbook is codified to ensure maximum revenue, high search visibility, and dispute-proof review defenses.
                </p>
                <p>
                  Want our operations team to audit your listing and check for these exact vulnerabilities? Book a complimentary 15-minute listing audit with our lead STR strategist.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-200">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-500 hover:text-zinc-900"
                >
                  Close
                </button>
                <a
                  href="#contact-booking"
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  Book Free Audit Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
