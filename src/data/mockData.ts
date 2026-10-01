import { PricingPlan, Testimonial, CaseStudy, ProcessStep, Differentiator, FAQItem, BlogPost } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Audit & Consultation",
    subtitle: "Zero-obligation STR listing inspection",
    description: "We analyze your existing listing rank, historical ADR, occupancy leaks, guest response velocity, and negative review vulnerability against local top-tier comps.",
    deliverables: [
      "Comprehensive 18-point listing audit score",
      "Revenue gap & dynamic pricing benchmark",
      "Review dispute vulnerability breakdown",
      "Direct 1-on-1 strategy call with a co-host lead"
    ],
    duration: "Day 1 (Within 24 Hours)"
  },
  {
    step: 2,
    title: "Custom Strategy Plan",
    subtitle: "Tailored roadmap for max RevPAR & 5★ ratings",
    description: "We engineer your custom guest communication guidelines, optimize photo sequencing and SEO copy, and calibrate dynamic pricing rules tailored to your market.",
    deliverables: [
      "Custom guest communication playbook & FAQ rules",
      "High-converting listing title & description rewrite",
      "Dynamic pricing guardrails & minimum stay tuning",
      "Policy-aligned review defense safeguards"
    ],
    duration: "Days 2 - 3"
  },
  {
    step: 3,
    title: "Active Management",
    subtitle: "24/7/365 round-the-clock guest operations",
    description: "Our dedicated in-house team takes over guest inquiries in under 15 minutes, handles pre-stay screening, coordinates maintenance/turnover, and ensures 100% 5-star communication.",
    deliverables: [
      "Guaranteed <15-minute response SLA (24/7/365)",
      "Strict guest vetting & ID verification protocols",
      "Turnover dispatch & cleaner checklist monitoring",
      "Immediate on-site issue de-escalation"
    ],
    duration: "Ongoing Daily Operations"
  },
  {
    step: 4,
    title: "Performance Reporting",
    subtitle: "Radical transparency & continuous optimization",
    description: "Scheduled bi-weekly and monthly reporting cycles delivering granular insights on occupancy, ADR, RevPAR gains, guest sentiment trends, and dispute resolution stats.",
    deliverables: [
      "Interactive monthly revenue & occupancy dashboard",
      "Channel distribution & competitor ADR benchmarks",
      "Review sentiment & response velocity metrics",
      "Quarterly strategy adjustment consultation"
    ],
    duration: "Bi-Weekly & Monthly"
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "Rapid Guest Response Times",
    subtitle: "Under 15 minutes, 24/7/365",
    description: "OTA search algorithms strictly favor listings that respond instantly. Our in-house team responds within 4–12 minutes, turning tentative browsers into confirmed bookings while boosting your search ranking.",
    myHostStandard: "Guaranteed <15m average response SLA around the clock by dedicated hospitality concierges.",
    traditionalAlternative: "4 to 12 hour delayed responses from solo hosts or outsourced overseas call centers with robotic templates.",
    iconName: "Zap",
    badge: "< 15m Guaranteed SLA"
  },
  {
    title: "Proven Review Dispute & Removal",
    subtitle: "Protect your Superhost status from unfair ratings",
    description: "Unfair 1-star reviews from guest extortion or external disruptions shouldn't destroy your livelihood. We leverage deep knowledge of Airbnb & VRBO Terms of Service to successfully dispute and remove policy-violating reviews.",
    myHostStandard: "Formal evidence documentation & direct platform escalation. 94% success rate on policy-violating reviews.",
    traditionalAlternative: "Standard generic dispute tickets that get auto-rejected by platform tier-1 support bots.",
    iconName: "ShieldCheck",
    badge: "94% Removal Success Rate"
  },
  {
    title: "Data-Backed Listing Optimization",
    subtitle: "Algorithmic pricing & conversion-tested listings",
    description: "We don't guess nightly rates. We combine real-time local event demand, pacing curves, competitor occupancy, and professional photo ordering to maximize Revenue Per Available Room (RevPAR).",
    myHostStandard: "Dynamic pricing models updated multiple times daily with continuous photo/title A/B testing.",
    traditionalAlternative: "Flat static rates or basic platform 'Smart Pricing' that systematically underprices prime weekend dates.",
    iconName: "TrendingUp",
    badge: "+24% Average RevPAR Lift"
  },
  {
    title: "Dedicated In-House Support",
    subtitle: "Assigned account managers, never outsourced call centers",
    description: "Your guests and properties receive care from seasoned hospitality specialists trained on your specific house manual, local recommendations, and specific house quirks.",
    myHostStandard: "Dedicated US/UK-based account manager with a direct WhatsApp/Slack channel for the property owner.",
    traditionalAlternative: "Anonymous third-party call centers with zero local context reading generic scripts to frustrated guests.",
    iconName: "Users",
    badge: "100% In-House Team"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Comms",
    tagline: "Essential 24/7 guest communication for hands-on hosts",
    priceMonthly: 199,
    priceAnnual: 169,
    percentageRate: "Or 8% of gross booking revenue",
    description: "Designed for hosts who handle their own cleaning and local maintenance, but want total freedom from round-the-clock guest messaging and middle-of-the-night emergency inquiries.",
    features: [
      "24/7/365 Guest communication (SLA < 15 mins)",
      "Pre-booking guest screening & vetting",
      "Check-in / Check-out instructions delivery",
      "House rules enforcement & guest dispute de-escalation",
      "Emergency escalation dispatch to host",
      "Monthly guest sentiment summary"
    ],
    ctaText: "Start with Basic",
    popular: false,
    highlightOffer: false
  },
  {
    id: "full-service",
    name: "Full-Service Co-Hosting",
    tagline: "End-to-end passive management for maximum revenue",
    priceMonthly: 399,
    priceAnnual: 339,
    percentageRate: "Or 15% of gross booking revenue",
    description: "Our signature all-inclusive co-hosting suite. Complete listing optimization, algorithmic dynamic pricing, cleaner dispatch, and proactive review dispute defense.",
    features: [
      "Everything in Basic Comms, plus:",
      "Algorithmic Dynamic Pricing (Daily adjustments)",
      "Proactive Review Dispute & Removal representation",
      "Listing SEO: Title, description & photo optimization",
      "Cleaner & maintenance scheduling & checklist audit",
      "Multi-channel calendar sync (Airbnb, VRBO, Booking.com)",
      "Restocking supply management & coordination",
      "Dedicated account manager & shared Slack/WhatsApp",
      "Bi-weekly detailed RevPAR performance reporting"
    ],
    ctaText: "Choose Full-Service",
    popular: true,
    highlightOffer: true
  },
  {
    id: "portfolio",
    name: "Custom Portfolio",
    tagline: "Bespoke operations for operators with 5+ units",
    priceMonthly: 799,
    priceAnnual: 679,
    percentageRate: "Custom volume-based pricing",
    description: "Engineered specifically for boutique property managers, real estate funds, and multi-listing owners requiring customized operational workflows and enterprise SLAs.",
    features: [
      "Everything in Full-Service Co-Hosting, plus:",
      "Volume-tiered commission discounts",
      "Custom PMS & direct booking website integration",
      "Dedicated full-time hospitality concierge squad",
      "Custom branded guest digital guidebooks",
      "Direct API sync with Guesty, Hostaway, or Hospitable",
      "Owner financial reporting & tax statement prep",
      "Quarterly executive portfolio review with founder"
    ],
    ctaText: "Talk to Our Portfolio Team",
    popular: false,
    highlightOffer: false
  }
];

