import React from 'react';
import { WHY_CHOOSE_FEATURES } from '../data/clinicData';

export default function WhyChooseUsSection() {
  return (
    <section className="why-section section-padding" id="why-choose-us" aria-labelledby="whyHeading">
      <div className="container">
        <div className="why-grid">
          {/* Left Column: Highlights */}
          <div className="why-content">
            <span className="section-tag">
              <i className="fa-solid fa-thumbs-up" aria-hidden="true"></i>
              Why Lavith Dental Clinic
            </span>
            <h2 className="section-title text-left" id="whyHeading">
              Thoughtful Dental Care Designed for Your Comfort
            </h2>
            <p className="section-subtitle text-left" style={{ marginBottom: '2rem' }}>
              We have shaped every aspect of our Visakhapatnam clinic around transparency, clinical hygiene, and a genuinely friendly experience.
            </p>

            <div className="why-features-list">
              {WHY_CHOOSE_FEATURES.map((feature, idx) => (
                <div key={idx} className="why-feature-card">
                  <div className="why-feature-icon" aria-hidden="true">
                    <i className={feature.icon}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clinic Interaction Photo */}
          <div className="why-visual">
            <div className="why-image-frame">
              <img
                src="/assets/images/why-choose-us.jpg"
                alt="Dentist discussing dental checkup results with a smiling patient at Lavith Dental Clinic"
                className="why-img"
                width="700"
                height="660"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80';
                }}
              />
            </div>
            <div className="why-badge-card">
              <div className="why-badge-icon" aria-hidden="true">
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <div>
                <p className="why-badge-title">Strict Sterilization Protocol</p>
                <span className="why-badge-sub">Class-B autoclaved clinical hygiene</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
