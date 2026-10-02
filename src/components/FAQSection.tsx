import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      id: "faq-1",
      category: "General",
      question: "Do you work with multiple platforms?",
      answer: "Yes, absolutely. We support Airbnb, VRBO, Booking.com, and direct booking engines. We implement unified multi-calendar channel synchronization through premier software like Guesty and Hostaway to prevent double bookings while maximizing your exposure across all major OTA travel channels."
    },
    {
      id: "faq-2",
      category: "Reviews",
      question: "How does review removal work / what's your success rate?",
      answer: "Major STR platforms have strict content integrity policies prohibiting extortion, retaliatory reviews, reviews mentioning external events beyond host control (like power grid outages), or reviews containing hate speech. Our in-house compliance specialists review the conversation logs, extract timestamped evidence, and draft formal appeals directly to Trust & Safety. We maintain a 94% success rate on reviews that violate published OTA policies."
    },
    {
      id: "faq-3",
      category: "General",
      question: "Do I keep control of my listing?",
      answer: "100% yes. You remain the primary owner and legal account holder. We operate as authorized co-hosts via official platform co-hosting permissions. You maintain full access to your listing, bank account payouts, calendar, and historical data at all times. All revenue payouts continue depositing directly into your bank account."
    },
    {
      id: "faq-4",
      category: "Operations",
      question: "What happens after the free consultation?",
      answer: "Immediately following your 15-minute consultation, our team delivers your customized Listing Audit & Revenue Benchmark Report within 24 hours. There is no hard sell. If you decide to proceed, onboarding takes under 48 hours and your first 5 reservations are managed completely free under our Free-First-5 guarantee."
    },
    {
      id: "faq-5",
      category: "Pricing",
      question: "What are the exact terms of the Free-First-5 offer?",
      answer: "Under our Free-First-5 guarantee, we take over full 24/7 guest communications and listing monitoring for your next 5 confirmed reservations at zero co-hosting or management fee. You experience our sub-5m response velocity and 5-star communication standards firsthand. No credit card is charged upfront, and there is zero obligation to continue afterward."
    },
    {
      id: "faq-6",
      category: "Operations",
      question: "How do you coordinate with my local cleaners and maintenance team?",
      answer: "We integrate directly with your existing turnover vendors via automated SMS/WhatsApp alerts, Turno, or shared dispatch calendars. When a guest checks out, your cleaner is notified instantly. We collect post-cleaning photo verifications before the next guest arrives and dispatch emergency maintenance when issues arise."
    }
  ];

  const [openId, setOpenId] = useState<string>(faqs[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Reviews', 'Operations', 'Pricing'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
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
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know About Co-Hosting With MyHost"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            Straight answers to common questions about platform channels, review dispute removal, payouts, and our Free-First-5 stays guarantee.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-on-surface-variant absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
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
              No matching questions found for "{searchQuery}". Have a custom question? Contact our team directly below.
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
