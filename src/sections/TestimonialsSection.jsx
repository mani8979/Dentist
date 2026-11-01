import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA } from '../data/clinicData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef(0);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartXRef.current;
    if (diff < -40) {
      nextSlide();
    } else if (diff > 40) {
      prevSlide();
    }
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="testimonials-section section-padding" id="testimonials" aria-labelledby="testimonialsHeading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-heart" aria-hidden="true"></i>
            Patient Experiences
          </span>
          <h2 className="section-title" id="testimonialsHeading">What Our Patients Say</h2>
          <p className="section-subtitle">
            Reassuring care and positive dental experiences from our community.
          </p>
          <div style={{ marginTop: '0.8rem' }}>
            <span className="badge-demo">*Demonstration Testimonials: Clearly labeled sample feedback for portfolio review</span>
          </div>
        </div>

        <div className="testimonial-carousel-wrap">
          <div
            className="testimonial-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient Testimonials"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="testimonial-slide is-active" role="group" aria-roledescription="slide" aria-label={`${currentIndex + 1} of ${total}`}>
              <div className="testimonial-quote-icon" aria-hidden="true">
                <i className="fa-solid fa-quote-left"></i>
              </div>

              <blockquote className="testimonial-text">
                “{currentTestimonial.quote}”
              </blockquote>

              <div className="testimonial-author-row">
                <div className="testimonial-author-info">
                  <img
                    src={currentTestimonial.avatar}
                    alt={`${currentTestimonial.name}, patient at Lavith Dental Clinic`}
                    className="testimonial-avatar"
                    width="60"
                    height="60"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80';
                    }}
                  />
                  <div>
                    <h4 className="author-name">{currentTestimonial.name}</h4>
                    <span className="author-meta">{currentTestimonial.meta}</span>
                  </div>
                </div>

                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button
              className="carousel-arrow-btn"
              id="testimonialPrev"
              type="button"
              aria-label="Previous testimonial"
              onClick={prevSlide}
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>

            <div className="carousel-dots" role="tablist" aria-label="Testimonial Navigation">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  className={`carousel-dot ${idx === currentIndex ? 'is-active' : ''}`}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1} of ${total}`}
                  aria-current={idx === currentIndex ? 'true' : 'false'}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              className="carousel-arrow-btn"
              id="testimonialNext"
              type="button"
              aria-label="Next testimonial"
              onClick={nextSlide}
            >
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