export const FREE_FIRST_FIVE_TERMS = {
  headline: "Special Launch Guarantee: Free-First-5 Stays",
  subheadline: "Experience the difference of sub-15m response times and 5-star reviews with ZERO risk.",
  badge: "100% Risk Free • No Lock-in Contract",
  terms: [
    "We manage your next 5 guest reservations completely free of management fees.",
    "Includes full 24/7 guest communication and proactive review defense.",
    "No credit card required to start; no long-term lock-in commitment.",
    "If you don't love the guest reviews and response speed, walk away at zero cost."
  ]
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    tag: "Review Defense & Rating Recovery",
    title: "Removed an Unfair Retaliatory 1-Star Review in 5 Days",
    platform: "Airbnb",
    duration: "5 Days to Removal",
    metricHighlight: "4.98★",
    metricLabel: "Superhost Status Restored",
    summary: "A guest attempted to extort a full refund after unauthorized parties were halted. After posting a fabricated 1-star review claiming cleanliness violations, MyHost intervened with platform policy documentation to overturn it completely.",
    challenge: "Guest breached maximum occupancy rules with an unregistered party. When asked to vacate, they retaliated with a 1-star cleanliness review that dropped the host's rating below the Superhost threshold.",
    solution: "MyHost compiled timestamped camera exterior logs, pre-check-in cleaning inspection photo proofs, and in-app message transcripts demonstrating an explicit refund demand in exchange for a positive review.",
    result: "Airbnb Trust & Safety confirmed violation of the Extortion & Retaliation Policy. The 1-star review was completely purged within 120 hours, restoring the property's 4.98 star rating."
  },
  {
    id: "case-2",
    tag: "Revenue & Listing Optimization",
    title: "Boosted Booking Rate by 38% and Monthly Revenue to $6,150",
    platform: "Multi-Platform",
    duration: "45 Days Post-Launch",
    metricHighlight: "+38.4%",
    metricLabel: "Net Revenue Increase",
    summary: "A stylish 2-bedroom mountain chalet in Colorado was underperforming due to static pricing and sub-optimal hero photography. MyHost implemented dynamic pricing and overhauled the listing metadata.",
    challenge: "The listing suffered from a 42% weekday vacancy rate and relied on Airbnb's basic Smart Pricing, which undervalued peak ski weekend dates by up to $180/night.",
    solution: "We re-sequenced the photo gallery to highlight the hot tub and sunset views in the first 5 slots, rewrote copy targeting remote workers, and synced dynamic pricing with regional ski slope snowfall alerts.",
    result: "Occupancy jumped from 58% to 84%, ADR increased by $65, and monthly booking revenue rose from $4,440 to $6,150 in the first full 30-day billing cycle."
  },
  {
    id: "case-3",
    tag: "Operational Scale",
    title: "Scaled from 1 to 4 Properties While Reclaiming 20+ Hours/Week",
    platform: "VRBO",
    duration: "6 Months",
    metricHighlight: "100%",
    metricLabel: "5-Star Comms Rating",
    summary: "A busy tech executive wanted to expand his rental portfolio across Miami and Orlando but was drowning in late-night guest messaging, lockbox hiccups, and cleaner check-ins.",
    challenge: "Host was spending 3 to 4 hours per day answering repetitive guest questions, managing turnover delays, and suffering fatigue that led to a 78% response rate penalty.",
    solution: "MyHost took over 100% of guest communications, established an automated digital guidebook, and set up automated cleaner dispatch with photo verification checklists.",
    result: "The host acquired 3 additional investment units with zero operational stress. All 4 properties maintain a 100% response rate with average response time under 8 minutes."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Elena Rostova",
    role: "Property Owner & Investor",
    location: "Scottsdale, AZ • 3 Properties",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "Handing over my guest comms to MyHost was the single highest-ROI decision I made this year. My response time dropped from 4 hours to 7 minutes, and our occupancy jumped from 62% to 88%. The Free-First-5 stays made trying them completely painless.",
    rating: 5,
    stats: [
      { label: "Occupancy", value: "88%", before: "62%", after: "88%" },
      { label: "Avg Response", value: "7 mins", before: "4.2 hrs", after: "7 mins" },
      { label: "Rating", value: "4.98★", before: "4.74★", after: "4.98★" }
    ]
  },
  {
    id: "test-2",
    author: "Marcus Vance",
    role: "Full-Time Real Estate Operator",
    location: "Austin, TX • 6 Units",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    quote: "When a problematic guest threatened a 1-star review unless I refunded their entire $1,800 stay, MyHost took control. They documented the extortion, liaised with Airbnb trust support, and had the bad review removed in 4 days. Unbelievable peace of mind.",
    rating: 5,
    stats: [
      { label: "Dispute Saved", value: "$1,800", before: "$0", after: "$1,800" },
      { label: "Superhost", value: "Maintained", before: "At Risk", after: "Safe" },
      { label: "Annual Lift", value: "+$22,400", before: "Baseline", after: "+$22.4k" }
    ]
  },
  {
    id: "test-3",
    author: "Sarah & David Chen",
    role: "Boutique STR Hosts",
    location: "Smoky Mountains, TN • 2 Cabins",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "We were skeptical about dynamic pricing until MyHost showed us our weekday gap analysis. They re-calibrated our rates for local concert weekends and seasonal leaf-peepers. Our RevPAR is up 31% year over year.",
    rating: 5,
    stats: [
      { label: "RevPAR Lift", value: "+31.2%", before: "$142", after: "$186" },
      { label: "Guest Rating", value: "5.0★", before: "4.82★", after: "5.0★" },
      { label: "Hours Saved", value: "18 hrs/wk", before: "20 hrs", after: "2 hrs" }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Do you work with multiple platforms?",
    answer: "Yes, absolutely. We support Airbnb, VRBO, Booking.com, and direct booking engines. We implement unified multi-calendar channel synchronization through premier software like Guesty and Hostaway to prevent double bookings while maximizing your exposure across all major OTA travel channels."
  },
  {
    id: "faq-2",
    category: "Reviews",
    question: "How does review removal work / what's your success rate?",
    answer: "Major STR platforms have strict content integrity policies prohibiting extortion, retaliatory reviews, reviews mentioning external events beyond host control (like power grid outages), or reviews containing hate speech. Our in-house compliance specialists review the conversation logs, extract timestamped evidence, and draft formal appeals directly to Trust & Safety. We maintain a 94% success rate on reviews that violate published OTA policies."
  },
  {
    id: "faq-3",
    category: "General",
    question: "Do I keep control of my listing?",
    answer: "100% yes. You remain the primary owner and legal account holder. We operate as authorized co-hosts via official platform co-hosting permissions. You maintain full access to your listing, bank account payouts, calendar, and historical data at all times. All revenue payouts continue depositing directly into your bank account."
  },
  {
    id: "faq-4",
    category: "Operations",
    question: "What happens after the free consultation?",
    answer: "Immediately following your 15-minute consultation, our team delivers your customized Listing Audit & Revenue Benchmark Report within 24 hours. There is no hard sell. If you decide to proceed, onboarding takes under 48 hours and your first 5 reservations are managed completely free under our Free-First-5 guarantee."
  },
  {
    id: "faq-5",
    category: "Pricing",
    question: "What are the exact terms of the Free-First-5 offer?",
    answer: "Under our Free-First-5 guarantee, we take over full 24/7 guest communications and listing monitoring for your next 5 confirmed reservations at zero co-hosting or management fee. You experience our sub-15m response velocity and 5-star communication standards firsthand. No credit card is charged upfront, and there is zero obligation to continue afterward."
  },
  {
    id: "faq-6",
    category: "Pricing",
    question: "Are there long-term contracts or cancellation penalties?",
    answer: "None. We believe our performance should earn your business every single month. All our plans operate on a flexible 30-day rolling agreement. If you ever wish to cancel or pause management, you can do so with a simple 14-day notice with zero exit penalties."
  },
  {
    id: "faq-7",
    category: "Operations",
    question: "How do you coordinate with my local cleaners and maintenance team?",
    answer: "We integrate directly with your existing turnover vendors via automated SMS/WhatsApp alerts, Turno, or shared dispatch calendars. When a guest checks out, your cleaner is notified instantly. We collect post-cleaning photo verifications before the next guest arrives and dispatch emergency maintenance when issues arise."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "The 2026 Airbnb Ground Rules & Review Dispute Playbook",
    category: "Platform Policy Updates",
    readTime: "6 min read",
    date: "Feb 2026",
    excerpt: "A step-by-step tactical guide to overturning unfair 1-star reviews using Airbnb's updated extortion and retaliatory review enforcement policies.",
    tags: ["Airbnb Policies", "Review Removal", "Superhost"],
    highlights: [
      "Documenting off-platform refund threats",
      "Using exterior security camera timestamps as proof",
      "Navigating Trust & Safety ticket escalation paths"
    ]
  },
  {
    id: "blog-2",
    title: "Dynamic Pricing 101: How to Price Weekday Gaps Without Sacrificing RevPAR",
    category: "Seasonal Pricing Strategies",
    readTime: "8 min read",
    date: "Jan 2026",
    excerpt: "Why default platform Smart Pricing leaves up to 28% of host revenue on the table, and how to calibrate minimum night stays during seasonal transition months.",
    tags: ["Dynamic Pricing", "RevPAR", "Revenue Management"],
    highlights: [
      "Why Airbnb Smart Pricing systematically depresses rates",
      "Pacing curves: When to drop rates and when to hold firm",
      "Optimizing 1-night and 2-night gap fillers"
    ]
  },
  {
    id: "blog-3",
    title: "The 15-Minute Rule: Why Guest Response Time Dictates OTA Search Placement",
    category: "STR Best Practice Guides",
    readTime: "5 min read",
    date: "Jan 2026",
    excerpt: "Data from 12,000+ bookings demonstrates that hosts who reply within 15 minutes convert inquiries into confirmed reservations at a 2.4x higher rate.",
    tags: ["Guest Communications", "Algorithm SEO", "Conversion Rate"],
    highlights: [
      "How response speed affects Airbnb search rank position",
      "Automated message flows vs real-time human replies",
      "De-escalating guest complaints before they reach the review screen"
    ]
  }
];

export const TRUST_BADGES = [
  { name: "Airbnb Superhost", label: "Official Co-Host Standards", metric: "100% Comms Score" },
  { name: "VRBO Premier Host", label: "Verified Partner", metric: "Fast Track Badge" },
  { name: "PriceLabs Certified", label: "Dynamic Pricing Specialist", metric: "Daily Calibration" },
  { name: "Guesty Marketplace", label: "Integrated Channel Software", metric: "Multi-OTA Sync" },
  { name: "Hospitable Pro", label: "Messaging Automation", metric: "Unified Inbox" },
  { name: "Turno Partner", label: "Cleaner Dispatch Protocol", metric: "100% Turnover Audit" }
];
