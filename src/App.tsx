import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import PricingSection from './components/PricingSection';
import SocialProofSection from './components/SocialProofSection';
import AboutTrustSection from './components/AboutTrustSection';
import ResourcesSection from './components/ResourcesSection';
import FAQSection from './components/FAQSection';
import BookingContactSection from './components/BookingContactSection';
import Footer from './components/Footer';
import FreeFirstFiveModal from './components/FreeFirstFiveModal';
import NotificationToast from './components/NotificationToast';

export default function App() {
  const [isFreeFiveModalOpen, setIsFreeFiveModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [bookingMode, setBookingMode] = useState<'calendar' | 'form'>('calendar');

  const handleOpenBooking = (mode: 'calendar' | 'form' = 'calendar') => {
    setBookingMode(mode);
    const contactSection = document.getElementById('contact-booking');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFreeFiveModal = () => {
    setIsFreeFiveModalOpen(true);
  };

  const handleCloseFreeFiveModal = () => {
    setIsFreeFiveModalOpen(false);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary selection:text-on-primary font-sans">
      {/* Fixed Navbar with exact Brand Mark and Emerald CTA */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenFreeFiveModal={handleOpenFreeFiveModal}
      />

      <main className="flex-grow">
        {/* 1. Hero Section with Promo card, Category badge, Atomic clause spans, and Key Metrics card */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenFreeFiveModal={handleOpenFreeFiveModal}
        />

        {/* 2. Section 1: Process / How It Works (Simple 4-Step Process) */}
        <ProcessSection onOpenBooking={handleOpenBooking} />

        {/* 4. Section 2: Differentiators / Why Choose MyHost (4 Core Pillars) */}
        <DifferentiatorsSection
          onOpenBooking={handleOpenBooking}
          onOpenFreeFiveModal={handleOpenFreeFiveModal}
        />

        {/* 5. Section 3: Pricing & Packages (Tiered plans, Free-First-5 terms & ROI Calculator) */}
        <PricingSection
          onOpenBooking={handleOpenBooking}
          onOpenFreeFiveModal={handleOpenFreeFiveModal}
        />

        {/* 6. Section 4: Social Proof & Case Studies */}
        <SocialProofSection
          onOpenBooking={handleOpenBooking}
          onOpenFreeFiveModal={handleOpenFreeFiveModal}
        />

        {/* 7. Section 6: About & Trust (Founder story, credentials, integrations) */}
        <AboutTrustSection />

        {/* 8. Section 8: Blog / Resources (SEO Guides & Policy updates) */}
        <ResourcesSection />

        {/* 9. Section 5: FAQ Section (Target questions addressed) */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* 10. Section 7: Contact & Booking (Calendar scheduler + form + WhatsApp) */}
        <BookingContactSection 
          activeMode={bookingMode}
          onModeChange={setBookingMode}
          onSuccessToast={triggerToast} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Free-First-5 Modal */}
      <FreeFirstFiveModal
        isOpen={isFreeFiveModalOpen}
        onClose={handleCloseFreeFiveModal}
        onSuccess={triggerToast}
      />

      {/* Floating Notification Toast */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
