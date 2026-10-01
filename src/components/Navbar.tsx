import { useState, useEffect } from 'react';
import { ShieldCheck, Calendar, Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function Navbar({ onOpenBooking, onOpenFreeFiveModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why MyHost', href: '#why-myhost' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About & Trust', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Resources', href: '#resources' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-zinc-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand mark set in Fraunces bold with optical sizing explicitly clamped to 14pt */}
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              aria-label="MyHost Home" 
              className="inline-flex items-center text-brand-logo font-(family-name:--font-serif-display) text-zinc-900 select-none [font-variation-settings:'opsz'_14,'wght'_700] hover:opacity-90 transition-opacity"
            >
              My<span className="text-emerald-600">Host</span>
            </a>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-zinc-400 font-semibold border-l border-zinc-200 pl-3">
              STR Co-Hosting
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Callouts */}
          <div className="hidden md:flex items-center gap-3">
            {/* Free First 5 Stays Badge */}
            <button
              onClick={onOpenFreeFiveModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free-First-5 Stays</span>
            </button>

            {/* Primary navigation action button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all duration-200 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenFreeFiveModal}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              Free 5
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-zinc-200">
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-2">Navigation</p>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-800 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Benefits in Mobile */}
            <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200 text-xs text-zinc-600 space-y-1">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Lock-In Contract Guarantee</span>
              </div>
              <p className="text-zinc-500">First 5 bookings managed free with sub-5m guest response.</p>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Property Audit</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeFiveModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Claim Free-First-5 Stays</span>
              </button>
              <a
                href="tel:+18005554678"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-zinc-500 hover:text-zinc-800"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Or speak with a strategist: (800) 555-HOST</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
