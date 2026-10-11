import React from 'react';
import { TRUST_BENEFITS } from '../data/clinicData';

export default function TrustBarSection() {
  return (
    <section className="trust-bar-section" aria-label="Core Patient Benefits">
      <div className="container">
        <div className="trust-cards-grid">
          {TRUST_BENEFITS.map((item) => (
            <div key={item.id} className="trust-card">
              <div className="trust-card-icon" aria-hidden="true">
                <i className={item.icon}></i>
              </div>
              <h3 className="trust-card-title">{item.title}</h3>
              <p className="trust-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
