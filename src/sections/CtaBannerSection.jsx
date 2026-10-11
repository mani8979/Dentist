import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function CtaBannerSection() {
  return (
    <section className="cta-banner-section" aria-label="Book Dental Consultation">
      <div className="container">
        <div className="cta-banner-inner">
          <span
            className="section-tag"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.25)'
            }}
          >
            <i className="fa-solid fa-sparkles" aria-hidden="true"></i> Start Your Journey
          </span>
          <h2 className="cta-banner-title">Ready to Give Your Smile the Care It Deserves?</h2>
          <p className="cta-banner-desc">
            Take the first step toward a healthier, more confident smile. Send us an appointment request today or connect with our reception team.
          </p>
          <div className="cta-banner-btns">
            <a
              href="#appointment"
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: 'var(--white)', color: 'var(--navy-900)' }}
            >
              <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
              <span>Request an Appointment</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMessage)}`}
              className="btn btn-whatsapp btn-lg clinic-whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
