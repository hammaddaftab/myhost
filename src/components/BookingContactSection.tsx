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
    <section id="contact-booking" className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header per exact specification */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            eyebrow="Book Consultation"
            title="Get Your Free Property Audit & Strategy Call"
            className="mx-auto items-center text-center"
          />
          <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
            Pick a time on our live calendar for a 15-minute 1-on-1 audit with our lead STR co-host, or reach out directly across phone, email, or instant WhatsApp.
          </p>

          {/* Toggle between Calendar and Form */}
          <div className="pt-4 inline-flex p-1 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <button
              onClick={() => setActiveMode('calendar')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'calendar'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Interactive Calendar Scheduler</span>
            </button>
            <button
              onClick={() => setActiveMode('form')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'form'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Direct Inquiry Form</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Widget/Form + Direct Contact Multi-Channels */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left/Main Column: Calendar or Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm text-left">
            
            {activeMode === 'calendar' ? (
              <div>
                {!bookingConfirmed ? (
                  <form onSubmit={handleCalendarSubmit} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                      <div>
                        <h3 className="text-lg font-serif-display font-bold text-zinc-900 flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5 text-emerald-600" />
                          <span>Select Audit Date & Time (15-Min Strategy Session)</span>
                        </h3>
                        <p className="text-xs text-zinc-500 mt-1">
                          Hosted via Google Meet or Phone • Includes Free-First-5 Stays eligibility check
                        </p>
                      </div>
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded text-[11px] font-mono bg-emerald-100 text-emerald-800 font-semibold">
                        Live Calendar Sync
                      </span>
                    </div>

                    {/* Step 1: Pick Date */}
                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-zinc-700 block mb-2">
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
                                  ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-xs'
                                  : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
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
                      <label className="text-xs uppercase font-bold tracking-wider text-zinc-700 block mb-2">
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
                                  ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-xs'
                                  : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
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
                      <label className="text-xs uppercase font-bold tracking-wider text-zinc-700 block mb-2">
                        Step 3: Primary Consultation Topic
                      </label>
                      <select
                        value={consultationFocus}
                        onChange={(e) => setConsultationFocus(e.target.value)}
                        className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-emerald-500"
                      >
                        {focusOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-zinc-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Step 4: Host Details */}
                    <div className="pt-2 border-t border-zinc-200 space-y-4">
                      <label className="text-xs uppercase font-bold tracking-wider text-zinc-700 block">
                        Step 4: Your Property & Contact Details
                      </label>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-zinc-500 block mb-1">Your Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Michael Harris"
                            value={calendarForm.name}
                            onChange={(e) => setCalendarForm({ ...calendarForm, name: e.target.value })}
                            className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-zinc-500 block mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="michael@example.com"
                            value={calendarForm.email}
                            onChange={(e) => setCalendarForm({ ...calendarForm, email: e.target.value })}
                            className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-zinc-500 block mb-1">Phone / WhatsApp</label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={calendarForm.phone}
                            onChange={(e) => setCalendarForm({ ...calendarForm, phone: e.target.value })}
                            className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-zinc-500 block mb-1">Number of Listings</label>
                          <select
                            value={calendarForm.propertiesCount}
                            onChange={(e) => setCalendarForm({ ...calendarForm, propertiesCount: e.target.value })}
                            className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-emerald-500"
                          >
                            <option value="1">1 Property</option>
                            <option value="2-4">2 to 4 Properties</option>
                            <option value="5-10">5 to 10 Properties</option>
                            <option value="10+">10+ Properties (Portfolio)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-zinc-500 block mb-1">
                          Airbnb / VRBO Listing URL (Optional, for pre-call audit)
                        </label>
                        <input
                          type="url"
                          placeholder="https://airbnb.com/rooms/..."
                          value={calendarForm.listingUrl}
                          onChange={(e) => setCalendarForm({ ...calendarForm, listingUrl: e.target.value })}
                          className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      <span>Confirm 15-Minute Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-display font-bold text-zinc-900">
                      Consultation Confirmed!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                      We've reserved your 15-minute listing audit for <strong className="text-emerald-700">{selectedDate} at {selectedTime}</strong>. A calendar invite with Google Meet access has been sent to <span className="text-zinc-900 font-semibold">{calendarForm.email}</span>.
                    </p>
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 max-w-md mx-auto text-xs text-zinc-700 text-left space-y-1">
                      <p><strong className="text-zinc-900">Host:</strong> {calendarForm.name}</p>
                      <p><strong className="text-zinc-900">Focus:</strong> {consultationFocus}</p>
                      <p><strong className="text-zinc-900">Status:</strong> Free-First-5 Stays Reserved</p>
                    </div>
                    <button
                      onClick={() => setBookingConfirmed(false)}
                      className="text-xs text-emerald-700 font-semibold hover:underline pt-2 inline-block"
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
                    <div className="border-b border-zinc-200 pb-3">
                      <h3 className="text-lg font-serif-display font-bold text-zinc-900 flex items-center gap-2">
                        <Send className="w-5 h-5 text-emerald-600" />
                        <span>Send a Message to Our STR Operations Desk</span>
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1">
                        Average response time under 5 minutes during operational hours.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-zinc-500 block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-zinc-500 block mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-zinc-500 block mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-zinc-500 block mb-1">Number of Listings</label>
                        <select
                          value={contactForm.propertiesCount}
                          onChange={(e) => setContactForm({ ...contactForm, propertiesCount: e.target.value })}
                          className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-emerald-500"
                        >
                          <option value="1">1 Property</option>
                          <option value="2-4">2 to 4 Properties</option>
                          <option value="5-10">5 to 10 Properties</option>
                          <option value="10+">10+ Properties</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-zinc-500 block mb-1">Airbnb / VRBO Link</label>
                      <input
                        type="url"
                        placeholder="https://airbnb.com/rooms/..."
                        value={contactForm.listingUrl}
                        onChange={(e) => setContactForm({ ...contactForm, listingUrl: e.target.value })}
                        className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-500 block mb-1">How can we help your rental business? *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your listing, occupancy goals, or review challenges..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message (Under 5m SLA)</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-display font-bold text-zinc-900">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto">
                      Thank you, <strong className="text-zinc-900">{contactForm.name}</strong>. Our on-duty STR co-host lead is reviewing your inquiry and will reach out via email or phone within 5 minutes.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="text-xs text-emerald-700 font-semibold hover:underline pt-2"
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
              className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-300 shadow-xs transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Direct Telephone Hotline</span>
                  <span className="text-base font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                    +1 (800) 555-HOST
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-500">
                Speak directly with an STR co-hosting strategist. Monday–Sunday 8 AM – 9 PM EST.
              </p>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/14158904678?text=Hi%20MyHost,%20I'd%20like%20to%20learn%20more%20about%20your%20Free-First-5%20stays%20offer."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 shadow-xs transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-800 font-semibold block">Instant WhatsApp Chat</span>
                  <span className="text-base font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-600">
                Direct live chat desk. Fast assistance for urgent review dispute questions or quick audits.
              </p>
            </a>

            {/* Email Direct */}
            <a
              href="mailto:partners@myhost.co?subject=STR%20Co-Hosting%20Inquiry%20-%20Free-First-5"
              className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 shadow-xs transition-all block group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Partnership Inquiries</span>
                  <span className="text-base font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                    partners@myhost.co
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-500">
                Send multi-unit portfolio spreadsheets or custom RFP requests directly to our team.
              </p>
            </a>

            {/* Security Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-zinc-100/70 border border-zinc-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Sales Pressure Promise</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                We deliver a comprehensive listing audit report with real revenue comps. If we aren't a mutual fit, you keep the report at no charge.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
