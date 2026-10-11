import React, { useEffect } from 'react';

export default function AppointmentSuccessModal({ submissionData, onClose }) {
  useEffect(() => {
    if (submissionData) {
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
  }, [submissionData, onClose]);

  if (!submissionData) return null;

  return (
    <div
      className="modal-container is-active"
      id="appointmentSuccessModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="successModalTitle"
    >
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog">
        <div className="modal-body" style={{ textAlign: 'center', paddingTop: '2.5rem' }}>
          <div className="success-modal-icon" aria-hidden="true">
            <i className="fa-solid fa-check"></i>
          </div>

          <h3 className="modal-title" id="successModalTitle" style={{ marginBottom: '0.6rem' }}>
            Appointment Request Received
          </h3>

          <p style={{ color: 'var(--gray-600)', fontSize: '0.92rem', marginBottom: '1.4rem' }}>
            Thank you! In a real clinic scenario, our Visakhapatnam front desk team would contact you within 2 business hours to confirm your scheduled time.
          </p>

          <div
            style={{
              backgroundColor: 'var(--gray-50)',
              padding: '1.2rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--gray-200)',
              textAlign: 'left',
              fontSize: '0.86rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}
          >
            <strong>Demo Submission Details:</strong>
            <br />• <strong>Patient Name:</strong> {submissionData.name}
            <br />• <strong>Contact:</strong> {submissionData.phone}
            <br />• <strong>Treatment:</strong> {submissionData.treatment}
            <br />• <strong>Preferred Slot:</strong> {submissionData.date} ({submissionData.slot})
            {submissionData.email && (
              <>
                <br />• <strong>Email:</strong> {submissionData.email}
              </>
            )}
            {submissionData.notes && (
              <>
                <br />• <strong>Notes:</strong> {submissionData.notes}
              </>
            )}
          </div>

          <button
            className="btn btn-primary btn-sm"
            id="successModalClose"
            type="button"
            onClick={onClose}
          >
            Close &amp; Return to Website
          </button>
        </div>
      </div>
    </div>
  );
}
