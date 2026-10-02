import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
  onClose: () => void;
}

export default function NotificationToast({ message, onClose }: NotificationToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-inverse-surface border border-outline-variant/40 text-inverse-on-surface shadow-2xl backdrop-blur-xl">
        <div className="p-1 rounded-full bg-primary/20 text-primary">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
