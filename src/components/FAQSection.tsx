import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { strings } from '../strings';

export default function FAQSection() {
  const { faq: f } = strings;
  const faqs = f.items;

  const [openId, setOpenId] = useState<string>(faqs[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = f.categories;

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const answerText = faq.answer ?? '';
    const matchesQuery = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      answerText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionHeader
            eyebrow={f.eyebrow}
            title={f.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {f.description}
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-on-surface-variant absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={f.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
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

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-colors duration-200 text-left overflow-hidden bg-surface-container-low ${
                    isOpen
                      ? 'border-outline'
                      : 'border-outline-variant/40 hover:border-outline'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-on-surface">
                      {faq.question}
                    </span>
                    <div className={`p-1 rounded-lg transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-primary-container text-on-primary-container' : 'bg-surface-container text-on-surface-variant'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/40 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-surface-container-low rounded-2xl border border-outline-variant/40 text-on-surface-variant text-sm">
              {f.emptyState}
            </div>
          )}
        </div>

        {/* Support Help Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-surface-container text-on-surface-variant shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">Have a specific question about your property?</p>
              <p className="text-[11px] text-on-surface-variant">Our STR co-hosting strategists are available 7 days a week.</p>
            </div>
          </div>
          <a
            href="#contact-booking"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-on-primary hover:opacity-90 transition-all shrink-0"
          >
            Ask a Specialist
          </a>
        </div>

      </div>
    </section>
  );
}
