import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-outline-variant/40 shadow-elevation-1 py-2'
          : 'bg-surface/80 backdrop-blur-sm border-b border-outline-variant/30 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            aria-label="MyHost Home" 
            className="inline-flex items-center text-2xl sm:text-[1.75rem] font-(family-name:--font-serif-display) font-bold text-on-surface select-none tracking-tight [font-variation-settings:'opsz'_28,'wght'_700] hover:opacity-90 transition-opacity"
          >
            My<span className="text-primary">Host</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center gap-2 px-4 py-[10px] rounded-xl text-xs sm:text-sm font-semibold bg-primary text-on-primary hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-on-primary" />
            <span>Book Free Audit</span>
          </button>
        </div>
      </div>
    </header>
  );
}
