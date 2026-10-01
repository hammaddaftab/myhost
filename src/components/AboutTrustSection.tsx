import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Award, Lock, CheckCircle2, Laptop } from 'lucide-react';
import { TRUST_BADGES } from '../data/mockData';

export default function AboutTrustSection() {
  const credentials = [
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: "12+ Years STR Hospitality Experience",
      description: "Founded by former Airbnb Superhost Ambassadors and revenue managers who scaled personal 8-figure vacation rental portfolios."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Platform Policy & Dispute Savvy",
      description: "Our in-house compliance specialists know the exact clauses in Airbnb and VRBO Terms of Service to protect hosts from unfair guest retaliation."
    },
    {
      icon: <Laptop className="w-6 h-6 text-emerald-600" />,
      title: "Certified Tooling Stack Integrations",
      description: "Official partners with PriceLabs, Guesty, Hostaway, Minut noise monitors, and Turno cleaner dispatch platforms."
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
      title: "Direct Owner Financial Protection",
      description: "We never touch your payouts. All booking revenue deposits directly from OTAs into your verified bank account. We operate as authorized co-hosts."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            eyebrow="About & Trust"
            title="Built by Seasoned Superhosts for Serious Property Investors"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
            We started MyHost because traditional management agencies charge 25–40% while delivering generic call-center messaging and ignoring unfair reviews. We created a modern, data-backed co-hosting partner.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-left space-y-3 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-xs">
                {cred.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-900 leading-snug">
                {cred.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Ecosystem & Software Certifications */}
        <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              Industry Certifications & Software Integrations
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-zinc-200 text-center space-y-1 shadow-xs"
              >
                <span className="text-xs font-bold text-zinc-900 block">
                  {badge.name}
                </span>
                <span className="text-[10px] text-zinc-500 block">
                  {badge.label}
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold block pt-1">
                  {badge.metric}
                </span>
              </div>
            ))}
          </div>

          {/* 3 Host Guarantees */}
          <div className="mt-8 pt-6 border-t border-zinc-200 grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  100% Host Listing Ownership
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  You own your account, listing data, and guest reviews forever.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Zero Lock-In Contracts
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  Flexible month-to-month terms. Cancel anytime with simple 14-day notice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Direct Guest Revenue Payouts
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  All guest payments deposit straight into your own verified bank account.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
