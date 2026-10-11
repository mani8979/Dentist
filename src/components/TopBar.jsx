import React from 'react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function TopBar() {
  return (
    <header className="top-bar" aria-label="Quick Contact and Clinic Hours">
      <div className="container">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <div className="top-bar-item item-hours">
              <i className="fa-regular fa-clock" aria-hidden="true"></i>
              <span>{CLINIC_CONFIG.hours.weekdays} | Sun: 10:00 AM – 2:00 PM</span>
            </div>
            <div className="top-bar-item item-location">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>Beach Road, Visakhapatnam, AP</span>
            </div>
          </div>

          <div className="top-bar-right">
            <div className="top-bar-item emergency-tag item-emergency">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span>Emergency Care Available</span>
            </div>
            <div className="top-bar-item item-phone">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="clinic-phone-link">
                {CLINIC_CONFIG.phoneDisplay}
              </a>
            </div>
            <span className="top-bar-demo-note" title="This is a frontend demonstration website">DEMO</span>
          </div>
        </div>
      </div>
    </header>
  );
}
