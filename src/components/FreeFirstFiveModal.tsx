import { useState } from 'react';
import { X, Check, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FREE_FIRST_FIVE_TERMS } from '../data/mockData';

interface FreeFirstFiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export default function FreeFirstFiveModal({ isOpen, onClose, onSuccess }: FreeFirstFiveModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    listingUrl: '',
    units: '1'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert('Please fill out your name and email');
      return;
    }
    setSubmitted(true);
    onSuccess(`Congratulations ${form.name}! Your Free-First-5 Stays pass has been generated.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[95vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-on-surface-variant hover:text-on-surface bg-surface-container hover:bg-surface-container-high transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/30 text-primary text-xs font-bold mb-2 border border-primary/20">
                <span>Zero Risk • No Credit Card Required</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                Claim Your Free-First-5 Stays
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                Test our 24/7 guest communications and review defense across your next 5 reservations at $0 management fee.
              </p>
            </div>

            {/* Terms reminder */}
            <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary block">
                Offer Terms & Conditions:
              </span>
              {FREE_FIRST_FIVE_TERMS.terms.map((term, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-on-surface-variant">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{term}</span>
                </div>
              ))}
            </div>

            {/* Input fields */}
            <div className="space-y-3 pt-1">
              <div>
                <label className="text-xs text-on-surface font-medium block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Adams"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-on-surface font-medium block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rachel@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-xs text-on-surface font-medium block mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 234-5678"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-on-surface font-medium block mb-1">Airbnb / VRBO Link</label>
                  <input
                    type="url"
                    placeholder="https://airbnb.com/rooms/..."
                    value={form.listingUrl}
                    onChange={(e) => setForm({ ...form, listingUrl: e.target.value })}
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-xs text-on-surface font-medium block mb-1">Number of Properties</label>
                  <select
                    value={form.units}
                    onChange={(e) => setForm({ ...form, units: e.target.value })}
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
                  >
                    <option value="1">1 Unit</option>
                    <option value="2-4">2 to 4 Units</option>
                    <option value="5+">5+ Units</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-semibold bg-primary text-on-primary hover:bg-primary/90 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Claim Free 5 Stays (Instant Pass)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-on-surface-variant/70 text-center">
              We respect your privacy. Zero spam, zero sales pressure.
            </p>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-primary-container/30 text-primary flex items-center justify-center mx-auto border border-primary/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-display font-bold text-on-surface">
              Free-First-5 Stays Pass Activated!
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-md mx-auto">
              Welcome, <strong className="text-on-surface">{form.name}</strong>. Your co-hosting launch pass is active. Our onboarding team has sent an introduction packet to <span className="text-primary font-semibold">{form.email}</span>.
            </p>
            <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/40 text-xs text-on-surface-variant text-left space-y-1">
              <p>✓ First 5 reservations: $0 management fee</p>
              <p>✓ Sub-5m guest response SLA active upon connection</p>
              <p>✓ Complete listing ownership & direct payouts preserved</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-primary text-on-primary hover:bg-primary/90 transition-all"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
