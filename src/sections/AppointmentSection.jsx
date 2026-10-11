import React, { useState, useEffect } from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function AppointmentSection({ selectedTreatment, onFormSubmit }) {
  // Today's date string YYYY-MM-DD
  const todayFormatted = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: todayFormatted,
    slot: 'Morning (9:00 AM – 12:00 PM)',
    notes: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [highlightField, setHighlightField] = useState(false);

  // Sync when selectedTreatment prop changes from ServiceModal or Doctor consult
  useEffect(() => {
    if (selectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: selectedTreatment }));
      setHighlightField(true);
      const timer = setTimeout(() => setHighlightField(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedTreatment]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (digitsOnly.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.treatment) {
      errs.treatment = 'Please select a preferred treatment.';
    }

    if (!formData.date) {
      errs.date = 'Please pick a preferred appointment date.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errs.date = 'Appointment date cannot be in the past.';
      }
    }

    if (!formData.slot) {
      errs.slot = 'Please select a time slot.';
    }

    if (!formData.consent) {
      errs.consent = 'Please acknowledge that this is a demo submission to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onFormSubmit({ ...formData });
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        treatment: '',
        date: todayFormatted,
        slot: 'Morning (9:00 AM – 12:00 PM)',
        notes: '',
        consent: false
      });
      setErrors({});
    }
  };

  return (
    <section className="appointment-section section-padding" id="appointment" aria-labelledby="appointmentHeading">
      <div className="container">
        <div className="appointment-grid">
          {/* Left Column: Clinic Contact Channels */}
          <div className="appointment-info-card">
            <span className="section-tag">
              <i className="fa-regular fa-calendar" aria-hidden="true"></i>
              Book Your Visit
            </span>
            <h2 className="booking-lead-title" id="appointmentHeading">
              We Look Forward to Welcoming You.
            </h2>
            <p className="booking-lead-desc">
              Request your dental consultation online or connect directly with our clinic front desk via phone or WhatsApp.
            </p>

            <div className="booking-contact-channels">
              {/* Phone Channel */}
              <div className="booking-channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="channel-details">
                  <h4>Call Our Clinic Desk</h4>
                  <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="clinic-phone-link">
                    {CLINIC_CONFIG.phoneDisplay}
                  </a>
                  <p className="channel-sub">Demo contact line • Mon to Sat (9 AM – 8 PM)</p>
                </div>
              </div>

              {/* WhatsApp Channel */}
              <div className="booking-channel-item">
                <div className="channel-icon-wrap whatsapp" aria-hidden="true">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="channel-details">
                  <h4>Instant WhatsApp Enquiry</h4>
                  <a
                    href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMessage)}`}
                    className="clinic-whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                  <p className="channel-sub">Quick scheduling support &amp; consultation queries (Demo)</p>
                </div>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="booking-hours-box">
              <h5>
                <i className="fa-regular fa-clock" aria-hidden="true"></i> Clinic Operating Timings
              </h5>
              <p>• <strong>Monday to Saturday:</strong> 9:00 AM – 8:00 PM</p>
              <p>• <strong>Sunday:</strong> 10:00 AM – 2:00 PM (Emergency &amp; Pre-booked consultations)</p>
              <p style={{ marginTop: '0.5rem', color: 'var(--gray-400)', fontSize: '0.8rem' }}>
                <em>Location: Beach Road, Pandurangapuram, Visakhapatnam</em>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Request Form */}
          <div className="appointment-form-card">
            <div className="form-header-note">
              <div>
                <h3>Request an Appointment</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                  Fill out the details below to schedule your consultation.
                </span>
              </div>
              <span className="badge-demo">Demo Form</span>
            </div>

            <form id="appointmentForm" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                {/* Field: Patient Name */}
                <div className="form-group">
                  <label htmlFor="patientName" className="form-label">
                    Full Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="e.g. Ramesh Varma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    autoComplete="name"
                  />
                  {errors.name && <span className="field-error" role="alert">{errors.name}</span>}
                </div>

                {/* Field: Phone Number */}
                <div className="form-group">
                  <label htmlFor="patientPhone" className="form-label">
                    Phone Number <span className="req-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="patientPhone"
                    name="patientPhone"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className="field-error" role="alert">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                {/* Field: Email Address (Optional) */}
                <div className="form-group">
                  <label htmlFor="patientEmail" className="form-label">
                    Email Address <span style={{ fontWeight: 400, color: 'var(--gray-500)' }}>(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="patientEmail"
                    name="patientEmail"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="e.g. ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="email"
                  />
                  {errors.email && <span className="field-error" role="alert">{errors.email}</span>}
                </div>

                {/* Field: Preferred Treatment */}
                <div className="form-group">
                  <label htmlFor="appointmentTreatment" className="form-label">
                    Preferred Treatment <span className="req-star">*</span>
                  </label>
                  <select
                    id="appointmentTreatment"
                    name="appointmentTreatment"
                    className={`form-control ${highlightField ? 'input-highlight' : ''} ${errors.treatment ? 'is-invalid' : ''}`}
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  >
                    <option value="" disabled>Select a Treatment</option>
                    <option value="General Dentistry">General Dentistry &amp; Checkup</option>
                    <option value="Teeth Cleaning & Prevention">Teeth Cleaning &amp; Prevention</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry &amp; Veneers</option>
                    <option value="Professional Teeth Whitening">Professional Teeth Whitening</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Orthodontics & Clear Aligners">Clear Aligners &amp; Orthodontics</option>
                    <option value="Gentle Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Pediatric Dentistry">Pediatric Dentistry (Kids)</option>
                    <option value="Other / General Consultation">General Consultation / Second Opinion</option>
                  </select>
                  {errors.treatment && <span className="field-error" role="alert">{errors.treatment}</span>}
                </div>
              </div>

              <div className="form-row">
                {/* Field: Preferred Date */}
                <div className="form-group">
                  <label htmlFor="appointmentDate" className="form-label">
                    Preferred Date <span className="req-star">*</span>
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    min={todayFormatted}
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                  {errors.date && <span className="field-error" role="alert">{errors.date}</span>}
                </div>

                {/* Field: Preferred Time Slot */}
                <div className="form-group">
                  <label htmlFor="appointmentTimeSlot" className="form-label">
                    Preferred Time Slot <span className="req-star">*</span>
                  </label>
                  <select
                    id="appointmentTimeSlot"
                    name="appointmentTimeSlot"
                    className={`form-control ${errors.slot ? 'is-invalid' : ''}`}
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  >
                    <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                  </select>
                  {errors.slot && <span className="field-error" role="alert">{errors.slot}</span>}
                </div>
              </div>

              {/* Field: Additional Message */}
              <div className="form-group">
                <label htmlFor="appointmentNotes" className="form-label">
                  Additional Notes or Symptoms <span style={{ fontWeight: 400, color: 'var(--gray-500)' }}>(Optional)</span>
                </label>
                <textarea
                  id="appointmentNotes"
                  name="appointmentNotes"
                  className="form-control"
                  placeholder="Tell us about any specific dental concern or request..."
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="demoConsent"
                  name="demoConsent"
                  className="checkbox-input"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                />
                <label htmlFor="demoConsent" className="checkbox-label">
                  I understand that this is a portfolio demonstration website. No patient data is saved, stored, or transmitted to an actual medical facility. <span className="req-star">*</span>
                </label>
              </div>
              {errors.consent && (
                <span className="field-error" role="alert" style={{ marginTop: '-1rem', marginBottom: '1rem', display: 'block' }}>
                  {errors.consent}
                </span>
              )}

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                <span>Submit Appointment Request</span>
              </button>

              <p className="form-disclaimer-note">
                <i className="fa-solid fa-lock" aria-hidden="true"></i> Demo Interface • No live backend data processing.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
