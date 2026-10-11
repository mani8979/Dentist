import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function ContactSection() {
  return (
    <section className="contact-section section-padding" id="contact" aria-labelledby="contactHeading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            Visit Our Clinic
          </span>
          <h2 className="section-title" id="contactHeading">Get in Touch with SmileCraft</h2>
          <p className="section-subtitle">
            Conveniently situated along the scenic Beach Road in Visakhapatnam, Andhra Pradesh.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Cards */}
          <div className="contact-cards-column">
            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="contact-card-info">
                <h4>Clinic Address</h4>
                <p>{CLINIC_CONFIG.address}</p>
                <a href={CLINIC_CONFIG.googleMapsUrl} className="contact-card-action" target="_blank" rel="noopener noreferrer">
                  <span>Open in Google Maps</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Phone & Emergency Card */}
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="contact-card-info">
                <h4>Telephone Inquiries</h4>
                <p>
                  Reception Desk:{' '}
                  <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="clinic-phone-link">
                    <strong>{CLINIC_CONFIG.phoneDisplay}</strong>
                  </a>{' '}
                  (Demo)
                </p>
                <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="contact-card-action clinic-phone-link">
                  <span>Call Reception Now</span>
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* WhatsApp & Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="contact-card-info">
                <h4>WhatsApp &amp; Email</h4>
                <p>
                  WhatsApp: <strong>+91 98765 43210</strong> (Demo)
                  <br />
                  Email:{' '}
                  <a href={`mailto:${CLINIC_CONFIG.email}`} className="clinic-email-link">
                    {CLINIC_CONFIG.email}
                  </a>
                </p>
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMessage)}`}
                  className="contact-card-action clinic-whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Chat on WhatsApp</span>
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="contact-card-info">
                <h4>Working Hours</h4>
                <p>
                  {CLINIC_CONFIG.hours.weekdays}
                  <br />
                  {CLINIC_CONFIG.hours.sunday}
                </p>
                <span className="badge-demo">Demo Schedule</span>
              </div>
            </div>
          </div>

          {/* Location Map Frame */}
          <div className="contact-map-frame">
            <div className="map-header-notice">
              <span>
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i> Sample Map Location: Beach Road, Visakhapatnam
              </span>
              <a href={CLINIC_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                Directions
              </a>
            </div>
            <div className="map-embed-container">
              <iframe
                title="SmileCraft Dental Studio Demo Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=83.3080%2C17.7080%2C83.3320%2C17.7220&amp;layer=mapnik&amp;marker=17.7145%2C83.3200"
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
