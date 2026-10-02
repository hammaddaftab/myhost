import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Award, Lock, CheckCircle2, Laptop } from 'lucide-react';
import { strings } from '../strings';

export default function AboutTrustSection() {
  const { aboutTrust: at } = strings;

  const getCredentialIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-6 h-6 text-primary" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-primary" />;
      case 2:
        return <Laptop className="w-6 h-6 text-primary" />;
      case 3:
        return <Lock className="w-6 h-6 text-primary" />;
      default:
        return <Award className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            eyebrow={at.eyebrow}
            title={at.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {at.companyHistory}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {at.credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 text-left space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container border border-outline-variant/40 flex items-center justify-center">
                {getCredentialIcon(idx)}
              </div>
              <h3 className="text-base font-bold text-on-surface leading-snug">
                {cred.title}
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Ecosystem & Software Certifications */}
        <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
              {at.certificationsTitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {(at.partnerLogoList ?? []).map((badge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-surface-container border border-outline-variant/40 text-center space-y-1"
              >
                <span className="text-xs font-bold text-on-surface block">
                  {badge.name}
                </span>
                <span className="text-[10px] text-on-surface-variant block">
                  {badge.label}
                </span>
                <span className="text-[10px] font-mono text-on-surface-variant font-semibold block pt-1">
                  {badge.metric}
                </span>
              </div>
            ))}
          </div>

          {/* 3 Host Guarantees */}
          <div className="mt-8 pt-6 border-t border-outline-variant/40 grid md:grid-cols-3 gap-6 text-left">
            {at.guarantees.map((g, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-on-surface-variant shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">
                    {g.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {g.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
