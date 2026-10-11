import React from 'react';
import { DENTISTS_DATA } from '../data/clinicData';

export default function DentistsSection({ onConsultDoctor }) {
  return (
    <section className="dentists-section section-padding bg-light" id="dentists" aria-labelledby="dentistsHeading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-user-doctor" aria-hidden="true"></i>
            Our Clinical Team
          </span>
          <h2 className="section-title" id="dentistsHeading">Meet Our Dental Specialists</h2>
          <p className="section-subtitle">
            A compassionate team dedicated to gentle, individualized dental care in Visakhapatnam.
          </p>
          <div style={{ marginTop: '0.8rem' }}>
            <span className="badge-demo">*Sample Profiles: Fictional team details for portfolio demonstration</span>
          </div>
        </div>

        <div className="dentists-grid">
          {DENTISTS_DATA.map((dentist) => (
            <article key={dentist.id} className="dentist-card">
              <div className="dentist-img-wrap">
                <img
                  src={dentist.image}
                  alt={`Portrait of ${dentist.name}`}
                  className="dentist-photo"
                  width="500"
                  height="520"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80';
                  }}
                />
                <span className="dentist-demo-tag">Sample Profile</span>
              </div>

              <div className="dentist-info">
                <h3 className="dentist-name">{dentist.name}</h3>
                <p className="dentist-title">{dentist.qualifications}</p>
                <div className="dentist-focus">
                  <i className="fa-solid fa-bullseye" aria-hidden="true"></i>
                  <span>Focus: {dentist.focus}</span>
                </div>
                <p className="dentist-bio">{dentist.bio}</p>

                <div className="dentist-footer">
                  <div className="dentist-social-links" aria-label="Professional Links">
                    <a href="#appointment" className="social-demo-btn" title="LinkedIn Demo" aria-label={`${dentist.name} LinkedIn`}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#appointment" className="social-demo-btn" title="Profile Demo" aria-label={`${dentist.name} Profile`}>
                      <i className="fa-solid fa-id-card"></i>
                    </a>
                  </div>

                  <a
                    href="#appointment"
                    className="dentist-book-link"
                    onClick={(e) => {
                      if (onConsultDoctor) {
                        onConsultDoctor(dentist.name);
                      }
                    }}
                  >
                    <span>Consult {dentist.name.split(' ')[1]}</span>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
