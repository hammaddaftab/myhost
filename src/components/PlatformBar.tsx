import { CheckCircle2 } from 'lucide-react';
import { strings } from '../strings';

export default function PlatformBar() {
  const { platformBar } = strings;

  return (
    <section className="py-8 bg-surface border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <p className="text-[11px] uppercase tracking-widest text-on-surface-variant font-semibold">
            {platformBar.headline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto items-center">
          {platformBar.channels.map((ch) => (
            <div
              key={ch.name}
              className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col items-center justify-center text-center transition-colors duration-200 group"
            >
              <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                {ch.name}
              </span>
              <span className="text-[10px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-2.5 h-2.5 text-on-surface-variant" />
                {ch.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
