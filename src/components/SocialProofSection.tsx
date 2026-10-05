import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Star, 
  TrendingUp, 
  Quote, 
  CheckCircle2, 
  Calendar
} from 'lucide-react';
import { strings } from '../strings';

interface SocialProofSectionProps {
  onOpenBooking: (mode?: 'calendar' | 'form') => void;
  onOpenFreeFiveModal: () => void;
}

export default function SocialProofSection({ onOpenBooking, onOpenFreeFiveModal }: SocialProofSectionProps) {
  const { socialProof: sp } = strings;
  const caseStudies = sp.caseStudies;
  const testimonials = sp.testimonials;

  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudies[0].id);
  const activeCase = caseStudies.find((c) => c.id === selectedCaseId) || caseStudies[0];

  return (
    <section id="case-studies" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            eyebrow={sp.eyebrow}
            title={sp.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {sp.description}
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
                  className={`flex-1 text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-surface-container-low border border-outline'
                      : 'bg-surface-container-lowest border border-outline-variant/40 hover:border-outline hover:shadow-elevation-1'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant block">
                      {cs.tag}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-on-surface">
                      {cs.title}
                    </h4>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <span className="text-lg sm:text-xl font-serif-display font-extrabold text-on-surface block">
                      {cs.metricHighlight}
                    </span>
                    <span className="text-[10px] text-on-surface-variant">{cs.metricLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Case Study Detail Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40">
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-8 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-primary-container text-on-primary-container">
                        {activeCase.platform} Verified
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">
                        Timeline: {activeCase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                      {activeCase.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {activeCase.summary}
                    </p>
                  </div>

                  {/* Challenge & Solution: De-boxed editorial columns */}
                  <div className="grid sm:grid-cols-2 gap-6 pt-1">
                    <div className="pl-4 border-l-2 border-secondary">
                      <span className="text-xs uppercase tracking-wider font-bold text-secondary block mb-1.5">
                        {sp.challengeHeading}:
                      </span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {activeCase.challenge}
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-outline-variant/40">
                      <span className="text-xs uppercase tracking-wider font-bold text-on-surface block mb-1.5">
                        {sp.solutionHeading}:
                      </span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {activeCase.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Measurable Outcome: Sleek accent strip */}
                <div className="p-4 rounded-2xl bg-primary-container/20 border border-outline-variant/40 flex items-start gap-3 mt-4">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-on-surface block">
                      {sp.resultHeading}:
                    </span>
                    <p className="text-xs sm:text-sm text-on-surface mt-1">
                      {activeCase.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat Highlight Column: Hairline Divider (Zero Inner Card Nesting) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-outline-variant/40 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between text-center space-y-5">
                <div className="space-y-4 my-auto">
                  <div className="p-3 rounded-full w-14 h-14 mx-auto bg-primary-container/30 border border-outline-variant/40 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-serif-display font-extrabold text-on-surface block">
                      {activeCase.metricHighlight}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant mt-1 block">
                      {activeCase.metricLabel}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed px-2">
                    Documented case study with platform ticket ID and verified host performance metrics.
                  </p>
                </div>
                <button
                  onClick={() => onOpenBooking('calendar')}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{sp.ctaScheduleAudit}</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Host Testimonials with Before / After occupancy & rating stats */}
        <div>
          <div className="text-left mb-6">
            <h3 className="text-lg font-serif-display font-bold text-on-surface flex items-center gap-2">
              <Quote className="w-5 h-5 text-on-surface-variant" />
              <span>Host Testimonials & Hard Performance Metrics</span>
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
              Before and after metrics from active property owners utilizing MyHost co-hosting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-outline flex flex-col justify-between text-left transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  {/* Before / After Stats Table */}
                  <div className="pt-4 border-t border-outline-variant/40 mb-4 space-y-2">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                      Before vs After MyHost:
                    </p>
                    {t.stats.map((st, sIdx) => {
                      const isHighlighted = sIdx === 0;
                      return (
                        <div key={sIdx} className="flex justify-between items-center text-xs">
                          <span className="text-on-surface-variant">{st.label}:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-on-surface-variant/70 line-through text-[11px]">{st.before}</span>
                            <span className={`font-bold font-mono ${isHighlighted ? 'text-secondary' : 'text-on-surface-variant'}`}>
                              {st.after}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-outline-variant/40">
                    <img
                      src={t.avatar}
                      alt={t.author || 'Host Avatar'}
                      className="w-10 h-10 rounded-full object-cover border border-outline-variant/40"
                    />
                    <div>
                      <p className="text-xs font-bold text-on-surface">{t.author}</p>
                      <p className="text-[11px] text-on-surface-variant">{t.role}</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenFreeFiveModal}
              className="inline-flex items-center px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-on-surface bg-primary-container/30 border border-primary/40 hover:bg-primary-container/50 transition-all"
            >
              <span>{sp.ctaClaimOffer}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
