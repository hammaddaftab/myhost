import { CheckCircle2 } from 'lucide-react';

export default function PlatformBar() {
  const channels = [
    { name: "Airbnb", badge: "Superhost Co-Host" },
    { name: "VRBO", badge: "Premier Host Certified" },
    { name: "Booking.com", badge: "OTA Channel Sync" },
    { name: "PriceLabs", badge: "Algorithmic Pricing" },
    { name: "Guesty", badge: "PMS Integration" },
    { name: "Hostaway", badge: "Enterprise API" },
    { name: "Turno", badge: "Cleaner Dispatch" }
  ];

  return (
    <section className="py-8 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">
            Seamless Multi-Platform Synchronization & Technology Ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
          {channels.map((ch) => (
            <div
              key={ch.name}
              className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-center text-center hover:border-emerald-300 transition-all duration-200 group shadow-xs"
            >
              <span className="text-sm font-bold text-zinc-800 group-hover:text-emerald-700 transition-colors">
                {ch.name}
              </span>
              <span className="text-[10px] text-zinc-500 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                {ch.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
