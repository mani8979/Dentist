import React, { useState, useEffect } from 'react';

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#top', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#treatments', label: 'Treatments' },
    { href: '#why-choose-us', label: 'Why Choose Us' },
    { href: '#dentists', label: 'Our Dentists' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="mainHeader" aria-label="Main Navigation">
      <div className="container header-inner">
        {/* Clinic Logo */}
        <a href="#top" className="brand-logo" aria-label="Lavith Dental Clinic Home">
          <div className="logo-icon-wrap" aria-hidden="true">
            <svg className="logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4C10.5 4 7 7.5 7 13C7 18 9.5 22 11.5 28C12 29.5 13.8 29.5 14.5 27.5C15.2 24.5 15.8 22 16 22C16.2 22 16.8 24.5 17.5 27.5C18.2 29.5 20 29.5 20.5 28C22.5 22 25 18 25 13C25 7.5 21.5 4 16 4Z" fill="#0a6c74"/>
              <path d="M23 7C23 9 25 9 25 9C25 9 23 9 23 11C23 9 21 9 21 9C21 9 23 9 23 7Z" fill="#38bdf8"/>
              <path d="M12 14.5C13.5 17 18.5 17 20 14.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-title">Lavith</span>
            <span className="logo-tagline">Dental Clinic</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav" role="navigation" aria-label="Desktop Primary Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="header-actions">
          <a href="#appointment" className="btn btn-primary btn-sm btn-book-header">
            <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
            <span>Book Appointment</span>
          </a>

          {/* Accessible Hamburger Toggle */}
          <button
            className={`mobile-nav-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
            id="mobileNavToggle"
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobileDrawer"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
