import React from 'react';

const SkipsList = ({ skips, selectedSkip, setSelectedSkip }) => {
  return (
    <>
      <div className="container mt-4">
        <ul className="list-group" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {skips.map((item) => (
            <li
              key={item.id}
              className={`list-group-item d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mt-3 ${selectedSkip === item.id ? 'border-primary' : ''}`}
              style={{
                cursor: 'pointer',
                background: 'var(--tertiary-color)',
                color: 'var(--text-color)',
                border: selectedSkip === item.id ? '2px solid var(--primary-color)' : 'none',
               
                height: 'auto',
                padding: '1.5rem 1rem',
                borderRadius: 12,
                marginBottom: 24,
                transition: 'box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out, background 0.2s ease-in-out',
                boxShadow: selectedSkip === item.id ? '0 10px 10px 0 var(--secondary-color)' : undefined,
                overflow: 'visible'
              }}
              onClick={() => setSelectedSkip(selectedSkip === item.id ? null : item.id)}
            >
              <div className="d-flex flex-row flex-md-row align-items-start align-items-md-center flex-grow-1 w-100">
                <img
                  src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${item.size}-yarder-skip.jpg`}
                  alt="Skip"
                  className="rounded"
                  style={{ width: 90, height: 90, objectFit: 'cover', flexShrink: 0, marginRight: 16 }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1" style={{ fontSize: '1.1em' }}>{item.size} Yard skip</h5>
                  <div style={{ fontSize: '0.95em' }}>
                    {item.hire_period_days} day hire period
                  </div>
                  {!item.allowed_on_road && (
                    <div
                      style={{
                        marginTop: 6,
                        background: '#111',
                        color: 'white',
                        fontSize: '0.75em',
                        padding: '2px 8px 2px 6px',
                        borderRadius: 4,
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.10)'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16, marginRight: 4 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="12,3 22,21 2,21" fill="#ffc107" />
                          <text x="12" y="17" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#111">!</text>
                        </svg>
                      </span>
                      Not Allowed On The Road
                    </div>
                  )}
                  <div style={{ fontSize: '1.2em', color: 'var(--primary-color)', fontWeight: 700, marginTop: 6 }}>
                    £{(item.price_before_vat + (item.vat ? (item.price_before_vat * item.vat / 100) : 0)).toFixed(2)}
                    {item.vat ? (
                      <span style={{ fontSize: '0.7em', fontWeight: 400 }}> &nbsp;(inc. VAT)</span>
                    ) : null}
                  </div>
                </div>
              </div>
              <button
                className="Button mt-3 mt-md-0 ms-0 d-none d-md-block ms-md-3 align-self-stretch align-self-md-center"
                style={{
                  fontWeight: 600,
                  backgroundColor: selectedSkip === item.id ? 'var(--primary-color)' : 'var(--on-tertiary-color)',
                  color: 'white',
                  border: 'none',
                  transition: 'background 0.2s ease-in-out, color 0.2s ease-in-out',
                  minWidth: 120,
                  width: '100%',
                }}
                tabIndex={-1}
                onClick={e => {
                  e.stopPropagation();
                  setSelectedSkip(selectedSkip === item.id ? null : item.id);
                }}
              >
                {selectedSkip === item.id ? 'Selected' : 'Select This Skip ->'}
              </button>
            </li>
          ))}
        </ul>
      </div>
     
    </>
  );
};

export default SkipsList;
