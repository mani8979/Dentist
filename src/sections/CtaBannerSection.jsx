import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function CtaBannerSection() {
  return (
    <section className="cta-banner-section" aria-label="Book Dental Consultation">
      <div className="container">
        <div className="cta-banner-inner">
          <span className="section-tag cta-section-tag">
            <i className="fa-solid fa-sparkles" aria-hidden="true"></i> Start Your Journey
          </span>
          <h2 className="cta-banner-title">Ready to Experience Modern, Gentle Dental Care?</h2>
          <p className="cta-banner-desc">
            Take the first step toward a healthier, more confident smile. Schedule an in-person consultation with our dental team in Visakhapatnam today.
          </p>
          <div className="cta-banner-btns">
            <a href="#appointment" className="btn btn-cta-primary btn-lg">
              <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
              <span>Book Appointment</span>
            </a>
            <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="btn btn-cta-secondary btn-lg clinic-phone-link">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>Call: {CLINIC_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
