import React, { useEffect } from 'react';

export default function ServiceModal({ treatment, onClose, onBookTreatment }) {
  useEffect(() => {
    if (treatment) {
      document.body.classList.add('modal-locked');
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.classList.remove('modal-locked');
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.classList.remove('modal-locked');
    }
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      className="modal-container is-active"
      id="serviceModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalServiceTitle"
    >
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog">
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-badge">{treatment.badge}</span>
            <h3 className="modal-title" id="modalServiceTitle">{treatment.title}</h3>
          </div>
          <button
            className="modal-close-btn"
            id="serviceModalClose"
            type="button"
            aria-label="Close treatment details"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{treatment.fullDescription}</p>

          <h4 className="modal-steps-heading">Treatment Protocol &amp; Steps:</h4>
          <ul className="modal-steps-list">
            {treatment.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>

          <div className="modal-suitability-box">
            <strong>Ideal Candidates:</strong>
            <p style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>{treatment.suitableFor}</p>
            <em style={{ fontSize: '0.78rem', opacity: 0.9 }}>*Note: {treatment.clinicalNote}</em>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" type="button" onClick={onClose}>
            Close
          </button>
          <button
            className="btn btn-primary btn-sm"
            id="modalServiceBookBtn"
            type="button"
            onClick={() => {
              onClose();
              onBookTreatment(treatment.title);
            }}
          >
            <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
            <span>Book This Treatment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
