import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  MessageCircle, 
  Send, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import { strings } from '../strings';

interface BookingContactSectionProps {
  onSuccessToast: (msg: string) => void;
}

export default function BookingContactSection({ onSuccessToast }: BookingContactSectionProps) {
  const [activeMode, setActiveMode] = useState<'calendar' | 'form'>('calendar');
  const { bookingContact: bc } = strings;

  // Calendar State
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-06');
  const [selectedTime, setSelectedTime] = useState<string>('02:00 PM EST');
  const [consultationFocus, setConsultationFocus] = useState<string>(bc.focusOptions[0]);
  const [calendarForm, setCalendarForm] = useState({
    name: '',
    email: '',
    phone: '',
    listingUrl: '',
    propertiesCount: '1'
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Direct Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    listingUrl: '',
    propertiesCount: '1',
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
  const focusOptions = bc.focusOptions;

  const handleCalendarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calendarForm.name || !calendarForm.email) {
      alert(bc.alertMissing);
      return;
    }
    setBookingConfirmed(true);
    onSuccessToast(`Calendar consultation booked for ${selectedDate} at ${selectedTime}!`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) {
      alert(bc.alertMissing);
      return;
    }
    setContactSubmitted(true);
    onSuccessToast('Message sent! Our STR strategist will reply in under 5 minutes.');
  };

  return (
    <section id="contact-booking" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            eyebrow={bc.eyebrow}
            title={bc.title}
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            {bc.description}
          </p>

          {/* Toggle between Calendar and Form */}
          <div className="pt-4 inline-flex p-1 rounded-2xl bg-surface-container border border-outline-variant/40">
            <button
              onClick={() => setActiveMode('calendar')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'calendar'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>{bc.toggleCalendar}</span>
            </button>
            <button
              onClick={() => setActiveMode('form')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'form'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>{bc.toggleForm}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Widget/Form + Direct Contact Multi-Channels */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left/Main Column: Calendar or Form */}
          <div className="lg:col-span-8 bg-surface-container-low rounded-3xl p-6 sm:p-8 border-2 border-outline text-left">
            
            {activeMode === 'calendar' ? (
              <div>
                {!bookingConfirmed ? (
                  <form onSubmit={handleCalendarSubmit} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-outline-variant/40 pb-4">
                      <div>
                        <h3 className="text-lg font-serif-display font-bold text-on-surface flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5 text-on-surface-variant" />
                          <span>{bc.calendarTitle}</span>
                        </h3>
                        <p className="text-xs text-on-surface-variant mt-1">
                          {bc.calendarSubtitle}
                        </p>
                      </div>
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded text-[11px] font-mono bg-primary-container text-on-primary-container font-semibold">
                        {bc.liveCalendarSync}
                      </span>
                    </div>

                    {/* Step 1: Pick Date */}
                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-on-surface-variant block mb-2">
                        {bc.step1Label}
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {availableDates.map((item) => {
                          const isSelected = selectedDate === item.fullDate;
                          return (
                            <button
                              type="button"
                              key={item.fullDate}
                              onClick={() => setSelectedDate(item.fullDate)}
                              className={`p-3 rounded-xl border text-center transition-all ${
                                isSelected
                                  ? 'bg-primary text-on-primary font-bold border-primary'
                                  : 'bg-surface-container border-outline-variant/40 text-on-surface hover:border-outline'
                              }`}
                            >
                              <span className="text-[10px] uppercase block">{item.dayName}</span>
                              <span className="text-lg font-mono font-bold block my-0.5">{item.dayNum}</span>
                              <span className="text-[10px] block opacity-80">{item.month}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Pick Time Slot */}
                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-on-surface-variant block mb-2">
                        {bc.step2Label}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2.5 px-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                                isSelected
                                  ? 'bg-primary text-on-primary font-bold border-primary'
                                  : 'bg-surface-container border-outline-variant/40 text-on-surface hover:border-outline'
                              }`}
                            >
                              <Clock className="w-3.5 h-3.5" />
                              <span>{slot}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Consultation Focus */}
                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-on-surface-variant block mb-2">
                        {bc.step3Label}
                      </label>
                      <select
                        value={consultationFocus}
                        onChange={(e) => setConsultationFocus(e.target.value)}
                        className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-outline"
                      >
                        {focusOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-surface-container text-on-surface">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Step 4: Host Details */}
                    <div className="pt-2 border-t border-outline-variant/40 space-y-4">
                      <label className="text-xs uppercase font-bold tracking-wider text-on-surface-variant block">
                        {bc.step4Label}
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
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
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
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
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
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">{bc.unitsLabel}</label>
                          <select
                            value={calendarForm.propertiesCount}
                            onChange={(e) => setCalendarForm({ ...calendarForm, propertiesCount: e.target.value })}
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-outline"
                          >
                            {bc.unitOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">
                          {bc.listingUrlLabel}
                        </label>
                        <input
                          type="url"
                          placeholder={bc.listingUrlPlaceholder}
                          value={calendarForm.listingUrl}
                          onChange={(e) => setCalendarForm({ ...calendarForm, listingUrl: e.target.value })}
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-sm font-semibold bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      <span>{bc.calendarSubmitButton}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-display font-bold text-on-surface">
                      {bc.calendarSuccessTitle}
                    </h3>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      {bc.calendarSuccessDesc}
                    </p>
                    <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/40 max-w-md mx-auto text-xs text-on-surface-variant text-left space-y-1">
                      <p><strong className="text-on-surface">Host:</strong> {calendarForm.name}</p>
                      <p><strong className="text-on-surface">Focus:</strong> {consultationFocus}</p>
                      <p><strong className="text-on-surface">Time:</strong> {selectedDate} at {selectedTime}</p>
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
              <div>
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="border-b border-outline-variant/40 pb-3">
                      <h3 className="text-lg font-serif-display font-bold text-on-surface flex items-center gap-2">
                        <Send className="w-5 h-5 text-primary" />
                        <span>Send a Message to Our STR Operations Desk</span>
                      </h3>
                      <p className="text-xs text-on-surface-variant mt-1">
                        Average response time under 5 minutes during operational hours.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">{bc.nameLabel}</label>
                        <input
                          type="text"
                          required
                          placeholder={bc.namePlaceholder}
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
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
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
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
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">{bc.unitsLabel}</label>
                        <select
                          value={contactForm.propertiesCount}
                          onChange={(e) => setContactForm({ ...contactForm, propertiesCount: e.target.value })}
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
                        >
                          {bc.unitOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-on-surface-variant block mb-1">{bc.listingUrlLabel}</label>
                      <input
                        type="url"
                        placeholder={bc.listingUrlPlaceholder}
                        value={contactForm.listingUrl}
                        onChange={(e) => setContactForm({ ...contactForm, listingUrl: e.target.value })}
                        className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-on-surface-variant block mb-1">{bc.messageLabel}</label>
                      <textarea
                        rows={4}
                        required
                        placeholder={bc.messagePlaceholder}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-semibold bg-primary text-on-primary hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{bc.formSubmitButton}</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-primary-container/30 text-primary flex items-center justify-center mx-auto border border-primary/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-display font-bold text-on-surface">
                      {bc.formSuccessTitle}
                    </h3>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                      {bc.formSuccessDescPrefix}<strong className="text-on-surface">{contactForm.name}</strong>{bc.formSuccessDescSuffix}
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="text-xs text-primary font-semibold hover:underline pt-2"
                    >
                      {bc.sendAnother}
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Column: Multi-Channel Outreach Cards */}
          <div className="lg:col-span-4 space-y-3.5 text-left">
            
            {/* Phone Card */}
            <a
              href={bc.channels.phoneTel || '#'}
              className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-outline transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant/70 block">{bc.channels.phoneTitle}</span>
                  <span className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    {bc.channels.phoneNumber}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                {bc.channels.phoneDesc}
              </p>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href={bc.channels.whatsAppLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-primary/50 transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-primary font-semibold block">{bc.channels.whatsAppTitle}</span>
                  <span className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    {bc.channels.whatsAppAction}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                {bc.channels.whatsAppDesc}
              </p>
            </a>

            {/* Email Direct */}
            <a
              href={bc.channels.emailMailto || '#'}
              className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-outline transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant/70 block">{bc.channels.emailTitle}</span>
                  <span className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    {bc.channels.operationalEmail}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                {bc.channels.emailDesc}
              </p>
            </a>

            {/* Security Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>{bc.channels.promiseTitle}</span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                {bc.channels.promiseDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
