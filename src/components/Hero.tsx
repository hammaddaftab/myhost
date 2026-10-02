import { ArrowRight } from 'lucide-react';
import { strings } from '../strings';

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function Hero({ onOpenFreeFiveModal }: HeroProps) {
  const { hero } = strings;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-surface">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: Introductory Promo Card per exact specification */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-primary-container/30 border border-primary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary-container text-on-primary-container border border-primary/30">
                  {hero.promoBadge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-on-surface">
                {hero.promoHeadline}
              </h3>
              <p className="text-xs text-on-surface-variant">
                {hero.promoDescription}
              </p>
            </div>

            <button
              onClick={onOpenFreeFiveModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-on-primary hover:bg-primary/90 transition-all shrink-0 active:scale-95"
            >
              <span>{hero.promoCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Centered Value Proposition */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* De-emphasized category pill matching preview.webp */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container/60 border border-outline-variant/60 text-xs text-on-surface-variant font-medium">
            {hero.categoryPill}
          </div>

          {/* Hero Headline */}
          <h1 className="text-headline-hero text-balance text-on-surface">
            <span className="inline-block">{hero.headlinePart1}</span>{' '}
            <span className="inline-block text-primary">{hero.headlinePart2}</span>
          </h1>

          {/* Hero Subheadline */}
          <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
        </div>

        {/* Key Metrics Card: Four columns with values in text-on-surface font-bold per exact specification */}
        <div className="mt-14 pt-8 border-t border-outline-variant/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {hero.metrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <p className="text-2xl sm:text-3xl font-bold text-on-surface font-serif-display">{metric.value}</p>
              <p className="text-xs text-on-surface-variant font-medium mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
