import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-section section-padding" id="about" aria-labelledby="aboutHeading">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src="/assets/images/about-clinic.jpg"
                alt="Modern, pristine clinical treatment room and ergonomic dental chair at SmileCraft Dental Studio"
                className="about-img"
                width="700"
                height="620"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80';
                }}
              />
            </div>
            <div className="about-experience-badge">
              <i className="fa-solid fa-award about-exp-icon" aria-hidden="true"></i>
              <div>
                <p className="about-exp-title">Patient-First Dental Studio</p>
                <span className="about-exp-sub">Visakhapatnam, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content">
            <span className="section-tag">
              <i className="fa-regular fa-hospital" aria-hidden="true"></i>
              About SmileCraft
            </span>
            <h2 className="section-title text-left" id="aboutHeading">
              Dental Care That Puts You First.
            </h2>
            <p className="about-lead">
              At SmileCraft Dental Studio, we believe visiting the dentist should be a reassuring, empowering, and comfortable experience.
            </p>
            <p className="about-text">
              Our clinic was established with a focus on comprehensive preventive oral health and conservative dentistry. We reject rushed appointments and one-size-fits-all treatments; instead, we take time to understand your lifestyle, answer questions, and design practical care roadmaps that preserve your natural teeth for a lifetime.
            </p>

            {/* 3 Benefit Points */}
            <div className="about-benefits-list">
              <div className="about-benefit-item">
                <div className="benefit-bullet-icon" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="benefit-content">
                  <h4>Prevention-First Philosophy</h4>
                  <p>Proactive care and routine hygiene coaching to protect healthy enamel and stop dental issues early.</p>
                </div>
              </div>

              <div className="about-benefit-item">
                <div className="benefit-bullet-icon" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="benefit-content">
                  <h4>Gentle &amp; Personalized Consultations</h4>
                  <p>Step-by-step treatment plans customized to your comfort, schedule, and individual dental goals.</p>
                </div>
              </div>

              <div className="about-benefit-item">
                <div className="benefit-bullet-icon" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="benefit-content">
                  <h4>Patient Education &amp; Visual Clarity</h4>
                  <p>We show you high-definition intraoral images so you are always fully informed and in charge of your decisions.</p>
                </div>
              </div>
            </div>

            <a href="#dentists" className="btn btn-secondary">
              <span>Meet Our Team</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
