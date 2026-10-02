import { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  MessageCircle, 
  Send, 
  ArrowRight, 
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { strings } from '../strings';

interface BookingContactSectionProps {
  onSuccessToast: (msg: string) => void;
}

export default function BookingContactSection({ onSuccessToast }: BookingContactSectionProps) {
  const [activeMode, setActiveMode] = useState<'calendar' | 'form'>('calendar');
  const [copiedChannel, setCopiedChannel] = useState<'phone' | 'email' | null>(null);
  const { bookingContact: bc } = strings;

  // Calendar State
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-06');
  const [selectedTime, setSelectedTime] = useState<string>('02:00 PM EST');
  const [calendarForm, setCalendarForm] = useState({
    name: '',
    email: '',
    phone: '',
    listingUrl: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Direct Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    listingUrl: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const availableDates = [
    { dayName: 'Mon', dayNum: '05', fullDate: '2026-10-05', month: 'Oct' },
    { dayName: 'Tue', dayNum: '06', fullDate: '2026-10-06', month: 'Oct' },
    { dayName: 'Wed', dayNum: '07', fullDate: '2026-10-07', month: 'Oct' },
    { dayName: 'Thu', dayNum: '08', fullDate: '2026-10-08', month: 'Oct' },
    { dayName: 'Fri', dayNum: '09', fullDate: '2026-10-09', month: 'Oct' },
    { dayName: 'Sat', dayNum: '10', fullDate: '2026-10-10', month: 'Oct' },
  ];

  const timeSlots = bc.timeSlots;

  const handleCopyOrAction = async (
    type: 'phone' | 'email',
    val: string,
    fallbackUrl?: string | null
  ) => {
    if (val) {
      try {
        await navigator.clipboard.writeText(val);
        setCopiedChannel(type);
        setTimeout(() => setCopiedChannel(null), 2000);
        onSuccessToast(`Copied ${type === 'phone' ? 'phone number' : 'email'} to clipboard: ${val}`);
      } catch {
        // clipboard access restricted
      }
    }
    if (fallbackUrl) {
      window.location.href = fallbackUrl;
    }
  };

  const handleCalendarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calendarForm.name || !calendarForm.email) {
      alert(bc.alertMissing);
      return;
    }
    setBookingConfirmed(true);
    onSuccessToast(`Consultation booked for ${selectedDate} at ${selectedTime}!`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) {
      alert(bc.alertMissing);
      return;
    }
    setContactSubmitted(true);
    onSuccessToast('Message sent! Our team will get back to you shortly.');
  };

  return (
    <section id="contact-booking" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Minimal Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Interactable Thin Rectangular Cards (with ~30% top margin on desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left lg:mt-[30%]">
            <div>
              <span className="text-[11px] font-mono text-primary uppercase font-semibold tracking-wider block mb-1.5">
                {bc.directContactEyebrow}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif-display text-on-surface leading-snug">
                {bc.directContactTitle}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                {bc.directContactDescription}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant/70 font-semibold block mb-3">
                {bc.channelsLabel}
              </span>
              
              <div className="space-y-2.5">
                {/* WhatsApp Thin Rectangular Card */}
                <a
                  href={bc.channels.whatsAppLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSuccessToast('Opening WhatsApp chat...')}
                  className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/50 hover:border-primary/50 hover:bg-surface-container transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-on-surface">
                          {bc.channels.whatsAppTitle}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-700 font-medium">
                          {bc.channels.whatsAppBadge}
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant truncate font-mono mt-0.5">
                        {bc.channels.whatsAppDesc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant group-hover:text-primary transition-colors shrink-0 ml-2">
                    <span className="text-xs font-medium hidden sm:inline-block">
                      {bc.channels.whatsAppAction}
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>

                {/* Direct Phone Thin Rectangular Card */}
                <div
                  onClick={() => handleCopyOrAction('phone', bc.channels.phoneNumber || '', bc.channels.phoneTel)}
                  className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/50 hover:border-primary/50 hover:bg-surface-container transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container text-on-surface flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-on-surface">
                          {bc.channels.phoneTitle}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-medium">
                          {bc.channels.phoneBadge}
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant truncate font-mono mt-0.5">
                        {bc.channels.phoneNumber}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors shrink-0 ml-2">
                    {copiedChannel === 'phone' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-primary font-semibold">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Direct Email Thin Rectangular Card */}
                <div
                  onClick={() => handleCopyOrAction('email', bc.channels.operationalEmail || '', bc.channels.emailMailto)}
                  className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/50 hover:border-primary/50 hover:bg-surface-container transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container text-on-surface flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-on-surface">
                          {bc.channels.emailTitle}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-medium">
                          {bc.channels.emailBadge}
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant truncate font-mono mt-0.5">
                        {bc.channels.operationalEmail}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors shrink-0 ml-2">
                    {copiedChannel === 'email' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-primary font-semibold">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channel Context Note */}
            <div className="p-4 rounded-xl bg-surface-container/50 border border-outline-variant/40 text-xs text-on-surface-variant leading-relaxed">
              <p>
                <strong>Need immediate assistance?</strong> WhatsApp and direct phone channels connect directly with our operations team.
              </p>
            </div>
          </div>

          {/* Right Column: Main Booking Heading + The Actual Booking Form Container */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-eyebrow text-primary uppercase font-semibold tracking-wider block mb-2">
                {bc.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-on-surface leading-tight">
                {bc.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mt-2.5 leading-relaxed max-w-2xl">
                {bc.description}
              </p>
            </div>

            {/* The Actual Booking Form Container */}
            <div className="bg-surface-container-low rounded-3xl p-6 sm:p-8 border border-outline-variant/60 shadow-sm text-left">
              {/* Top Form Switcher Bar */}
              <div className="flex items-center pb-5 border-b border-outline-variant/40">
                {/* Minimal segmented toggle between Calendar and Inquiry */}
                <div className="inline-flex p-1 rounded-xl bg-surface-container border border-outline-variant/50">
                  <button
                    type="button"
                    onClick={() => setActiveMode('calendar')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeMode === 'calendar'
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>{bc.toggleCalendar}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMode('form')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeMode === 'form'
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{bc.toggleForm}</span>
                  </button>
                </div>
              </div>

            {/* Mode 1: Calendar Booking Form */}
            {activeMode === 'calendar' ? (
              <div className="pt-6">
                {!bookingConfirmed ? (
                  <form onSubmit={handleCalendarSubmit} className="space-y-5">
                    
                    {/* Date Picker */}
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant/80 font-semibold block mb-2">
                        {bc.dateLabel}
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {availableDates.map((item) => {
                          const isSelected = selectedDate === item.fullDate;
                          return (
                            <button
                              type="button"
                              key={item.fullDate}
                              onClick={() => setSelectedDate(item.fullDate)}
                              className={`p-2.5 rounded-xl border text-center transition-all ${
                                isSelected
                                  ? 'bg-primary text-on-primary font-bold border-primary shadow-sm'
                                  : 'bg-surface-container/60 border-outline-variant/40 text-on-surface hover:border-outline'
                              }`}
                            >
                              <span className="text-[10px] uppercase block opacity-80">{item.dayName}</span>
                              <span className="text-base font-mono font-bold block my-0.5">{item.dayNum}</span>
                              <span className="text-[10px] block opacity-80">{item.month}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slot Picker */}
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant/80 font-semibold block mb-2">
                        {bc.timeLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 px-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                                isSelected
                                  ? 'bg-primary text-on-primary font-bold border-primary shadow-sm'
                                  : 'bg-surface-container/60 border-outline-variant/40 text-on-surface hover:border-outline'
                              }`}
                            >
                              <Clock className="w-3.5 h-3.5" />
                              <span>{slot}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Host Contact Inputs */}
                    <div className="pt-2 border-t border-outline-variant/40 space-y-4">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant/80 font-semibold block">
                        {bc.detailsLabel}
                      </label>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">{bc.nameLabel}</label>
                          <input
                            type="text"
                            required
                            placeholder={bc.namePlaceholder}
                            value={calendarForm.name}
                            onChange={(e) => setCalendarForm({ ...calendarForm, name: e.target.value })}
                            className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">{bc.emailLabel}</label>
                          <input
                            type="email"
                            required
                            placeholder={bc.emailPlaceholder}
                            value={calendarForm.email}
                            onChange={(e) => setCalendarForm({ ...calendarForm, email: e.target.value })}
                            className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">{bc.phoneLabel}</label>
                          <input
                            type="tel"
                            placeholder={bc.phonePlaceholder}
                            value={calendarForm.phone}
                            onChange={(e) => setCalendarForm({ ...calendarForm, phone: e.target.value })}
                            className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">{bc.listingUrlLabel}</label>
                          <input
                            type="url"
                            placeholder={bc.listingUrlPlaceholder}
                            value={calendarForm.listingUrl}
                            onChange={(e) => setCalendarForm({ ...calendarForm, listingUrl: e.target.value })}
                            className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      <span>{bc.calendarSubmitButton}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                      {bc.calendarSuccessTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      {bc.calendarSuccessDesc}
                    </p>
                    <div className="p-4 rounded-2xl bg-surface-container/60 border border-outline-variant/40 max-w-md mx-auto text-xs text-on-surface-variant text-left space-y-1">
                      <p><strong className="text-on-surface">Host:</strong> {calendarForm.name}</p>
                      <p><strong className="text-on-surface">Time:</strong> {selectedDate} at {selectedTime}</p>
                      <p><strong className="text-on-surface">Platform:</strong> {bc.channels.calendarWidgetProvider}</p>
                    </div>
                    <button
                      onClick={() => setBookingConfirmed(false)}
                      className="text-xs text-primary font-semibold hover:underline pt-2 inline-block"
                    >
                      {bc.bookAnother}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Mode 2: Direct Contact / Inquiry Form */
              <div className="pt-6">
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">{bc.nameLabel}</label>
                        <input
                          type="text"
                          required
                          placeholder={bc.namePlaceholder}
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">{bc.emailLabel}</label>
                        <input
                          type="email"
                          required
                          placeholder={bc.emailPlaceholder}
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">{bc.phoneLabel}</label>
                        <input
                          type="tel"
                          placeholder={bc.phonePlaceholder}
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">{bc.listingUrlLabel}</label>
                        <input
                          type="url"
                          placeholder={bc.listingUrlPlaceholder}
                          value={contactForm.listingUrl}
                          onChange={(e) => setContactForm({ ...contactForm, listingUrl: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-on-surface-variant block mb-1">{bc.messageLabel}</label>
                      <textarea
                        rows={4}
                        required
                        placeholder={bc.messagePlaceholder}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/50 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>{bc.formSubmitButton}</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-on-surface">
                      {bc.formSuccessTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      {bc.formSuccessDescPrefix}<strong className="text-on-surface">{contactForm.name}</strong>{bc.formSuccessDescSuffix}
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="text-xs text-primary font-semibold hover:underline pt-2 inline-block"
                    >
                      {bc.sendAnother}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        </div>

      </div>
    </section>
  );
}
