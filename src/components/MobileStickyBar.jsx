import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar" aria-label="Quick Actions">
      <div className="mobile-sticky-inner">
        <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="btn btn-secondary btn-sm clinic-phone-link">
          <i className="fa-solid fa-phone" aria-hidden="true"></i>
          <span>Call Clinic</span>
        </a>
        <a href="#appointment" className="btn btn-primary btn-sm">
          <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
          <span>Book Visit</span>
        </a>
      </div>
    </div>
  );
}
