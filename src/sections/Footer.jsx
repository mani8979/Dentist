import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function Footer({ onOpenPrivacy }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-brand-column">
            <a href="#top" className="brand-logo" aria-label="SmileCraft Dental Studio Home">
              <div className="logo-icon-wrap" aria-hidden="true" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <svg className="logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C10.5 4 7 7.5 7 13C7 18 9.5 22 11.5 28C12 29.5 13.8 29.5 14.5 27.5C15.2 24.5 15.8 22 16 22C16.2 22 16.8 24.5 17.5 27.5C18.2 29.5 20 29.5 20.5 28C22.5 22 25 18 25 13C25 7.5 21.5 4 16 4Z" fill="#38bdf8"/>
                  <path d="M23 7C23 9 25 9 25 9C25 9 23 9 23 11C23 9 21 9 21 9C21 9 23 9 23 7Z" fill="#ffffff"/>
                  <path d="M12 14.5C13.5 17 18.5 17 20 14.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text-group">
                <span className="logo-title">Smile<span>Craft</span></span>
                <span className="logo-tagline" style={{ color: 'var(--gray-400)' }}>Dental Studio</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Personalized dental care, modern technology, and a gentle touch in Visakhapatnam. Creating healthy, confident smiles in a calming environment.
            </p>
            <div className="footer-social-row" aria-label="Social Media Demo Links">
              <a href="#top" className="footer-social-link" title="Instagram Demo" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#top" className="footer-social-link" title="Facebook Demo" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#top" className="footer-social-link" title="LinkedIn Demo" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#top" className="footer-social-link" title="YouTube Demo" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#top">Home</a></li>
              <li><a href="#about">About Our Clinic</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#dentists">Meet Our Dentists</a></li>
              <li><a href="#testimonials">Patient Testimonials</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#contact">Contact &amp; Location</a></li>
            </ul>
          </div>

          {/* Col 3: Dental Treatments */}
          <div>
            <h4 className="footer-title">Our Treatments</h4>
            <ul className="footer-links-list">
              <li><a href="#treatments">General Dentistry</a></li>
              <li><a href="#treatments">Teeth Cleaning &amp; Prevention</a></li>
              <li><a href="#treatments">Cosmetic Dentistry</a></li>
              <li><a href="#treatments">Teeth Whitening</a></li>
              <li><a href="#treatments">Dental Implants</a></li>
              <li><a href="#treatments">Clear Aligners</a></li>
              <li><a href="#treatments">Root Canal Therapy</a></li>
              <li><a href="#treatments">Pediatric Dentistry</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="footer-title">Clinic Details</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>{CLINIC_CONFIG.address}</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="clinic-phone-link">
                  {CLINIC_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="footer-contact-item">
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMessage)}`}
                  className="clinic-whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 98765 43210 (WhatsApp)
                </a>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <a href={`mailto:${CLINIC_CONFIG.email}`} className="clinic-email-link">
                  {CLINIC_CONFIG.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <i className="fa-regular fa-clock" aria-hidden="true"></i>
                <span>
                  {CLINIC_CONFIG.hours.weekdays}
                  <br />
                  {CLINIC_CONFIG.hours.sunday}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} SmileCraft Dental Studio. All rights reserved.
            <span style={{ display: 'block', fontSize: '0.76rem', color: 'var(--gray-500)', marginTop: '0.2rem' }}>
              Portfolio Demonstration Website • Built with React &amp; Modern CSS.
            </span>
          </div>
          <div className="footer-bottom-links">
            <button
              onClick={onOpenPrivacy}
              type="button"
              style={{ color: 'var(--gray-400)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Demo Privacy Policy
            </button>
            <a href="#appointment">Book Consultation</a>
            <a href="#top">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
