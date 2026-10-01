import { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  Clock, 
  Zap,
  Lock
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFreeFiveModal: () => void;
}

export default function Hero({ onOpenBooking, onOpenFreeFiveModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'comms' | 'dispute' | 'pricing'>('comms');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-zinc-50 subtle-grid-light">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: Introductory Promo Card per exact specification */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                  LIMITED INTRODUCTORY OFFER
                </span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 100% Free Trial
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900">
                First 5 bookings managed 100% free with zero host fees
              </h3>
              <p className="text-xs text-zinc-600">
                Full-service co-hosting with 24/7 guest support and review defense.
              </p>
            </div>

            <button
              onClick={onOpenFreeFiveModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all shrink-0 shadow-sm active:scale-95"
            >
              <span>Claim Free Bookings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Category badge, Headline, Subheadline, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Category Pill Badge per exact specification */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-eyebrow uppercase text-emerald-700 tracking-wider">
                Co-Hosting & Listing Optimization Platform
              </span>
            </div>

            {/* Hero Headline per exact specification */}
            <h1 className="text-headline-hero text-balance text-zinc-900">
              <span className="inline-block">We Handle the Guests,</span>{' '}
              <span className="inline-block text-emerald-600">You Keep the Profits</span>
            </h1>

            {/* Hero Subheadline per exact specification */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
              We handle 24/7 guest communications in under 5 minutes, dispute unfair negative reviews, and optimize your listings with market data — while you retain 100% control of your property.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Free Property Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenFreeFiveModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-200 transition-all duration-200 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Claim Free First 5 Stays</span>
              </button>
            </div>

            {/* Checklist */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sub-5 Min SLA Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Lock-In Contracts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Direct Payouts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Host Dashboard Preview (Light theme with Emerald accents) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-white p-1 shadow-xl border border-zinc-200">
              
              {/* Card Header Bar */}
              <div className="p-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-zinc-500 ml-2 font-medium">MyHost Operations Live</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Active SLA: 3.4m</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="p-1.5 bg-zinc-100 border-b border-zinc-200 grid grid-cols-3 gap-1">
                <button
                  onClick={() => setActiveTab('comms')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'comms'
                      ? 'bg-white text-emerald-700 shadow-xs border border-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>24/7 Comms</span>
                </button>
                <button
                  onClick={() => setActiveTab('dispute')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'dispute'
                      ? 'bg-white text-emerald-700 shadow-xs border border-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Review Shield</span>
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'pricing'
                      ? 'bg-white text-emerald-700 shadow-xs border border-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Dynamic Pricing</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 space-y-4">
                {activeTab === 'comms' && (
                  <div className="space-y-3 text-left animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs text-zinc-500 pb-1">
                      <span className="font-semibold text-zinc-800">The Glasshouse • Aspen, CO</span>
                      <span className="text-emerald-700 font-mono flex items-center gap-1 font-semibold">
                        <Clock className="w-3 h-3" /> 4m Response Time
                      </span>
                    </div>

                    <div className="bg-zinc-100 rounded-2xl rounded-tl-sm p-3.5 border border-zinc-200 max-w-[90%]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-zinc-900">Sarah Jenkins (Guest)</span>
                        <span className="text-[10px] text-zinc-500">11:42 PM</span>
                      </div>
                      <p className="text-xs text-zinc-700 leading-relaxed">
                        "Hi! Our flight landed late. Is late keypad check-in available tonight, and is the hot tub ready?"
                      </p>
                    </div>

                    <div className="ml-auto bg-emerald-50 rounded-2xl rounded-tr-sm p-3.5 border border-emerald-200 max-w-[92%]">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-600" />
                          <span className="text-xs font-bold text-emerald-900">MyHost Lead Concierge</span>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-mono">11:46 PM (4m SLA)</span>
                      </div>
                      <p className="text-xs text-zinc-800 leading-relaxed">
                        "Welcome to Aspen, Sarah! Your keypad code is <strong className="text-emerald-700">#4982</strong>. The hot tub is heated to 102°F. Heated snowmelt lights are on. Enjoy your stay!"
                      </p>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[11px] text-zinc-500 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200">
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                        <Zap className="w-3.5 h-3.5 text-emerald-600" /> 100% In-App Response Rate
                      </span>
                      <span className="font-mono text-zinc-700 font-medium">Rating: 5.0★ Comms</span>
                    </div>
                  </div>
                )}

                {activeTab === 'dispute' && (
                  <div className="space-y-3 text-left animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs pb-1">
                      <span className="font-semibold text-zinc-800">Case #AIR-9841 Review Dispute</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        REMOVED IN 5 DAYS
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-left">
                      <div className="flex items-center justify-between text-xs text-rose-800 font-semibold mb-1">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                          <span>1-Star Retaliatory Review (Attempted Extortion)</span>
                        </span>
                        <span className="text-[10px] text-zinc-500">Day 1</span>
                      </div>
                      <p className="text-xs text-zinc-600 italic">
                        "Host wouldn't refund stay after our party was halted. Terrible experience..."
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-zinc-200 text-left space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>MyHost Policy Appeal Dispatched</span>
                      </div>
                      <p className="text-xs text-zinc-600">
                        Documented exterior camera proofs, decibel logs, and in-app refund threats violating Airbnb Content Policy.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-emerald-900">Review Completely Expunged</p>
                        <p className="text-[11px] text-zinc-600">Superhost Rating Restored: 4.98★</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700">5 Days</span>
                    </div>
                  </div>
                )}

                {activeTab === 'pricing' && (
                  <div className="space-y-3 text-left animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs pb-1">
                      <span className="font-semibold text-zinc-800">RevPAR Revenue Optimization</span>
                      <span className="text-emerald-700 font-mono font-bold">+26.4% Net Lift</span>
                    </div>

                    <div className="space-y-2 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-zinc-500">Airbnb Standard Smart Pricing:</span>
                          <span className="font-mono text-zinc-700">$210 / night</span>
                        </div>
                        <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-zinc-400 h-full w-[55%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-emerald-800 font-semibold">MyHost Dynamic Event Pricing:</span>
                          <span className="font-mono font-bold text-emerald-700">$345 / night</span>
                        </div>
                        <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-600 h-full w-[90%]" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-zinc-200">
                        <span className="text-zinc-500 text-[11px] block">Occupancy Rate</span>
                        <span className="text-emerald-700 font-mono font-bold text-sm">86.4% (+19%)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-zinc-200">
                        <span className="text-zinc-500 text-[11px] block">Average Daily Rate</span>
                        <span className="text-zinc-900 font-mono font-bold text-sm">$312 (+24%)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Bar */}
              <div className="p-3 bg-zinc-50 rounded-b-xl border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>You retain 100% bank payout credentials</span>
                </span>
                <span className="text-emerald-700 font-semibold">Official Co-Host Mode</span>
              </div>
            </div>
          </div>

        </div>

        {/* Key Metrics Card: Four columns with values in text-zinc-900 font-bold per exact specification */}
        <div className="mt-14 pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 font-serif-display">&lt; 5m</p>
            <p className="text-xs text-zinc-600 font-medium mt-1">Guest Response SLA</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 font-serif-display">4.9 / 5.0</p>
            <p className="text-xs text-zinc-600 font-medium mt-1">Average Guest Rating</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 font-serif-display">5 Days</p>
            <p className="text-xs text-zinc-600 font-medium mt-1">Fast Review Dispute Avg</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 font-serif-display">100%</p>
            <p className="text-xs text-zinc-600 font-medium mt-1">Account Control Retained</p>
          </div>
        </div>

      </div>
    </section>
  );
}
