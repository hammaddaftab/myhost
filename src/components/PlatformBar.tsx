import { CheckCircle2, Globe, Cpu } from 'lucide-react';
import { strings } from '../strings';

export default function PlatformBar() {
  const { platformBar } = strings;

  return (
    <div className="mt-14">
      <div className="text-center mb-8">
        <p className="text-[11px] uppercase tracking-widest text-on-surface-variant font-semibold">
          {platformBar.headline}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Group 1: Booking Channels */}
        <div className="p-5 sm:p-6 rounded-2xl bg-transparent border border-outline-variant/40 flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Globe className="w-3.5 h-3.5 text-primary" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-on-surface uppercase tracking-wide">
                {platformBar.bookingChannelsTitle}
              </h3>
            </div>
            <p className="text-xs text-on-surface-variant pl-8">
              {platformBar.bookingChannelsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {platformBar.bookingChannels.map((ch) => (
              <div
                key={ch.name}
                className="p-3 rounded-xl border border-outline-variant/40 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center transition-all duration-200 group hover:border-primary"
              >
                <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                  {ch.name}
                </span>
                <span className="text-[10px] text-on-surface-variant flex items-center gap-1 sm:mt-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-primary shrink-0" />
                  {ch.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Operations Software */}
        <div className="p-5 sm:p-6 rounded-2xl bg-transparent border border-outline-variant/40 flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Cpu className="w-3.5 h-3.5 text-primary" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-on-surface uppercase tracking-wide">
                {platformBar.operationsToolsTitle}
              </h3>
            </div>
            <p className="text-xs text-on-surface-variant pl-8">
              {platformBar.operationsToolsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {platformBar.operationsTools.map((tool) => (
              <div
                key={tool.name}
                className="p-3 rounded-xl border border-outline-variant/40 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center transition-all duration-200 group hover:border-primary"
              >
                <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
                <span className="text-[10px] text-on-surface-variant flex items-center gap-1 sm:mt-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-primary shrink-0" />
                  {tool.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
