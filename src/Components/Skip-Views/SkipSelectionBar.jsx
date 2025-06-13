import React from 'react';

const SkipSelectionBar = ({ selectedSkip, skips, onCancel, onContinue }) => {
  if (!selectedSkip) return null;
  const selected = skips.find(s => s.id === selectedSkip);
  if (!selected) return null;
  const price = (selected.price_before_vat + (selected.vat ? (selected.price_before_vat * selected.vat / 100) : 0)).toFixed(2);
  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1050,
        background: 'var(--tertiary-color)',
        color: 'var(--text-color)',
        boxShadow: '0 -2px 16px 0 rgba(0,0,0,0.10)',
        borderTop: '2px solid var(--primary-color)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <div className='w-100' style={{ fontSize: '0.95em', marginBottom: 6 }}>
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center w-100" style={{  }}>
        <div style={{ fontWeight: 600, fontSize: '1.1em' }}>
          {selected.size} Yard skip
          <span style={{ color: 'var(--primary-color)', fontWeight: 700, marginLeft: 16, fontSize: '1.3em' }}>
            £{price}{selected.vat ? <span style={{ fontSize: '0.7em', fontWeight: 400 }}> (inc. VAT)</span> : null}
          </span>
        </div>
        <div className="d-flex  gap-2">
          <button
            className="btn btn-outline-secondary"
            style={{ minWidth: 100, fontWeight: 600 }}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            style={{ minWidth: 120, fontWeight: 600, background: 'var(--primary-color)', border: 'none' }}
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionBar;