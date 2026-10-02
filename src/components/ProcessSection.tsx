import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  FileText, 
  Headphones, 
  BarChart3, 
  Calendar
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export default function ProcessSection({ onOpenBooking }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const processSteps = [
    {
      step: 1,
      title: "Audit & Consultation",
      subtitle: "Complimentary initial consultation and comprehensive STR property audit.",
      description: "We inspect your listing search visibility, historical ADR, occupancy leaks, guest response velocity, and negative review vulnerability against top local comps.",
      deliverables: [
        "Complimentary STR property audit score",
        "Market comp & pricing gap analysis",
        "Review vulnerability assessment",
        "Direct 1-on-1 strategy call with co-host lead"
      ],
      duration: "Within 24 Hours"
    },
    {
      step: 2,
      title: "Custom Strategy Plan",
      subtitle: "Tailored roadmap addressing guest communications, listing optimization, and review management.",
      description: "We engineer customized guest communication playbooks, optimize photo sequencing and SEO descriptions, and set dynamic pricing guardrails tailored to your market.",
      deliverables: [
        "Guest communication & FAQ playbook",
        "Title & description algorithmic SEO rewrite",
        "Dynamic pricing guardrails & min-night rules",
        "Review dispute defense roadmap"
      ],
      duration: "Days 2 - 3"
    },
    {
      step: 3,
      title: "Active Management",
      subtitle: "Daily operations, round-the-clock guest messaging, and support coordination.",
      description: "Our dedicated in-house team takes over guest inquiries in under 5 minutes, handles pre-stay guest screening, coordinates turnover dispatches, and ensures 5-star communication.",
      deliverables: [
        "Guaranteed <5-minute response SLA (24/7/365)",
        "Guest screening & ID verification checks",
        "Turnover dispatch & cleaner checklist monitoring",
        "Emergency guest on-site de-escalation"
      ],
      duration: "Daily Operations"
    },
    {
      step: 4,
      title: "Performance Reporting",
      subtitle: "Scheduled reporting cycles delivering insights on occupancy, revenue, ratings, and resolution stats.",
      description: "Scheduled bi-weekly and monthly reporting cycles delivering granular insights on occupancy, ADR, RevPAR gains, guest sentiment trends, and dispute resolution stats.",
      deliverables: [
        "Monthly revenue & occupancy dashboard",
        "Competitor ADR & channel performance benchmark",
        "Review sentiment & response velocity analytics",
        "Quarterly growth & yield strategy review"
      ],
      duration: "Bi-Weekly & Monthly"
    }
  ];

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Search className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <FileText className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      case 4:
        return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Search className="w-5 h-5 text-emerald-600" />;
    }
  };

  const currentStepData = processSteps.find((s) => s.step === activeStep) || processSteps[0];

  return (
    <section id="how-it-works" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reusable SectionHeader Component per specification */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            eyebrow="Simple 4-Step Process"
            title="How Partnering With MyHost Works"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            We handle the heavy operational lifting—guest messaging, review defense, pricing updates, and turnover coordination—so you enjoy passive cash flow without the 24/7 grind.
          </p>
        </div>

        {/* 4-Step Stepper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {processSteps.map((step) => {
            const isActive = activeStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`text-left p-5 rounded-2xl transition-colors duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-surface-container-low border-2 border-outline'
                    : 'bg-surface-container-low border border-outline-variant/40 hover:border-outline'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
                    }`}>
                      {getStepIcon(step.step)}
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant bg-surface-container'
                    }`}>
                      Step 0{step.step}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold ${isActive ? 'text-on-surface' : 'text-on-surface'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-snug">
                    {step.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px]">
                  <span className="text-on-surface-variant font-medium">{step.duration}</span>
                  <span className={`font-semibold flex items-center gap-1 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Deep Dive Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-primary-container text-on-primary-container">
                    STAGE 0{currentStepData.step} • {currentStepData.duration}
                  </span>
                  <span className="text-xs text-on-surface-variant">Included in all plans</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                  {currentStepData.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {currentStepData.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5">
                <p className="text-xs uppercase tracking-wider font-bold text-on-surface-variant">
                  Actionable Deliverables:
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {currentStepData.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface-container border border-outline-variant/40 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-on-surface-variant shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-on-surface">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Start Step 1: Free Consultation</span>
                </button>
                <span className="text-xs text-on-surface-variant">
                  Takes 15 minutes • Zero obligation
                </span>
              </div>
            </div>

            {/* Simulated Stage Visual Card */}
            <div className="lg:col-span-5 bg-surface-container rounded-2xl p-5 border border-outline-variant/40 text-left">
              <div className="text-xs font-mono text-on-surface-variant pb-3 mb-3 border-b border-outline-variant/40 flex items-center justify-between">
                <span>OPERATIONAL STAGE PREVIEW</span>
                <span className="text-on-surface-variant font-semibold">100% Free First 5</span>
              </div>

              {activeStep === 1 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <p className="text-xs font-semibold text-on-surface-variant">Listing Revenue Health Score</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold font-mono text-on-surface">76 / 100</span>
                      <span className="text-xs text-secondary font-semibold">+24pt Opportunity</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">Initial Audit Breakdown:</p>
                    <p>• Midweek vacancy: 34% below top 10% comp set</p>
                    <p>• Response time: 3.2 hrs avg (hurts search ranking)</p>
                    <p>• 1 retaliatory review eligible for dispute appeal</p>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <p className="text-xs font-semibold text-on-surface-variant">Strategy Deliverable</p>
                    <p className="text-sm font-bold text-on-surface mt-1">Full Listing & Pricing Roadmap</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">Custom Implementation:</p>
                    <p>• Custom house rules & keypad check-in guide</p>
                    <p>• Dynamic event pricing rules for local festivals</p>
                    <p>• Re-sequenced hero photos for +24% click rate</p>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-semibold text-on-surface-variant">24/7 Operations SLA</p>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <p className="text-xl font-mono font-bold text-on-surface mt-1">3.8 min Average</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">Active Live Coverage:</p>
                    <p>• Fast inquiry conversion around the clock</p>
                    <p>• Automated cleaner dispatch via Turno</p>
                    <p>• Midnight emergency guest assistance</p>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <p className="text-xs font-semibold text-on-surface-variant">Performance Report Delivery</p>
                    <p className="text-sm font-bold text-on-surface mt-1">Delivered 1st of Every Month</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">Granular Metrics:</p>
                    <p>• Net revenue & RevPAR growth (+26.4% YoY)</p>
                    <p>• Occupancy rate vs market benchmark (86% vs 64%)</p>
                    <p>• 100% 5-star communication ratings breakdown</p>
                  </div>
                </div>
              )}

              <div className="mt-4 p-2.5 rounded-lg bg-primary-container/30 border border-emerald-500/40 text-center">
                <span className="text-[11px] font-semibold text-on-surface">
                  First 5 bookings managed free with zero host fees
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
