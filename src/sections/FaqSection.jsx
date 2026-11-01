import React, { useState } from 'react';
import { FAQ_DATA } from '../data/clinicData';

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section section-padding bg-light" id="faq" aria-labelledby="faqHeading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-circle-question" aria-hidden="true"></i>
            Common Questions
          </span>
          <h2 className="section-title" id="faqHeading">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about dental visits, treatments, and appointments at Lavith Dental Clinic.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-question-btn"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon-chevron" aria-hidden="true">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                <div className="faq-answer-panel">
                  <div className="faq-answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
