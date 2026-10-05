import { SectionHeader } from './SectionHeader';
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users,
  CheckCircle2
} from 'lucide-react';
import { strings } from '../strings';

interface DifferentiatorsSectionProps {
  onOpenBooking?: () => void;
  onOpenFreeFiveModal?: () => void;
}

export default function DifferentiatorsSection({}: DifferentiatorsSectionProps = {}) {
  const { differentiators: d } = strings;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-primary" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-primary" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-primary" />;
      case 'Users':
        return <Users className="w-5 h-5 text-primary" />;
      default:
        return <Zap className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="why-myhost" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            eyebrow={d.eyebrow}
            title={d.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {d.description}
          </p>
        </div>

        {/* 4 Core Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {d.items.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between hover:border-outline transition-colors text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium text-on-surface-variant">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Verified Visual Evidence / Platform Proof */}
              {item.assets && item.assets.length > 0 && (
                <div className="mt-4 pt-4 border-t border-outline-variant/30">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant font-semibold block mb-2.5">
                    Verified Platform Evidence
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    {item.assets.map((asset, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-1 rounded-xl bg-surface-container border border-outline-variant/40 flex items-center justify-center overflow-hidden hover:border-outline transition-colors"
                      >
                        <img
                          src={asset.src}
                          alt={asset.alt}
                          className="h-14 sm:h-16 w-auto object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
