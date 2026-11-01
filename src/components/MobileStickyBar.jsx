import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function MobileStickyBar() {
  return (
    <aside className="mobile-sticky-bar" aria-label="Quick Appointment & Call Actions">
      <div className="mobile-sticky-inner">
        <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="mobile-action-btn mobile-action-call clinic-phone-link" aria-label={`Call Lavith Dental Clinic at ${CLINIC_CONFIG.phoneDisplay}`}>
          <i className="fa-solid fa-phone" aria-hidden="true"></i>
          <span>Call Now</span>
        </a>
        <a href="#appointment" className="mobile-action-btn mobile-action-book" aria-label="Book an Appointment">
          <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
          <span>Book Visit</span>
        </a>
      </div>
    </aside>
  );
}
