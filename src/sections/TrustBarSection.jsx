import React from 'react';

export default function TrustBarSection() {
  const highlights = [
    { icon: 'fa-solid fa-tooth', label: 'Comprehensive Family Dentistry', sub: 'Preventive to restorative' },
    { icon: 'fa-solid fa-shield-virus', label: 'Class-B Autoclave Protocol', sub: 'Highest sterilization safety' },
    { icon: 'fa-solid fa-microchip', label: 'Low-Dose Digital Radiography', sub: 'Precise diagnostic clarity' },
    { icon: 'fa-regular fa-clock', label: 'Evening & Sunday Hours', sub: 'Mon–Sat to 8 PM, Sun to 2 PM' }
  ];

  return (
    <section className="trust-bar-section" aria-label="Clinical Highlights">
      <div className="container">
        <div className="trust-strip-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="trust-strip-item">
              <div className="trust-strip-icon" aria-hidden="true">
                <i className={item.icon}></i>
              </div>
              <div className="trust-strip-text">
                <span className="trust-strip-label">{item.label}</span>
                <span className="trust-strip-sub">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
