import React, { useEffect } from 'react';

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-container is-active"
      id="privacyModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacyModalTitle"
    >
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog">
        <div className="modal-header">
          <h3 className="modal-title" id="privacyModalTitle">Demo Privacy Policy</h3>
          <button
            className="modal-close-btn"
            id="privacyModalClose"
            type="button"
            aria-label="Close Privacy Policy"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <div className="modal-body" style={{ fontSize: '0.92rem', lineHeight: '1.65', color: 'var(--gray-600)' }}>
          <h4 style={{ color: 'var(--navy-900)', marginBottom: '0.5rem' }}>Portfolio Demonstration Website</h4>
          <p>
            This website is a conceptual frontend demonstration created for web design and development portfolio presentation.
          </p>
          <h4 style={{ color: 'var(--navy-900)', marginTop: '1rem', marginBottom: '0.5rem' }}>Data Collection &amp; Processing</h4>
          <p>
            Any text, telephone numbers, or dates entered into the appointment form are processed entirely client-side inside your browser session for demo validation only. No personal healthcare or contact data is logged, sold, or transmitted to any server.
          </p>
          <h4 style={{ color: 'var(--navy-900)', marginTop: '1rem', marginBottom: '0.5rem' }}>Medical Advice Disclaimer</h4>
          <p>
            All clinical descriptions, treatment timelines, and team profiles are illustrative samples. For real medical inquiries, please consult a licensed dental practitioner.
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary btn-sm" onClick={onClose} type="button">
            Understood &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
