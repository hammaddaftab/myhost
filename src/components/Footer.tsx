import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 text-zinc-400 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="/" 
              aria-label="MyHost Home" 
              className="inline-flex items-center text-brand-logo font-(family-name:--font-serif-display) text-white select-none [font-variation-settings:'opsz'_14,'wght'_700]"
            >
              My<span className="text-emerald-500">Host</span>
            </a>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Empowering Airbnb, VRBO, and vacation rental hosts with sub-5m guest response times, policy-backed review defense, and algorithmic dynamic pricing.
            </p>

            {/* Live Platform SLA Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-200 font-medium">All Operations Queues Active</span>
              <span className="text-emerald-400 font-mono font-bold ml-1">SLA: 3.4m</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-white">Platform</p>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works (Process)</a></li>
              <li><a href="#why-myhost" className="hover:text-emerald-400 transition-colors">Why Choose MyHost</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing & Packages</a></li>
              <li><a href="#case-studies" className="hover:text-emerald-400 transition-colors">Case Studies & Proof</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About & Trust</a></li>
              <li><a href="#resources" className="hover:text-emerald-400 transition-colors">STR Knowledge Base</a></li>
            </ul>
          </div>

          {/* Special Programs */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-white">Programs & Features</p>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Free-First-5 Stays Offer</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Custom Portfolio Plan</a></li>
              <li><a href="#why-myhost" className="hover:text-emerald-400 transition-colors">Review Dispute Defense</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">Cleaner Dispatch via Turno</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Dynamic Pricing Calibration</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Host FAQs</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-white">Direct Connect</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+1 (800) 555-HOST</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>partners@myhost.co</span>
              </li>
              <li className="pt-2 text-[11px] text-zinc-500">
                Operating 24/7/365 across all North American and European time zones.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-500">
            © {new Date().getFullYear()} MyHost Technologies Inc. All rights reserved. MyHost is an independent co-hosting and revenue management service and is not affiliated with Airbnb, Inc. or VRBO.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="text-zinc-500 hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300">Terms of Co-Hosting</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300">Review Dispute Guidelines</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
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
