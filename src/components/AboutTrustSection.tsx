import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Award, Lock, Laptop } from 'lucide-react';
import { strings } from '../strings';
import PlatformBar from './PlatformBar';

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {at.credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-transparent border border-outline-variant/40 text-left space-y-3"
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

        {/* Multi-Platform Coverage & Channel Synchronization */}
        <PlatformBar />

      </div>
    </section>
  );
}
