import React from 'react';

export default function WhyChooseUsSection() {
  const standards = [
    {
      num: '01',
      icon: 'fa-solid fa-tooth',
      title: 'Conservative Tooth-Preservation',
      desc: 'Our clinicians prioritize protecting your natural tooth structure, focusing on preventative therapies and minimally invasive restorations.'
    },
    {
      num: '02',
      icon: 'fa-solid fa-shield-virus',
      title: 'Hospital-Grade Infection Control',
      desc: 'Rigorous multi-stage Class-B autoclaving, sealed instrument packs, and continuous surface disinfection protocols for your complete safety.'
    },
    {
      num: '03',
      icon: 'fa-solid fa-microchip',
      title: 'Low-Dose Digital Radiography',
      desc: 'Advanced digital imaging delivers immediate diagnostic clarity with significantly reduced radiation exposure compared to conventional dental film.'
    },
    {
      num: '04',
      icon: 'fa-solid fa-comments',
      title: 'Transparent, Unrushed Consultations',
      desc: 'Honest clinical explanations with intraoral photo clarity, step-by-step procedure roadmaps, and clear cost estimates before any treatment begins.'
    }
  ];

  return (
    <section className="why-section section-padding bg-surface-muted" id="why-choose-us" aria-labelledby="whyHeading">
      <div className="container">
        <div className="why-grid">
          {/* Left Column: Visual with Clinical Verification Badge */}
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
              <div className="why-badge-card">
                <div className="why-badge-icon" aria-hidden="true">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <p className="why-badge-title">Strict Clinical Safety</p>
                  <span className="why-badge-sub">Autoclaved instruments &amp; digital protocols</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Distinct Standards */}
          <div className="why-content">
            <div className="section-kicker">
              <span className="kicker-dot" aria-hidden="true"></span>
              <span>Why Choose Lavith</span>
            </div>
            <h2 className="section-title text-left" id="whyHeading">
              High Standards of Clinical Care, Delivered With a Gentle Touch
            </h2>
            <p className="section-subtitle text-left">
              Every detail of our Visakhapatnam clinic is designed to provide transparent, unhurried, and comfortable dental care for patients of all ages.
            </p>

            <div className="why-standards-list">
              {standards.map((item, idx) => (
                <div key={idx} className="why-standard-card">
                  <div className="standard-num">{item.num}</div>
                  <div className="standard-details">
                    <h3 className="standard-title">{item.title}</h3>
                    <p className="standard-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
