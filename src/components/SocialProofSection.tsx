import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Star, 
  TrendingUp, 
  Quote, 
  CheckCircle2, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface SocialProofSectionProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function SocialProofSection({ onOpenBooking, onOpenFreeFiveModal }: SocialProofSectionProps) {
  const caseStudies = [
    {
      id: "case-1",
      tag: "Review Defense & Rating Recovery",
      title: "Removed a false 1-star review in 5 days",
      platform: "Airbnb",
      duration: "5 Days to Complete Removal",
      metricHighlight: "4.98★",
      metricLabel: "Superhost Status Restored",
      summary: "A guest attempted to extort a full refund after an unauthorized party was halted. When they retaliated with a false 1-star review, MyHost intervened directly with platform Trust & Safety to have it completely removed.",
      challenge: "Guest breached maximum occupancy rules with an unregistered event. Upon checkout, they retaliated with a fabricated 1-star cleanliness review threatening the host's Superhost status.",
      solution: "MyHost compiled timestamped exterior security camera logs, pre-check-in cleaning inspection photo proofs, and in-app message transcripts demonstrating an explicit refund demand.",
      result: "Airbnb confirmed violation of the Extortion & Retaliation Policy. The 1-star review was permanently expunged within 5 days, restoring the listing's 4.98-star rating."
    },
    {
      id: "case-2",
      tag: "Revenue & Listing Optimization",
      title: "Increased booking rate by 38% after listing optimization",
      platform: "Multi-Platform",
      duration: "45 Days Post-Launch",
      metricHighlight: "+38.4%",
      metricLabel: "Booking Rate & RevPAR Lift",
      summary: "A 2-bedroom mountain chalet in Colorado was underperforming due to static pricing and sub-optimal photography. MyHost implemented algorithmic pricing and overhauled the listing metadata.",
      challenge: "The listing suffered from a 42% weekday vacancy rate and relied on Airbnb's basic Smart Pricing, which undervalued peak ski weekend dates by up to $180/night.",
      solution: "We re-sequenced the photo gallery to highlight the hot tub and mountain views in the first 5 slots, rewrote copy targeting remote work travelers, and calibrated dynamic pricing with local event demand.",
      result: "Booking rate jumped by 38.4%, occupancy rose from 58% to 84%, and monthly booking revenue grew from $4,440 to $6,150."
    }
  ];

  const testimonials = [
    {
      id: "test-1",
      author: "Elena Rostova",
      role: "Property Owner & Investor",
      location: "Scottsdale, AZ • 3 Properties",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Handing over my guest comms to MyHost was the single highest-ROI decision I made this year. My response time dropped from 4 hours to 4 minutes, and our occupancy jumped from 62% to 88%. The Free-First-5 stays made trying them completely painless.",
      rating: 5,
      stats: [
        { label: "Occupancy Rate", before: "62%", after: "88%" },
        { label: "Guest Response", before: "4.2 hrs", after: "4 mins" },
        { label: "Average Rating", before: "4.74★", after: "4.98★" }
      ]
    },
    {
      id: "test-2",
      author: "Marcus Vance",
      role: "Full-Time Real Estate Operator",
      location: "Austin, TX • 6 Units",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      quote: "When an unruly guest threatened a 1-star review unless I refunded their entire $1,800 stay, MyHost took control. They documented the extortion and had the review removed in 5 days. Unbelievable peace of mind.",
      rating: 5,
      stats: [
        { label: "Extortion Saved", before: "$0", after: "$1,800" },
        { label: "Superhost Status", before: "At Risk", after: "Restored" },
        { label: "Annual Revenue", before: "Baseline", after: "+$22,400" }
      ]
    },
    {
      id: "test-3",
      author: "Sarah & David Chen",
      role: "Boutique STR Hosts",
      location: "Smoky Mountains, TN • 2 Cabins",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      quote: "We were skeptical about dynamic pricing until MyHost showed us our weekday gap analysis. They re-calibrated our rates for local concert weekends and seasonal leaf-peepers. Our RevPAR is up 31% year over year.",
      rating: 5,
      stats: [
        { label: "RevPAR Revenue", before: "$142", after: "$186 (+31%)" },
        { label: "Communication", before: "4.82★", after: "5.0★" },
        { label: "Weekly Host Time", before: "20 hrs", after: "2 hrs" }
      ]
    }
  ];

  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudies[0].id);
  const activeCase = caseStudies.find((c) => c.id === selectedCaseId) || caseStudies[0];

  return (
    <section id="case-studies" className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            eyebrow="Social Proof"
            title="Measurable Results for Real Short-Term Rental Hosts"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
            See how MyHost intervened during retaliatory 1-star reviews, turned around lagging occupancy, and protected Superhost ratings.
          </p>
        </div>

        {/* Case Studies Deep Dive Showcase */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {caseStudies.map((cs) => {
              const isSelected = cs.id === selectedCaseId;
              return (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCaseId(cs.id)}
                  className={`flex-1 text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-zinc-50 border-emerald-600 shadow-sm ring-1 ring-emerald-500/20'
                      : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                      {cs.tag}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900">
                      {cs.title}
                    </h4>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <span className="text-lg sm:text-xl font-serif-display font-extrabold text-zinc-900 block">
                      {cs.metricHighlight}
                    </span>
                    <span className="text-[10px] text-zinc-500">{cs.metricLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Case Study Detail Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-5 text-left">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800">
                      {activeCase.platform} Verified
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      Timeline: {activeCase.duration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-zinc-900">
                    {activeCase.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {activeCase.summary}
                  </p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs">
                    <span className="text-xs uppercase tracking-wider font-bold text-rose-600 block mb-1">
                      The Operational Challenge:
                    </span>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {activeCase.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs">
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-800 block mb-1">
                      The MyHost Intervention:
                    </span>
                    <p className="text-xs text-zinc-700 leading-relaxed">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Measurable Outcome */}
                <div className="p-4 rounded-xl bg-white border border-emerald-300 shadow-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-800 block">
                      The Measurable Outcome:
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-800 mt-1">
                      {activeCase.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat Highlight Card */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-zinc-200 text-center space-y-4 shadow-xs">
                <div className="p-3 rounded-full w-14 h-14 mx-auto bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-serif-display font-extrabold text-zinc-900 block">
                    {activeCase.metricHighlight}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-600 mt-1 block">
                    {activeCase.metricLabel}
                  </span>
                </div>
                <div className="text-xs text-zinc-500 border-t border-zinc-100 pt-3">
                  Documented case study with platform ticket ID and verified host performance metrics.
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Get Similar Results For Your Listing</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Host Testimonials with Before / After occupancy & rating stats */}
        <div>
          <div className="text-left mb-6">
            <h3 className="text-lg font-serif-display font-bold text-zinc-900 flex items-center gap-2">
              <Quote className="w-5 h-5 text-emerald-600" />
              <span>Host Testimonials & Hard Performance Metrics</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
              Before and after metrics from active property owners utilizing MyHost co-hosting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all text-left shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  {/* Before / After Stats Table */}
                  <div className="bg-white rounded-xl p-3 border border-zinc-200 mb-4 space-y-2 shadow-xs">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">
                      Before vs After MyHost:
                    </p>
                    {t.stats.map((st, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center text-xs">
                        <span className="text-zinc-500">{st.label}:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-400 line-through text-[11px]">{st.before}</span>
                          <span className="text-emerald-700 font-bold font-mono">{st.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-zinc-200">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-emerald-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-zinc-900">{t.author}</p>
                      <p className="text-[11px] text-zinc-500">{t.role}</p>
                      <p className="text-[10px] text-emerald-700 font-medium">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenFreeFiveModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Join These Hosts: Claim Your Free-First-5 Stays Pass</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
