import React from 'react';
import { DENTISTS_DATA } from '../data/clinicData';

export default function DentistsSection({ onConsultDoctor }) {
  return (
    <section className="dentists-section section-padding" id="dentists" aria-labelledby="dentistsHeading">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">
            <span className="kicker-dot" aria-hidden="true"></span>
            <span>Our Clinical Team</span>
          </div>
          <h2 className="section-title" id="dentistsHeading">Meet Our Experienced Dental Clinicians</h2>
          <p className="section-subtitle">
            A compassionate team of specialists dedicated to gentle, personalized dental care in Visakhapatnam.
          </p>
        </div>

        <div className="dentists-grid">
          {DENTISTS_DATA.map((dentist) => (
            <article key={dentist.id} className="dentist-card">
              <div className="dentist-img-frame">
                <img
                  src={dentist.image}
                  alt={`Portrait of ${dentist.name}`}
                  className="dentist-photo"
                  width="500"
                  height="560"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80';
                  }}
                />
                <div className="dentist-specialty-overlay">
                  <span>{dentist.focus}</span>
                </div>
              </div>

              <div className="dentist-info">
                <h3 className="dentist-name">{dentist.name}</h3>
                <p className="dentist-qualifications">{dentist.qualifications}</p>
                <p className="dentist-bio">{dentist.bio}</p>

                <div className="dentist-card-action">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => onConsultDoctor(dentist.name)}
                    aria-label={`Consult ${dentist.name}`}
                  >
                    <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
                    <span>Consult {dentist.name.split(' ')[1] || dentist.name}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
