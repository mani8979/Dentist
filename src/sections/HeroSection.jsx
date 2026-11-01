import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="heroHeading">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & Primary Actions */}
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-tooth" aria-hidden="true"></i>
              <span>Modern Dental Practice • Visakhapatnam</span>
            </div>

            <h1 className="hero-headline" id="heroHeading">
              Confident Smiles Start With <span className="highlight-blue">Gentle, Modern Care.</span>
            </h1>

            <p className="hero-lead">
              Experience personalized dental care, contemporary clinical technology, and an unhurried, gentle approach designed around your complete comfort.
            </p>

            <div className="hero-cta-group">
              <a href="#appointment" className="btn btn-primary btn-lg">
                <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
                <span>Book Appointment</span>
              </a>
              <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="btn btn-secondary btn-lg clinic-phone-link">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <span>Call: {CLINIC_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            {/* Verified Clinical Trust Highlights */}
            <div className="hero-trust-row" aria-label="Key Clinic Standards">
              <div className="trust-highlight-item">
                <div className="trust-icon-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="trust-highlight-text">Sterile Clinical Hygiene</span>
              </div>

              <div className="trust-highlight-item">
                <div className="trust-icon-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="trust-highlight-text">Conservative Care</span>
              </div>

              <div className="trust-highlight-item">
                <div className="trust-icon-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="trust-highlight-text">Beach Road, Visakhapatnam</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visual Presentation without floating card clutter */}
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/assets/images/hero-dental.jpg"
                alt="Friendly dentist in clinical attire discussing oral care with a patient at Lavith Dental Clinic"
                className="hero-img"
                width="800"
                height="680"
                loading="eager"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="hero-visual-card">
                <div className="hero-visual-card-icon" aria-hidden="true">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <div>
                  <p className="hero-visual-card-title">Unhurried &amp; Patient-First</p>
                  <span className="hero-visual-card-sub">Care focused on your lasting comfort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
