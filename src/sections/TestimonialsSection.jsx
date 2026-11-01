import React from 'react';
import { TESTIMONIALS_DATA } from '../data/clinicData';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-padding bg-surface-muted" id="testimonials" aria-labelledby="testimonialsHeading">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">
            <span className="kicker-dot" aria-hidden="true"></span>
            <span>Patient Experiences</span>
          </div>
          <h2 className="section-title" id="testimonialsHeading">Comfortable Visits, Confident Smiles</h2>
          <p className="section-subtitle">
            Read how gentle dentistry and unhurried consultations help our patients feel at ease.
          </p>
        </div>

        {/* 3-Column Grid on Desktop / Smooth Snap Track on Mobile */}
        <div className="testimonials-track" role="region" aria-label="Patient feedback">
          {TESTIMONIALS_DATA.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-card-top">
                <div className="testimonial-stars" aria-label="5 stars rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
                  ))}
                </div>
                <div className="testimonial-quote-mark" aria-hidden="true">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>

              <blockquote className="testimonial-quote">
                “{item.quote}”
              </blockquote>

              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={`Patient ${item.name}`}
                  className="testimonial-avatar"
                  width="48"
                  height="48"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80';
                  }}
                />
                <div>
                  <h3 className="author-name">{item.name}</h3>
                  <span className="author-meta">{item.meta.replace(' (Demo)', '')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
