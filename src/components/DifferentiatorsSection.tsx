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
import { strings } from '../strings';

interface DifferentiatorsSectionProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function DifferentiatorsSection({ onOpenBooking, onOpenFreeFiveModal }: DifferentiatorsSectionProps) {
  const [showMatrix, setShowMatrix] = useState(false);
  const { differentiators: d } = strings;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-600" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-600" />;
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {d.items.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container border border-outline-variant/40 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant border border-outline-variant/40">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif-display font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold mt-1">
                  {item.tagline}
                </p>

                <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Side-by-Side Comparison Box */}
              <div className="mt-6 pt-5 border-t border-outline-variant/40 space-y-2.5">
                <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-on-surface-variant" />
                    {d.myHostLabel}:
                  </span>
                  <p className="text-xs text-on-surface mt-0.5 font-medium">
                    {item.myHost}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-secondary" />
                    {d.alternativeLabel}:
                  </span>
                  <p className="text-xs text-on-surface-variant mt-0.5">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant/40 transition-all"
          >
            <span>{showMatrix ? d.comparisonToggleHide : d.comparisonToggleShow}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${showMatrix ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Head-to-Head Matrix */}
        {showMatrix && (
          <div className="overflow-x-auto rounded-2xl border border-outline-variant/40 bg-surface-container-low mb-12 animate-in fade-in duration-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-surface-container border-b border-outline-variant/40 text-on-surface">
                <tr>
                  <th className="py-4 px-6 font-semibold">{d.matrixHeaders.feature}</th>
                  <th className="py-4 px-6 font-bold text-on-surface bg-surface-container-high border-x border-outline-variant/40">
                    {d.matrixHeaders.myHost}
                  </th>
                  <th className="py-4 px-6 font-medium text-on-surface-variant">{d.matrixHeaders.soloHost}</th>
                  <th className="py-4 px-6 font-medium text-on-surface-variant">{d.matrixHeaders.outsourcedAgency}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/40 text-on-surface-variant">
                {d.comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-container/60">
                    <td className="py-3.5 px-6 font-medium text-on-surface">{row.feature}</td>
                    <td className="py-3.5 px-6 font-semibold text-on-surface bg-surface-container/40 border-x border-outline-variant/40">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-on-surface-variant shrink-0" />
                        <span>{row.myHost}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6 text-on-surface-variant">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-secondary shrink-0" />
                        <span>{row.soloHost}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6 text-on-surface-variant">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-secondary shrink-0" />
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
        <div className="p-6 rounded-2xl bg-primary-container/30 border border-emerald-500/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-bold text-on-surface">{d.bannerHeadline}</p>
            <p className="text-xs text-on-surface-variant">
              {d.bannerDescription}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenFreeFiveModal}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all"
            >
              {d.ctaClaimOffer}
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-on-surface bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 transition-all"
            >
              {d.ctaBookAudit}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
