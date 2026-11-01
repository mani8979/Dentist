import React, { useState, useEffect } from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function AppointmentSection({ selectedTreatment, onFormSubmit }) {
  const todayFormatted = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: todayFormatted,
    slot: 'Morning (9:00 AM – 12:00 PM)',
    notes: '',
    consent: true
  });

  const [errors, setErrors] = useState({});
  const [highlightField, setHighlightField] = useState(false);

  // Sync when selectedTreatment prop changes from card click or Doctor consult
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

    if (!formData.treatment) {
      errs.treatment = 'Please select a required treatment.';
    }

    if (!formData.date) {
      errs.date = 'Please pick a preferred date.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errs.date = 'Date cannot be in the past.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onFormSubmit({ ...formData });
      setFormData({
        name: '',
        phone: '',
        email: '',
        treatment: '',
        date: todayFormatted,
        slot: 'Morning (9:00 AM – 12:00 PM)',
        notes: '',
        consent: true
      });
      setErrors({});
    }
  };

  return (
    <section className="appointment-section section-padding" id="appointment" aria-labelledby="appointmentHeading">
      <div className="container">
        <div className="appointment-grid">
          {/* Left Column: Clinic Contact & Hours Info */}
          <div className="appointment-info-column">
            <div className="section-kicker">
              <span className="kicker-dot" aria-hidden="true"></span>
              <span>Reserve Your Visit</span>
            </div>
            <h2 className="section-title text-left" id="appointmentHeading">
              Request Your Dental Consultation
            </h2>
            <p className="appointment-lead-desc">
              Schedule your appointment online or contact our Visakhapatnam reception desk directly via phone or WhatsApp.
            </p>

            <div className="appointment-channels-list">
              {/* Direct Call Channel */}
              <div className="appointment-channel-card">
                <div className="channel-icon" aria-hidden="true">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="channel-content">
                  <h4>Reception Desk Line</h4>
                  <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="clinic-phone-link channel-phone">
                    {CLINIC_CONFIG.phoneDisplay}
                  </a>
                  <p className="channel-note">Direct call • Mon–Sat: 9 AM – 8 PM</p>
                </div>
              </div>

              {/* WhatsApp Channel */}
              <div className="appointment-channel-card">
                <div className="channel-icon whatsapp-icon" aria-hidden="true">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="channel-content">
                  <h4>Quick WhatsApp Booking</h4>
                  <a
                    href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMessage)}`}
                    className="channel-whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Message on WhatsApp</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  </a>
                  <p className="channel-note">Fast response for consultations &amp; inquiries</p>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="appointment-hours-card">
                <div className="hours-card-header">
                  <i className="fa-regular fa-clock" aria-hidden="true"></i>
                  <span>Clinic Timings</span>
                </div>
                <div className="hours-row">
                  <span>Monday – Saturday:</span>
                  <strong>9:00 AM – 8:00 PM</strong>
                </div>
                <div className="hours-row">
                  <span>Sunday:</span>
                  <strong>10:00 AM – 2:00 PM</strong>
                </div>
                <div className="hours-location">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  <span>Beach Road, Pandurangapuram, Visakhapatnam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean 4-Field Appointment Request Form */}
          <div className="appointment-form-card">
            <div className="form-card-header">
              <h3>Appointment Request</h3>
              <p>Fill out the details below and our clinic team will confirm your slot.</p>
            </div>

            <form id="appointmentForm" noValidate onSubmit={handleSubmit}>
              {/* Field 1: Full Name */}
              <div className="form-group">
                <label htmlFor="patientName" className="form-label">
                  Patient Full Name <span className="req-star">*</span>
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

              {/* Field 2: Phone Number */}
              <div className="form-group">
                <label htmlFor="patientPhone" className="form-label">
                  Mobile Number <span className="req-star">*</span>
                </label>
                <input
                  type="tel"
                  id="patientPhone"
                  name="patientPhone"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="e.g. 7794075129"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  autoComplete="tel"
                />
                {errors.phone && <span className="field-error" role="alert">{errors.phone}</span>}
              </div>

              {/* Field 3: Required Treatment */}
              <div className="form-group">
                <label htmlFor="appointmentTreatment" className="form-label">
                  Required Treatment <span className="req-star">*</span>
                </label>
                <select
                  id="appointmentTreatment"
                  name="appointmentTreatment"
                  className={`form-control ${highlightField ? 'input-highlight' : ''} ${errors.treatment ? 'is-invalid' : ''}`}
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                >
                  <option value="" disabled>Select a treatment</option>
                  <option value="General Dentistry">General Dentistry &amp; Checkup</option>
                  <option value="Teeth Cleaning & Prevention">Teeth Cleaning &amp; Prevention</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry &amp; Veneers</option>
                  <option value="Professional Teeth Whitening">Professional Teeth Whitening</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Orthodontics & Clear Aligners">Clear Aligners &amp; Orthodontics</option>
                  <option value="Gentle Root Canal Treatment">Gentle Root Canal Treatment</option>
                  <option value="Pediatric Dentistry">Pediatric Dentistry (Kids)</option>
                  <option value="Other / General Consultation">General Consultation / Second Opinion</option>
                </select>
                {errors.treatment && <span className="field-error" role="alert">{errors.treatment}</span>}
              </div>

              {/* Field 4: Preferred Date & Time Slot */}
              <div className="form-row-2col">
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

                <div className="form-group">
                  <label htmlFor="appointmentTimeSlot" className="form-label">
                    Preferred Time Slot
                  </label>
                  <select
                    id="appointmentTimeSlot"
                    name="appointmentTimeSlot"
                    className="form-control"
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  >
                    <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit Action */}
              <button type="submit" className="btn btn-primary btn-lg form-submit-btn">
                <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
                <span>Confirm Appointment Request</span>
              </button>

              <div className="form-footer-assurance">
                <i className="fa-solid fa-lock" aria-hidden="true"></i>
                <span>Your information is handled with clinical privacy &amp; care.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
