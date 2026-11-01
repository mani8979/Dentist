import React, { useEffect, useRef } from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function MobileDrawer({ isOpen, onClose }) {
  const closeBtnRef = useRef(null);

  // Manage body scroll lock and keyboard events
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-locked');
      // Focus close button for accessibility
      setTimeout(() => {
        if (closeBtnRef.current) closeBtnRef.current.focus();
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      const handleResize = () => {
        if (window.innerWidth > 1024) {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);

      return () => {
        document.body.classList.remove('nav-locked');
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('resize', handleResize);
      };
    } else {
      document.body.classList.remove('nav-locked');
    }
  }, [isOpen, onClose]);

  const navLinks = [
    { href: '#top', label: 'Home', icon: 'fa-solid fa-house' },
    { href: '#about', label: 'About', icon: 'fa-regular fa-hospital' },
    { href: '#treatments', label: 'Treatments', icon: 'fa-solid fa-tooth' },
    { href: '#why-choose-us', label: 'Why Choose Us', icon: 'fa-solid fa-thumbs-up' },
    { href: '#dentists', label: 'Our Dentists', icon: 'fa-solid fa-user-doctor' },
    { href: '#testimonials', label: 'Testimonials', icon: 'fa-solid fa-heart' },
    { href: '#faq', label: 'FAQ', icon: 'fa-solid fa-circle-question' },
    { href: '#contact', label: 'Contact', icon: 'fa-solid fa-location-dot' }
  ];

  return (
    <div className={`mobile-drawer-portal ${isOpen ? 'is-active' : ''}`}>
      {/* Backdrop Overlay */}
      <div
        className={`nav-backdrop ${isOpen ? 'is-visible' : ''}`}
        id="navBackdrop"
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`mobile-menu-drawer ${isOpen ? 'is-open' : ''}`}
        id="mobileDrawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header with Brand & Close Button */}
        <div className="nav-drawer-header">
          <div className="nav-drawer-brand">
            <div className="logo-icon-wrap" aria-hidden="true">
              <svg className="logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4C10.5 4 7 7.5 7 13C7 18 9.5 22 11.5 28C12 29.5 13.8 29.5 14.5 27.5C15.2 24.5 15.8 22 16 22C16.2 22 16.8 24.5 17.5 27.5C18.2 29.5 20 29.5 20.5 28C22.5 22 25 18 25 13C25 7.5 21.5 4 16 4Z" fill="#0a6c74"/>
                <path d="M23 7C23 9 25 9 25 9C25 9 23 9 23 11C23 9 21 9 21 9C21 9 23 9 23 7Z" fill="#38bdf8"/>
                <path d="M12 14.5C13.5 17 18.5 17 20 14.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="logo-text-group">
              <span className="nav-drawer-title">Lavith</span>
              <span className="logo-tagline">Dental Clinic</span>
            </div>
          </div>

          <button
            ref={closeBtnRef}
            className="nav-drawer-close"
            id="mobileNavClose"
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="nav-drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={onClose}
            >
              <i className={link.icon} aria-hidden="true"></i>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Drawer Footer CTA */}
        <div className="nav-drawer-footer">
          <a
            href="#appointment"
            className="btn btn-primary btn-sm drawer-book-btn"
            onClick={onClose}
          >
            <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
            <span>Book Appointment</span>
          </a>

          <div className="drawer-contact-mini">
            <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="clinic-phone-link">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>Call: {CLINIC_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMessage)}`}
              className="clinic-whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
