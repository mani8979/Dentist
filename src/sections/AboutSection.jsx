import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-section section-padding bg-surface-muted" id="about" aria-labelledby="aboutHeading">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src="/assets/images/about-clinic.jpg"
                alt="Modern, pristine clinical treatment room and ergonomic dental chair at Lavith Dental Clinic"
                className="about-img"
                width="700"
                height="620"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80';
                }}
              />
              <div className="about-experience-card">
                <div className="about-exp-icon-wrap" aria-hidden="true">
                  <i className="fa-solid fa-tooth"></i>
                </div>
                <div>
                  <p className="about-exp-title">Patient-First Clinic</p>
                  <span className="about-exp-sub">Beach Road, Pandurangapuram</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content">
            <div className="section-kicker">
              <span className="kicker-dot" aria-hidden="true"></span>
              <span>About Lavith Dental Clinic</span>
            </div>
            <h2 className="section-title text-left" id="aboutHeading">
              Dental Care Centered on Your Comfort &amp; Long-Term Health.
            </h2>
            <p className="about-lead">
              At Lavith Dental Clinic, we believe visiting the dentist should be an empowering, reassuring, and completely painless experience.
            </p>
            <p className="about-text">
              Our Visakhapatnam clinic was founded on the philosophy of conservative dentistry and patient education. We reject hurried appointments; instead, our clinicians take the time to evaluate your unique oral anatomy, explain findings clearly with digital imaging, and design treatment roadmaps focused on preserving your natural teeth.
            </p>

            {/* 3 Pillar Points */}
            <div className="about-pillars-list">
              <div className="about-pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div className="pillar-content">
                  <h4>Conservative Tooth Preservation</h4>
                  <p>Minimally invasive therapies that protect natural tooth structure and avoid unnecessary procedures.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <div className="pillar-content">
                  <h4>Transparent, Unhurried Guidance</h4>
                  <p>Clear explanations of your clinical options, step-by-step procedures, and expected timelines before starting.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  <i className="fa-solid fa-couch"></i>
                </div>
                <div className="pillar-content">
                  <h4>Anxiety-Free Clinical Atmosphere</h4>
                  <p>A tranquil, clean operatory setting with gentle anesthesia protocols designed for nervous patients.</p>
                </div>
              </div>
            </div>

            <div className="about-action-row">
              <a href="#dentists" className="btn btn-secondary">
                <span>Meet Our Clinicians</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#appointment" className="btn btn-outline">
                <span>Book a Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
