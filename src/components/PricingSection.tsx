import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Check, 
  ArrowRight, 
  Calculator, 
  Calendar
} from 'lucide-react';
import { strings } from '../strings';

interface PricingSectionProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function PricingSection({ onOpenBooking, onOpenFreeFiveModal }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('monthly');
  const [pricingModel, setPricingModel] = useState<'flat' | 'percentage'>('flat');

  const { pricing: p } = strings;
  const pricingPlans = p.plans;

  // ROI Calculator State
  const [nightlyRate, setNightlyRate] = useState<number>(240);
  const [monthlyNights, setMonthlyNights] = useState<number>(18);

  const currentMonthlyGross = nightlyRate * monthlyNights;
  const projectedNights = Math.min(28, monthlyNights + 3);
  const projectedRate = Math.round(nightlyRate * 1.18);
  const projectedGross = projectedRate * projectedNights;
  const estimatedLift = projectedGross - currentMonthlyGross;

  return (
    <section id="pricing" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            eyebrow={p.eyebrow}
            title={p.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {p.description}
          </p>

          {/* Pricing Controls */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-surface-container border border-outline-variant/40">
              <button
                onClick={() => setPricingModel('flat')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  pricingModel === 'flat'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {p.toggleFlat}
              </button>
              <button
                onClick={() => setPricingModel('percentage')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  pricingModel === 'percentage'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {p.togglePercentage}
              </button>
            </div>

            {pricingModel === 'flat' && (
              <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-surface-container border border-outline-variant/40">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-surface-container-high text-on-surface'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {p.billingMonthly}
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    billingCycle === 'annual'
                      ? 'bg-surface-container-high text-on-surface'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span>{p.billingAnnual}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Highlighted "Free-First-5" Offer Banner per exact specification */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-primary-container/30 border-2 border-emerald-500/50 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2.5 text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold">
                <span>{p.freeTrialBanner.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                {p.freeTrialBanner.headline}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {p.freeTrialBanner.subheadline}
              </p>

              <div className="grid sm:grid-cols-2 gap-2 pt-1 text-xs text-on-surface-variant">
                {p.freeTrialBanner.terms.map((term, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{term}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-3">
              <button
                onClick={onOpenFreeFiveModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <span>{p.freeTrialBanner.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Tiered Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
          {pricingPlans.map((plan) => {
            const isFullService = plan.id === 'full-service';
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 relative ${
                  isFullService
                    ? 'bg-surface-container-low border-2 border-outline'
                    : 'bg-surface-container-low border border-outline-variant/40 hover:border-outline'
                }`}
              >
                {isFullService && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center">
                    <span>{p.popularBadge}</span>
                  </div>
                )}

                <div>
                  <div className="text-left mb-6">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-xl font-serif-display font-bold text-on-surface">
                        {plan.name}
                      </h3>
                      {plan.id === 'portfolio' && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">
                          5+ Units
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-on-surface-variant leading-snug">
                      {plan.tagline}
                    </p>

                    {/* Price display */}
                    <div className="mt-5 pb-5 border-b border-outline-variant/40">
                      {pricingModel === 'flat' ? (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-3xl sm:text-4xl font-extrabold font-serif-display text-on-surface">
                              ${price}
                            </span>
                            <span className="text-xs text-on-surface-variant font-medium">
                              {p.monthSuffix} / unit
                            </span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-1 font-semibold">
                            {plan.percentageRate}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-3xl sm:text-4xl font-extrabold font-serif-display text-on-surface">
                              {plan.id === 'basic' ? '8%' : plan.id === 'full-service' ? '15%' : 'Custom'}
                            </span>
                            <span className="text-xs text-on-surface-variant font-medium">
                              of gross revenue
                            </span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-1 font-medium">
                            Or flat rate: ${price}/mo
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6 text-left">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 mb-8 text-left">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant">
                      {p.featuresHeading}
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-on-surface-variant">
                        <Check className="w-4 h-4 text-on-surface-variant shrink-0 mt-0.5" />
                        <span className={feature.startsWith("Everything in") ? "font-semibold text-on-surface" : ""}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isFullService
                        ? 'bg-primary text-on-primary hover:opacity-90'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant/40'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Revenue Lift Estimator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold border border-outline-variant/40">
                <Calculator className="w-3.5 h-3.5 text-on-surface-variant" />
                <span>{p.roiCalculator.title}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                  {p.roiCalculator.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {p.roiCalculator.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-on-surface-variant mb-1.5">
                    <span>{p.roiCalculator.nightlyRateLabel}:</span>
                    <span className="font-mono text-base font-bold text-on-surface">${nightlyRate}</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="900"
                    step="10"
                    value={nightlyRate}
                    onChange={(e) => setNightlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
                    <span>$80/night</span>
                    <span>$500/night</span>
                    <span>$900/night</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-on-surface-variant mb-1.5">
                    <span>{p.roiCalculator.monthlyNightsLabel}:</span>
                    <span className="font-mono text-base font-bold text-on-surface">{monthlyNights} Nights</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="28"
                    step="1"
                    value={monthlyNights}
                    onChange={(e) => setMonthlyNights(Number(e.target.value))}
                    className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
                    <span>5 nights</span>
                    <span>18 nights (avg)</span>
                    <span>28 nights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projected Net Lift */}
            <div className="lg:col-span-6 bg-surface-container p-6 rounded-2xl border border-outline-variant/40 space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3">
                <span className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                  Revenue Comparison Projection
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-semibold">
                  Data-backed Model
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/40">
                  <span className="text-[11px] text-on-surface-variant block">{p.roiCalculator.currentGrossTitle}</span>
                  <span className="text-xl font-serif-display font-bold text-on-surface mt-1 block">
                    ${currentMonthlyGross.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-on-surface-variant">{monthlyNights} nights @ ${nightlyRate}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/40">
                  <span className="text-[11px] text-on-surface-variant block font-semibold">{p.roiCalculator.projectedGrossTitle}</span>
                  <span className="text-xl font-serif-display font-bold text-on-surface mt-1 block">
                    ${projectedGross.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-secondary">{projectedNights} nights @ ${projectedRate}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-outline-variant/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-on-surface-variant font-medium">{p.roiCalculator.estimatedNetLift}:</span>
                  <p className="text-2xl font-serif-display font-extrabold text-on-surface">
                    +${estimatedLift.toLocaleString()} <span className="text-xs font-sans font-normal text-on-surface-variant">/ month</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-on-surface-variant block">Annualized Lift</span>
                  <span className="text-sm font-mono font-bold text-on-surface">
                    +${(estimatedLift * 12).toLocaleString()} / yr
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{p.roiCalculator.calculatorCta}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
