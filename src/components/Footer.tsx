import { Phone, Mail, ArrowUp } from 'lucide-react';
import { strings } from '../strings';

export default function Footer() {
  const { footer: f } = strings;

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
              aria-label={f.homeAriaLabel} 
              className="inline-flex items-center text-brand-logo font-(family-name:--font-serif-display) text-inverse-on-surface select-none [font-variation-settings:'opsz'_14,'wght'_700]"
            >
              {f.brandPrefix}<span className="text-primary">{f.brandSuffix}</span>
            </a>

            <p className="text-xs text-inverse-on-surface/70 max-w-sm leading-relaxed">
              {f.mission}
            </p>

            {/* Live Platform SLA Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/40 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-inverse-on-surface font-medium">{f.statusActive}</span>
              <span className="text-primary font-mono font-bold ml-1">{f.statusSla}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-inverse-on-surface">{f.colPlatformTitle}</p>
            <ul className="space-y-2">
              {f.platformLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Programs */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-inverse-on-surface">{f.colProgramsTitle}</p>
            <ul className="space-y-2">
              {f.programLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-inverse-on-surface">{f.colContactTitle}</p>
            <ul className="space-y-2">
              {f.phoneNumber && (
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <a href={(f as any).phoneTel || `tel:${f.phoneNumber.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">{f.phoneNumber}</a>
                </li>
              )}
              {f.operationalEmail && (
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href={(f as any).emailMailto || `mailto:${f.operationalEmail}`} className="hover:text-primary transition-colors">{f.operationalEmail}</a>
                </li>
              )}
              <li className="pt-2 text-[11px] text-inverse-on-surface/50">
                {f.availability}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-inverse-on-surface/60">
            © {new Date().getFullYear()} {f.copyright}
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="text-inverse-on-surface/60 hover:text-inverse-on-surface">{f.privacyPolicy}</a>
            <a href="#" className="text-inverse-on-surface/60 hover:text-inverse-on-surface">{f.termsOfService}</a>
            <a href="#" className="text-inverse-on-surface/60 hover:text-inverse-on-surface">{f.disputeGuidelines}</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface-container-highest/60 hover:bg-surface-container-highest text-inverse-on-surface transition-colors"
              aria-label={f.scrollToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
