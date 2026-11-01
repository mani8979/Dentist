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
          <h2 className="section-title" id="contactHeading">Get in Touch with Lavith Dental Clinic</h2>
          <p className="section-subtitle">
            Conveniently situated along the scenic Beach Road in Visakhapatnam, Andhra Pradesh.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Cards */}
          <div className="contact-cards-column">
            {/* Phone Inquiries Card */}
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
                  </a>
                </p>
                <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="contact-card-action clinic-phone-link">
                  <span>Call Now</span>
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Clinic Address Card */}
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="contact-card-info">
                <h4>Clinic Address</h4>
                <p>{CLINIC_CONFIG.address}</p>
                <a href={CLINIC_CONFIG.googleMapsUrl} className="contact-card-action" target="_blank" rel="noopener noreferrer">
                  <span>Get Directions</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* WhatsApp Consultation Card */}
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="contact-card-info">
                <h4>WhatsApp Consultation</h4>
                <p>
                  Direct Chat:{' '}
                  <strong>+91 {CLINIC_CONFIG.phoneDisplay}</strong>
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

            {/* Operating Hours Card */}
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="contact-card-info">
                <h4>Clinic Hours</h4>
                <p>
                  {CLINIC_CONFIG.hours.weekdays}
                  <br />
                  {CLINIC_CONFIG.hours.sunday}
                </p>
                <span className="contact-hours-badge">
                  <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Appointments Available
                </span>
              </div>
            </div>
          </div>

          {/* Location Map Preview (Prevents Mobile Scroll-Trap) */}
          <div className="contact-map-frame">
            <div className="contact-map-preview-card">
              <div className="map-preview-header">
                <div className="map-preview-badge">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  <span>Visakhapatnam, Andhra Pradesh</span>
                </div>
                <span className="map-preview-landmark">Beach Road Coastal Studio</span>
              </div>

              <div className="map-preview-canvas">
                <div className="map-coastal-illustration" aria-hidden="true">
                  <div className="map-grid-lines"></div>
                  <div className="map-coast-wave"></div>
                  <div className="map-pin-pulse">
                    <div className="map-pin-circle">
                      <i className="fa-solid fa-tooth"></i>
                    </div>
                    <div className="map-pin-ripple"></div>
                  </div>
                  <div className="map-pin-label">
                    <strong>Lavith Dental Clinic</strong>
                    <span>Sea Breeze Heights, Suite 204</span>
                  </div>
                </div>
              </div>

              <div className="map-preview-footer">
                <div className="map-preview-meta">
                  <div className="meta-item">
                    <i className="fa-solid fa-car" aria-hidden="true"></i>
                    <span>Patient parking space</span>
                  </div>
                  <div className="meta-item">
                    <i className="fa-solid fa-elevator" aria-hidden="true"></i>
                    <span>Elevator access available</span>
                  </div>
                </div>

                <a
                  href={CLINIC_CONFIG.googleMapsUrl}
                  className="btn btn-primary btn-block-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-diamond-turn-right" aria-hidden="true"></i>
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
