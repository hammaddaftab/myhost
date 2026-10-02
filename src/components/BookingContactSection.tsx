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

interface BookingContactSectionProps {
  onSuccessToast: (msg: string) => void;
}

export default function BookingContactSection({ onSuccessToast }: BookingContactSectionProps) {
  const [activeMode, setActiveMode] = useState<'calendar' | 'form'>('calendar');

  // Calendar State
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-06');
  const [selectedTime, setSelectedTime] = useState<string>('02:00 PM EST');
  const [consultationFocus, setConsultationFocus] = useState<string>('Comprehensive Revenue & Listing Audit');
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

  const timeSlots = [
    '09:30 AM EST',
    '11:00 AM EST',
    '01:15 PM EST',
    '02:00 PM EST',
    '03:45 PM EST',
    '05:00 PM EST'
  ];

  const focusOptions = [
    'Comprehensive Revenue & Listing Audit',
    'Unfair Review Dispute & Removal Defense',
    '24/7 Guest Comms & Messaging Relief',
    'Full-Service Passive Co-Hosting & Cleaner Dispatch',
    'Multi-Unit Portfolio Pricing & Integration'
  ];

  const handleCalendarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calendarForm.name || !calendarForm.email) {
      alert('Please provide your name and email address.');
      return;
    }
    setBookingConfirmed(true);
    onSuccessToast(`Calendar consultation booked for ${selectedDate} at ${selectedTime}!`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) {
      alert('Please provide your name and email address.');
      return;
    }
    setContactSubmitted(true);
    onSuccessToast('Message sent! Our STR strategist will reply in under 5 minutes.');
  };

  return (
    <section id="contact-booking" className="py-20 bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header per exact specification */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            eyebrow="Book Consultation"
            title="Get Your Free Property Audit & Strategy Call"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            Pick a time on our live calendar for a 15-minute 1-on-1 audit with our lead STR co-host, or reach out directly across phone, email, or instant WhatsApp.
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
              <span>Interactive Calendar Scheduler</span>
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
              <span>Direct Inquiry Form</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Widget/Form + Direct Contact Multi-Channels */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left/Main Column: Calendar or Form (Rule 4: heavier border, same tonal level, no resting shadow) */}
          <div className="lg:col-span-8 bg-surface-container-low rounded-3xl p-6 sm:p-8 border-2 border-outline text-left">
            
            {activeMode === 'calendar' ? (
              <div>
                {!bookingConfirmed ? (
                  <form onSubmit={handleCalendarSubmit} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-outline-variant/40 pb-4">
                      <div>
                        <h3 className="text-lg font-serif-display font-bold text-on-surface flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5 text-on-surface-variant" />
                          <span>Select Audit Date & Time (15-Min Strategy Session)</span>
                        </h3>
                        <p className="text-xs text-on-surface-variant mt-1">
                          Hosted via Google Meet or Phone • Includes Free-First-5 Stays eligibility check
                        </p>
                      </div>
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded text-[11px] font-mono bg-primary-container text-on-primary-container font-semibold">
                        Live Calendar Sync
                      </span>
                    </div>

                    {/* Step 1: Pick Date */}
                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-on-surface-variant block mb-2">
                        Step 1: Choose Available Date
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
                        Step 2: Choose Time Slot
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
                        Step 3: Primary Consultation Topic
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
                        Step 4: Your Property & Contact Details
                      </label>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">Your Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Michael Harris"
                            value={calendarForm.name}
                            onChange={(e) => setCalendarForm({ ...calendarForm, name: e.target.value })}
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="michael@example.com"
                            value={calendarForm.email}
                            onChange={(e) => setCalendarForm({ ...calendarForm, email: e.target.value })}
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">Phone / WhatsApp</label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={calendarForm.phone}
                            onChange={(e) => setCalendarForm({ ...calendarForm, phone: e.target.value })}
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-outline"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-on-surface-variant block mb-1">Number of Listings</label>
                          <select
                            value={calendarForm.propertiesCount}
                            onChange={(e) => setCalendarForm({ ...calendarForm, propertiesCount: e.target.value })}
                            className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-outline"
                          >
                            <option value="1">1 Property</option>
                            <option value="2-4">2 to 4 Properties</option>
                            <option value="5-10">5 to 10 Properties</option>
                            <option value="10+">10+ Properties (Portfolio)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">
                          Airbnb / VRBO Listing URL (Optional, for pre-call audit)
                        </label>
                        <input
                          type="url"
                          placeholder="https://airbnb.com/rooms/..."
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
                      <span>Confirm 15-Minute Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-display font-bold text-on-surface">
                      Consultation Confirmed!
                    </h3>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      We've reserved your 15-minute listing audit for <strong className="text-on-surface">{selectedDate} at {selectedTime}</strong>. A calendar invite with Google Meet access has been sent to <span className="text-on-surface font-semibold">{calendarForm.email}</span>.
                    </p>
                    <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/40 max-w-md mx-auto text-xs text-on-surface-variant text-left space-y-1">
                      <p><strong className="text-on-surface">Host:</strong> {calendarForm.name}</p>
                      <p><strong className="text-on-surface">Focus:</strong> {consultationFocus}</p>
                      <p><strong className="text-on-surface">Status:</strong> Free-First-5 Stays Reserved</p>
                    </div>
                    <button
                      onClick={() => setBookingConfirmed(false)}
                      className="text-xs text-primary font-semibold hover:underline pt-2 inline-block"
                    >
                      Book another slot or edit appointment
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
                        <label className="text-xs text-on-surface-variant block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-on-surface-variant block mb-1">Number of Listings</label>
                        <select
                          value={contactForm.propertiesCount}
                          onChange={(e) => setContactForm({ ...contactForm, propertiesCount: e.target.value })}
                          className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
                        >
                          <option value="1">1 Property</option>
                          <option value="2-4">2 to 4 Properties</option>
                          <option value="5-10">5 to 10 Properties</option>
                          <option value="10+">10+ Properties</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-on-surface-variant block mb-1">Airbnb / VRBO Link</label>
                      <input
                        type="url"
                        placeholder="https://airbnb.com/rooms/..."
                        value={contactForm.listingUrl}
                        onChange={(e) => setContactForm({ ...contactForm, listingUrl: e.target.value })}
                        className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-on-surface-variant block mb-1">How can we help your rental business? *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your listing, occupancy goals, or review challenges..."
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
                      <span>Send Message (Under 5m SLA)</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-primary-container/30 text-primary flex items-center justify-center mx-auto border border-primary/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-display font-bold text-on-surface">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                      Thank you, <strong className="text-on-surface">{contactForm.name}</strong>. Our on-duty STR co-host lead is reviewing your inquiry and will reach out via email or phone within 5 minutes.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="text-xs text-primary font-semibold hover:underline pt-2"
                    >
                      Send another message
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
              href="tel:+18005554678"
              className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-outline transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant/70 block">Direct Telephone Hotline</span>
                  <span className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    +1 (800) 555-HOST
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                Speak directly with an STR co-hosting strategist. Monday–Sunday 8 AM – 9 PM EST.
              </p>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/14158904678?text=Hi%20MyHost,%20I'd%20like%20to%20learn%20more%20about%20your%20Free-First-5%20stays%20offer."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-primary/50 transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-primary font-semibold block">Instant WhatsApp Chat</span>
                  <span className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                Direct live chat desk. Fast assistance for urgent review dispute questions or quick audits.
              </p>
            </a>

            {/* Email Direct */}
            <a
              href="mailto:partners@myhost.co?subject=STR%20Co-Hosting%20Inquiry%20-%20Free-First-5"
              className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-outline transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant/70 block">Partnership Inquiries</span>
                  <span className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    partners@myhost.co
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                Send multi-unit portfolio spreadsheets or custom RFP requests directly to our team.
              </p>
            </a>

            {/* Security Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Zero Sales Pressure Promise</span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                We deliver a comprehensive listing audit report with real revenue comps. If we aren't a mutual fit, you keep the report at no charge.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
