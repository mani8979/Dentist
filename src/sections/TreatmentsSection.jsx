import React, { useState } from 'react';
import { TREATMENTS_DATA } from '../data/clinicData';

export default function TreatmentsSection({ onSelectTreatment }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCardId, setExpandedCardId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'preventive', label: 'Preventive & General' },
    { id: 'cosmetic', label: 'Cosmetic & Aligners' },
    { id: 'restorative', label: 'Restorative & Implants' }
  ];

  const getCategoryForTreatment = (id) => {
    if (['general-dentistry', 'teeth-cleaning', 'pediatric-dentistry'].includes(id)) return 'preventive';
    if (['cosmetic-dentistry', 'teeth-whitening', 'orthodontics-aligners'].includes(id)) return 'cosmetic';
    if (['dental-implants', 'root-canal'].includes(id)) return 'restorative';
    return 'all';
  };

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((t) => getCategoryForTreatment(t.id) === activeCategory);

  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const handleBookFromCard = (treatmentTitle, e) => {
    e.stopPropagation();
    const appointmentSection = document.getElementById('appointment');
    const treatmentSelect = document.getElementById('appointmentTreatment');
    if (treatmentSelect) {
      treatmentSelect.value = treatmentTitle;
      // Trigger native input change event for React state
      const event = new Event('change', { bubbles: true });
      treatmentSelect.dispatchEvent(event);
    }
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="services-section section-padding" id="treatments" aria-labelledby="treatmentsHeading">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">
            <span className="kicker-dot" aria-hidden="true"></span>
            <span>Comprehensive Dental Treatments</span>
          </div>
          <h2 className="section-title" id="treatmentsHeading">Care Designed Around Your Long-Term Oral Health</h2>
          <p className="section-subtitle">
            From routine checkups and gentle scaling to digital aligners and precision restorations, explore our patient-centered therapies.
          </p>

          {/* Category Tabs */}
          <div className="treatment-tabs-bar" role="tablist" aria-label="Treatment Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`treatment-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {filteredTreatments.map((treatment) => {
            const isExpanded = expandedCardId === treatment.id;
            return (
              <article
                key={treatment.id}
                className={`service-card ${isExpanded ? 'is-expanded' : ''}`}
              >
                <div className="service-card-top">
                  <div className="service-icon-box" aria-hidden="true">
                    <i className={treatment.iconClass}></i>
                  </div>
                  <span className="service-badge">{treatment.badge}</span>
                </div>

                <h3 className="service-title">{treatment.title}</h3>
                <p className="service-summary">{treatment.summary}</p>

                {/* Inline Expandable Details Panel */}
                {isExpanded && (
                  <div className="service-inline-details" aria-live="polite">
                    <p className="service-full-desc">{treatment.fullDescription}</p>
                    <div className="service-steps-wrap">
                      <span className="service-steps-title">Clinical Steps:</span>
                      <ul className="service-steps-list">
                        {treatment.steps.map((step, idx) => (
                          <li key={idx}>
                            <i className="fa-solid fa-check" aria-hidden="true"></i>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-candidate-box">
                      <strong>Suitable for:</strong> {treatment.suitableFor}
                    </div>
                  </div>
                )}

                <div className="service-card-footer">
                  <button
                    className="service-expand-btn"
                    type="button"
                    onClick={(e) => toggleExpand(treatment.id, e)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Show Less' : 'Clinical Steps & Details'}</span>
                    <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                  </button>

                  <button
                    className="service-book-action-btn"
                    type="button"
                    onClick={(e) => handleBookFromCard(treatment.title, e)}
                  >
                    <span>Book</span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
