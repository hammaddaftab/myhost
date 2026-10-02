import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Check, 
  ArrowRight, 
  Calculator, 
  Calendar
} from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function PricingSection({ onOpenBooking, onOpenFreeFiveModal }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('monthly');
  const [pricingModel, setPricingModel] = useState<'flat' | 'percentage'>('flat');

  // ROI Calculator State
  const [nightlyRate, setNightlyRate] = useState<number>(240);
  const [monthlyNights, setMonthlyNights] = useState<number>(18);

  const currentMonthlyGross = nightlyRate * monthlyNights;
  const projectedNights = Math.min(28, monthlyNights + 3);
  const projectedRate = Math.round(nightlyRate * 1.18);
  const projectedGross = projectedRate * projectedNights;
  const estimatedLift = projectedGross - currentMonthlyGross;

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      tagline: "Guest communications and message handling only.",
      priceMonthly: 199,
      priceAnnual: 169,
      percentageRate: "Or 8% of booking revenue",
      description: "Designed for hosts who handle cleaning and maintenance themselves, but want total freedom from 24/7 guest messaging.",
      features: [
        "24/7/365 Guest communication (SLA < 5 mins)",
        "Pre-booking guest screening & ID verification",
        "Check-in & check-out instructions delivery",
        "Emergency escalation dispatch to host",
        "Monthly communication performance report"
      ],
      ctaText: "Start with Basic",
      popular: false
    },
    {
      id: "full-service",
      name: "Full-Service",
      tagline: "Comprehensive listing management, guest messaging, optimization, and dispute resolution.",
      priceMonthly: 399,
      priceAnnual: 339,
      percentageRate: "Or 15% of booking revenue",
      description: "Our signature end-to-end co-hosting package. Listing optimization, dynamic event pricing, cleaner dispatch, and proactive review dispute defense.",
      features: [
        "Everything in Basic, plus:",
        "Algorithmic Dynamic Pricing (Daily adjustments)",
        "Review Dispute & Removal representation (94% win rate)",
        "Listing SEO: Title, description & photo optimization",
        "Cleaner scheduling & Turno checklist monitoring",
        "Multi-channel calendar sync (Airbnb, VRBO, Booking.com)",
        "Dedicated in-house account manager",
        "Bi-weekly detailed RevPAR performance reporting"
      ],
      ctaText: "Choose Full-Service",
      popular: true
    },
    {
      id: "portfolio",
      name: "Custom Portfolio",
      tagline: "Bespoke agreements designed for multi-unit operators and property management groups.",
      priceMonthly: 799,
      priceAnnual: 679,
      percentageRate: "Custom volume-based pricing",
      description: "Engineered specifically for multi-property hosts and boutique management funds requiring enterprise SLAs, custom integrations, and dedicated hospitality squads.",
      features: [
        "Everything in Full-Service, plus:",
        "Volume-tiered commission discounts",
        "Custom PMS API sync (Guesty, Hostaway, Hospitable)",
        "Dedicated hospitality concierge squad",
        "Custom branded guest digital guidebooks",
        "Owner financial reporting & tax statement prep",
        "Quarterly executive portfolio review"
      ],
      ctaText: "Contact Portfolio Team",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            eyebrow="Pricing & Packages"
            title="Tiered Plans Engineered to Maximize Host Profits"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            Choose between flat monthly subscriptions or percentage-based revenue sharing. Zero onboarding fees, zero lock-in contracts, and your first 5 stays managed completely free.
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
                Flat Monthly Fee
              </button>
              <button
                onClick={() => setPricingModel('percentage')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  pricingModel === 'percentage'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                % Revenue Share
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
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    billingCycle === 'annual'
                      ? 'bg-surface-container-high text-on-surface'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span>Annual</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-primary-container text-on-primary-container font-bold">
                    Save 15%
                  </span>
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
                <span>Introductory Incentive • 100% Risk Free</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                Launch Guarantee: Free-First-5 Stays
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Experience our sub-5 minute response times and 5-star review defense with zero management fees on your next 5 reservations.
              </p>

              <div className="grid sm:grid-cols-2 gap-2 pt-1 text-xs text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Next 5 reservations managed 100% free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Includes 24/7 guest comms & review defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>No credit card required to activate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Zero long-term lock-in contract</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-3">
              <button
                onClick={onOpenFreeFiveModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <span>Claim Free-First-5 Stays</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-on-surface-variant text-center lg:text-right">
                Instant enrollment • First 5 bookings • Cancel anytime
              </p>
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
                    <span>Most Popular</span>
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
                              / month / unit
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
                      Included Services:
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
                  <p className="text-[10px] text-on-surface-variant text-center">
                    Qualifies for Free-First-5 Stays guarantee
                  </p>
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
                <span>INTERACTIVE REVENUE ESTIMATOR</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                  Calculate Your STR Profit Lift
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Sub-5 minute response times convert more browsers, and algorithmic pricing maximizes revenue during high-demand dates.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-on-surface-variant mb-1.5">
                    <span>Average Nightly Rate (ADR):</span>
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
                    <span>Nights Booked Per Month:</span>
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
                  <span className="text-[11px] text-on-surface-variant block">Current Gross Monthly</span>
                  <span className="text-xl font-serif-display font-bold text-on-surface mt-1 block">
                    ${currentMonthlyGross.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-on-surface-variant">{monthlyNights} nights @ ${nightlyRate}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/40">
                  <span className="text-[11px] text-on-surface-variant block font-semibold">With MyHost Co-Hosting</span>
                  <span className="text-xl font-serif-display font-bold text-on-surface mt-1 block">
                    ${projectedGross.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-secondary">{projectedNights} nights @ ${projectedRate}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-outline-variant/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-on-surface-variant font-medium">Estimated Net Monthly Revenue Lift:</span>
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
                <span>Verify Your Property Potential on Free Audit Call</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
