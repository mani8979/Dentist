import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import MobileStickyBar from './components/MobileStickyBar';
import BackToTop from './components/BackToTop';
import ServiceModal from './components/ServiceModal';
import AppointmentSuccessModal from './components/AppointmentSuccessModal';
import PrivacyModal from './components/PrivacyModal';

import HeroSection from './sections/HeroSection';
import TrustBarSection from './sections/TrustBarSection';
import AboutSection from './sections/AboutSection';
import TreatmentsSection from './sections/TreatmentsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import DentistsSection from './sections/DentistsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import AppointmentSection from './sections/AppointmentSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import CtaBannerSection from './sections/CtaBannerSection';
import Footer from './sections/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState('');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [appointmentSubmission, setAppointmentSubmission] = useState(null);

  const handleSelectTreatment = (treatment) => {
    setActiveServiceModal(treatment);
  };

  const handleBookTreatment = (treatmentTitle) => {
    setSelectedTreatmentForBooking(treatmentTitle);
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const nameInput = document.getElementById('patientName');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  const handleConsultDoctor = (doctorName) => {
    setSelectedTreatmentForBooking(`Consultation with ${doctorName}`);
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const nameInput = document.getElementById('patientName');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  const handleFormSubmit = (formData) => {
    setAppointmentSubmission(formData);
  };

  return (
    <div className="app-root" id="top">
      {/* Top Notice & Contact Bar */}
      <TopBar />

      {/* Main Header & Desktop Nav */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Mobile Drawer (Overlay Layout outside of Header) */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Landmark */}
      <main>
        <HeroSection />
        <TrustBarSection />
        <AboutSection />
        <TreatmentsSection onSelectTreatment={handleSelectTreatment} />
        <WhyChooseUsSection />
        <DentistsSection onConsultDoctor={handleConsultDoctor} />
        <TestimonialsSection />
        <AppointmentSection
          selectedTreatment={selectedTreatmentForBooking}
          onFormSubmit={handleFormSubmit}
        />
        <FaqSection />
        <ContactSection />
        <CtaBannerSection />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyModalOpen(true)} />

      {/* Modals & Dialogs */}
      <ServiceModal
        treatment={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBookTreatment={handleBookTreatment}
      />

      <AppointmentSuccessModal
        submissionData={appointmentSubmission}
        onClose={() => setAppointmentSubmission(null)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Sticky Mobile Bar & Back-to-Top Button */}
      <MobileStickyBar />
      <BackToTop />
    </div>
  );
}
