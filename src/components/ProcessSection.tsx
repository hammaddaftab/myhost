import { SectionHeader } from './SectionHeader';
import { 
  Search, 
  FileText, 
  Headphones, 
  BarChart3 
} from 'lucide-react';
import { strings } from '../strings';

interface ProcessSectionProps {
  onOpenBooking?: () => void;
}

export default function ProcessSection({ onOpenBooking: _onOpenBooking }: ProcessSectionProps = {}) {
  const { process: p } = strings;
  const processSteps = p.steps;

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Search className="w-5 h-5 text-primary" />;
      case 2:
        return <FileText className="w-5 h-5 text-primary" />;
      case 3:
        return <Headphones className="w-5 h-5 text-primary" />;
      case 4:
        return <BarChart3 className="w-5 h-5 text-primary" />;
      default:
        return <Search className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* 4-Step Cards: icon + step level + title + supporting content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col hover:border-outline transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center">
                  {getStepIcon(step.step)}
                </div>
                <span className="text-xs font-mono font-medium text-on-surface-variant">
                  {p.stepPrefix} 0{step.step}
                </span>
              </div>

              {/* Title as the only emphasized content */}
              <h3 className="text-lg font-bold text-on-surface mb-2">
                {step.title}
              </h3>

              {/* Supporting Content */}
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
