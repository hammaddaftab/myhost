import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-inverse-surface border-t border-outline-variant/30 text-inverse-on-surface/70 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="/" 
              aria-label="MyHost Home" 
              className="inline-flex items-center text-brand-logo font-(family-name:--font-serif-display) text-inverse-on-surface select-none [font-variation-settings:'opsz'_14,'wght'_700]"
            >
              My<span className="text-primary">Host</span>
            </a>

            <p className="text-xs text-inverse-on-surface/70 max-w-sm leading-relaxed">
              Empowering Airbnb, VRBO, and vacation rental hosts with sub-5m guest response times, policy-backed review defense, and algorithmic dynamic pricing.
            </p>

            {/* Live Platform SLA Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/40 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-inverse-on-surface font-medium">All Operations Queues Active</span>
              <span className="text-primary font-mono font-bold ml-1">SLA: 3.4m</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-inverse-on-surface">Platform</p>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works (Process)</a></li>
              <li><a href="#why-myhost" className="hover:text-primary transition-colors">Why Choose MyHost</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing & Packages</a></li>
              <li><a href="#case-studies" className="hover:text-primary transition-colors">Case Studies & Proof</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About & Trust</a></li>
              <li><a href="#resources" className="hover:text-primary transition-colors">STR Knowledge Base</a></li>
            </ul>
          </div>

          {/* Special Programs */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-inverse-on-surface">Programs & Features</p>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-primary transition-colors">Free-First-5 Stays Offer</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Custom Portfolio Plan</a></li>
              <li><a href="#why-myhost" className="hover:text-primary transition-colors">Review Dispute Defense</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Cleaner Dispatch via Turno</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Dynamic Pricing Calibration</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Host FAQs</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-inverse-on-surface">Direct Connect</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>+1 (800) 555-HOST</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>partners@myhost.co</span>
              </li>
              <li className="pt-2 text-[11px] text-inverse-on-surface/50">
                Operating 24/7/365 across all North American and European time zones.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-inverse-on-surface/60">
            © {new Date().getFullYear()} MyHost Technologies Inc. All rights reserved. MyHost is an independent co-hosting and revenue management service and is not affiliated with Airbnb, Inc. or VRBO.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="text-inverse-on-surface/60 hover:text-inverse-on-surface">Privacy Policy</a>
            <a href="#" className="text-inverse-on-surface/60 hover:text-inverse-on-surface">Terms of Co-Hosting</a>
            <a href="#" className="text-inverse-on-surface/60 hover:text-inverse-on-surface">Review Dispute Guidelines</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface-container-highest/60 hover:bg-surface-container-highest text-inverse-on-surface transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
