import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="heroHeading">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-sparkles" aria-hidden="true"></i>
              <span>Patient-First Dental Practice in Visakhapatnam</span>
            </div>

            <h1 className="hero-headline" id="heroHeading">
              Confident Smiles <br />
              <span className="highlight-teal">Start Here.</span>
            </h1>

            <p className="hero-lead">
              Personalized dental care, modern technology, and a gentle touch to help you enjoy a healthier, brighter smile.
            </p>

            <div className="hero-cta-group">
              <a href="#appointment" className="btn btn-primary btn-lg">
                <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
                <span>Book Your Visit</span>
              </a>
              <a href="#treatments" className="btn btn-secondary btn-lg">
                <span>Explore Our Treatments</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="hero-trust-row">
              <div className="trust-highlight-item">
                <div className="trust-icon-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="trust-highlight-text">Personalized Dental Care</span>
              </div>

              <div className="trust-highlight-item">
                <div className="trust-icon-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="trust-highlight-text">Modern Treatment Approach</span>
              </div>

              <div className="trust-highlight-item">
                <div className="trust-icon-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="trust-highlight-text">Friendly, Experienced Team</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame with Floating Cards */}
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
            </div>

            {/* Floating Info Card 1 */}
            <div className="floating-card-care" aria-label="Care Highlight">
              <div className="floating-card-icon" aria-hidden="true">
                <i className="fa-solid fa-tooth"></i>
              </div>
              <div>
                <p className="floating-card-title">Care designed around your smile.</p>
                <span className="floating-card-subtitle">Transparent, unhurried consultations</span>
              </div>
            </div>

            {/* Floating Card 2: Patient Satisfaction Rating */}
            <div className="floating-card-rating" aria-label="Patient Satisfaction">
              <div className="stars-row" aria-hidden="true">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <span className="rating-score">4.9 / 5.0</span>{' '}
                <span className="rating-total">(Demo Rating)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
