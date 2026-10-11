import React from 'react';
import { TREATMENTS_DATA } from '../data/clinicData';

export default function TreatmentsSection({ onSelectTreatment }) {
  return (
    <section className="services-section section-padding bg-light" id="treatments" aria-labelledby="treatmentsHeading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-tooth" aria-hidden="true"></i>
            Dental Services
          </span>
          <h2 className="section-title" id="treatmentsHeading">Comprehensive Care For Every Smile</h2>
          <p className="section-subtitle">
            From routine checkups to advanced cosmetic and restorative therapies, we offer complete dental care under one roof.
          </p>
        </div>

        <div className="services-grid">
          {TREATMENTS_DATA.map((treatment) => (
            <article key={treatment.id} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-box" aria-hidden="true">
                  <i className={treatment.iconClass}></i>
                </div>
                <span className="service-badge">{treatment.badge}</span>
              </div>

              <h3 className="service-title">{treatment.title}</h3>
              <p className="service-summary">{treatment.summary}</p>

              <button
                className="service-learn-more-btn"
                type="button"
                onClick={() => onSelectTreatment(treatment)}
                aria-label={`Learn more about ${treatment.title}`}
              >
                <span>Learn More &amp; Steps</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
