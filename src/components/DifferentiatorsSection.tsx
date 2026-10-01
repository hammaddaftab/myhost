import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Check, 
  X, 
  ArrowRight
} from 'lucide-react';

interface DifferentiatorsSectionProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function DifferentiatorsSection({ onOpenBooking, onOpenFreeFiveModal }: DifferentiatorsSectionProps) {
  const [showMatrix, setShowMatrix] = useState(false);

  const differentiators = [
    {
      title: "Rapid Guest Response Times",
      tagline: "Sub-5 minute response SLAs 24/7/365",
      description: "Substantially faster response SLAs to improve response rate metrics and guest review scores. We respond within minutes around the clock, converting browsers into confirmed bookings while boosting your search algorithm placement.",
      myHost: "Guaranteed <5m average response SLA 24/7 by dedicated hospitality specialists.",
      alternative: "4 to 12 hour delayed responses from solo hosts or outsourced offshore call centers.",
      badge: "< 5m Guaranteed SLA",
      icon: <Zap className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Review Dispute & Removal",
      tagline: "Proven platform policy dispute process",
      description: "A structured, proven process to dispute and remove unfair or policy-violating negative reviews. We leverage deep platform policy knowledge and timestamped evidence to protect your Superhost status.",
      myHost: "Formal documentation & direct Trust & Safety escalation. 94% win rate on policy disputes.",
      alternative: "Standard generic tickets that get auto-rejected by automated tier-1 support bots.",
      badge: "94% Win Rate",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Data-Backed Listing Optimization",
      tagline: "Algorithmic pricing and conversion SEO",
      description: "Algorithmic and market-data adjustments to photos, titles, descriptions, and dynamic pricing. We synchronize daily event demand, competitor occupancy, and pacing curves to maximize your RevPAR.",
      myHost: "Dynamic pricing calibrated daily with continuous A/B testing of photos and copy.",
      alternative: "Static flat rates or Airbnb Smart Pricing that systematically depresses weekend rates.",
      badge: "+26.4% RevPAR Lift",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Dedicated In-House Support",
      tagline: "Assigned account managers, zero call centers",
      description: "Assigned account management and guest support rather than impersonal outsourced call centers. Trained specialists understand your property, house manual, and local quirks.",
      myHost: "Dedicated account manager with a direct WhatsApp or Slack channel for the property owner.",
      alternative: "Anonymous third-party call centers reading generic scripts with zero local context.",
      badge: "100% In-House Team",
      icon: <Users className="w-6 h-6 text-emerald-600" />
    }
  ];

  const comparisonRows = [
    {
      feature: "Guest Response Velocity",
      myHost: "< 5 minutes guaranteed (24/7/365)",
      soloHost: "4 – 12 hours (delayed by work/sleep)",
      outsourcedAgency: "1 – 3 hours (robotic templates)"
    },
    {
      feature: "Unfair Review Dispute Support",
      myHost: "Proactive platform policy defense (94% win rate)",
      soloHost: "Manual tickets (frequently rejected)",
      outsourcedAgency: "Not included or billed extra"
    },
    {
      feature: "Dynamic Pricing Engine",
      myHost: "Daily market & event pricing algorithms",
      soloHost: "Flat static rates or Smart Pricing leaks",
      outsourcedAgency: "Occasional manual rate adjustments"
    },
    {
      feature: "Guest Hospitality Care",
      myHost: "Dedicated in-house hospitality specialists",
      soloHost: "Solo host burnout",
      outsourcedAgency: "Impersonal offshore call center"
    },
    {
      feature: "Account Ownership & Payouts",
      myHost: "Host retains 100% bank credentials & ownership",
      soloHost: "Direct ownership",
      outsourcedAgency: "Often routed through agency accounts"
    },
    {
      feature: "Introductory Trial",
      myHost: "Free-First-5 Stays ($0 upfront risk)",
      soloHost: "N/A",
      outsourcedAgency: "Upfront onboarding fees ($500+)"
    }
  ];

  return (
    <section id="why-myhost" className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            eyebrow="Why Choose MyHost"
            title="The Four Unfair Advantages That Elevate Your STR Revenue"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
            Most co-hosts are either overwhelmed solo hosts or impersonal outsourced call centers. MyHost delivers dedicated in-house hospitality specialists backed by data and platform policy expertise.
          </p>
        </div>

        {/* 4 Core Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between text-left shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif-display font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold mt-1">
                  {item.tagline}
                </p>

                <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Side-by-Side Comparison Box */}
              <div className="mt-6 pt-5 border-t border-zinc-200 space-y-2.5">
                <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    MyHost Standard:
                  </span>
                  <p className="text-xs text-zinc-800 mt-0.5 font-medium">
                    {item.myHost}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-rose-500" />
                    Traditional Alternative:
                  </span>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {item.alternative}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Detailed Comparison Matrix */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 transition-all"
          >
            <span>{showMatrix ? "Hide Detailed Comparison Matrix" : "View Detailed Head-to-Head Comparison Matrix"}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${showMatrix ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Head-to-Head Matrix */}
        {showMatrix && (
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm mb-12 animate-in fade-in duration-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100 border-b border-zinc-200 text-zinc-700">
                <tr>
                  <th className="py-4 px-6 font-semibold">Capability</th>
                  <th className="py-4 px-6 font-bold text-emerald-800 bg-emerald-50 border-x border-emerald-200">
                    MyHost Co-Hosting
                  </th>
                  <th className="py-4 px-6 font-medium text-zinc-500">Solo Host (DIY)</th>
                  <th className="py-4 px-6 font-medium text-zinc-500">Traditional Agency / Call Center</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/80">
                    <td className="py-3.5 px-6 font-medium text-zinc-900">{row.feature}</td>
                    <td className="py-3.5 px-6 font-semibold text-emerald-800 bg-emerald-50/50 border-x border-emerald-200">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.myHost}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6 text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.soloHost}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6 text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.outsourcedAgency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Quick Conversion Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-bold text-emerald-900">Ready to experience sub-5m response speeds on your properties?</p>
            <p className="text-xs text-emerald-700">
              Claim our Free-First-5 Stays offer today. Zero management fees for your next 5 reservations.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenFreeFiveModal}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all"
            >
              Claim Free 5 Stays
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 transition-all"
            >
              Book Audit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
