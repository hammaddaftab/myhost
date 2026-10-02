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
import { strings } from '../strings';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export default function ProcessSection({ onOpenBooking }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { process: p } = strings;
  const processSteps = p.steps;

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
            eyebrow={p.eyebrow}
            title={p.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {p.description}
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
                      {p.stepPrefix} 0{step.step}
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
                    {p.exploreLabel} <ArrowRight className="w-3 h-3" />
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
                    {p.stagePrefix} 0{currentStepData.step} • {currentStepData.duration}
                  </span>
                  <span className="text-xs text-on-surface-variant">{p.includedInAllPlans}</span>
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
                  {p.actionableDeliverables}
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
                  <span>{p.ctaConsultation}</span>
                </button>
                <span className="text-xs text-on-surface-variant">
                  {p.consultationSubtext}
                </span>
              </div>
            </div>

            {/* Simulated Stage Visual Card */}
            <div className="lg:col-span-5 bg-surface-container rounded-2xl p-5 border border-outline-variant/40 text-left">
              <div className="text-xs font-mono text-on-surface-variant pb-3 mb-3 border-b border-outline-variant/40 flex items-center justify-between">
                <span>{p.previewTitle}</span>
                <span className="text-on-surface-variant font-semibold">{p.freeFirstFiveNote}</span>
              </div>

              {activeStep === 1 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <p className="text-xs font-semibold text-on-surface-variant">{p.simulatedCards.step1.scoreTitle}</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold font-mono text-on-surface">{p.simulatedCards.step1.scoreValue}</span>
                      <span className="text-xs text-secondary font-semibold">{p.simulatedCards.step1.scoreOpportunity}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">{p.simulatedCards.step1.breakdownTitle}</p>
                    <p>{p.simulatedCards.step1.bullet1}</p>
                    <p>{p.simulatedCards.step1.bullet2}</p>
                    <p>{p.simulatedCards.step1.bullet3}</p>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <p className="text-xs font-semibold text-on-surface-variant">{p.simulatedCards.step2.title}</p>
                    <p className="text-sm font-bold text-on-surface mt-1">{p.simulatedCards.step2.subtitle}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">{p.simulatedCards.step2.breakdownTitle}</p>
                    <p>{p.simulatedCards.step2.bullet1}</p>
                    <p>{p.simulatedCards.step2.bullet2}</p>
                    <p>{p.simulatedCards.step2.bullet3}</p>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-semibold text-on-surface-variant">{p.simulatedCards.step3.title}</p>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <p className="text-xl font-mono font-bold text-on-surface mt-1">{p.simulatedCards.step3.subtitle}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">{p.simulatedCards.step3.breakdownTitle}</p>
                    <p>{p.simulatedCards.step3.bullet1}</p>
                    <p>{p.simulatedCards.step3.bullet2}</p>
                    <p>{p.simulatedCards.step3.bullet3}</p>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40">
                    <p className="text-xs font-semibold text-on-surface-variant">{p.simulatedCards.step4.title}</p>
                    <p className="text-sm font-bold text-on-surface mt-1">{p.simulatedCards.step4.subtitle}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs space-y-1 text-on-surface-variant">
                    <p className="font-semibold text-on-surface">{p.simulatedCards.step4.breakdownTitle}</p>
                    <p>{p.simulatedCards.step4.bullet1}</p>
                    <p>{p.simulatedCards.step4.bullet2}</p>
                    <p>{p.simulatedCards.step4.bullet3}</p>
                  </div>
                </div>
              )}

              <div className="mt-4 p-2.5 rounded-lg bg-primary-container/30 border border-emerald-500/40 text-center">
                <span className="text-[11px] font-semibold text-on-surface">
                  {p.firstFiveBadge}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
