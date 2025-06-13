import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SkipsSwiper = ({ skips, selectedSkip, setSelectedSkip }) => {
  return (
    <div className="container mt-4 d-flex align-items-center justify-content-center" style={{ height: '70vh', overflowY: 'auto' }}>
      <div className='w-100'>
        <Swiper
          spaceBetween={35}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{ padding: '0 40px 40px 40px' }} // Add space for arrows and pagination
        >
          {skips.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`card ${selectedSkip === item.id ? 'border-primary shadow' : ''}`}
                style={{
                  cursor: 'pointer',
                  minHeight: 180,
                  transition: 'box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out, background 0.2s ease-in-out',
                  background: selectedSkip === item.id ? 'rgba(0,55,193,0.08)' : undefined
                }}
                onClick={() => setSelectedSkip(selectedSkip === item.id ? null : item.id)}
              >
                <div className="card-body p-3 p-md-4" style={{ fontSize: '0.97em' }}>
                  <div className="position-relative">
                    <img
                      src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${item.size}-yarder-skip.jpg`}
                      alt="Skip"
                      className="img-fluid rounded mb-3 w-100"
                      style={{ objectFit: 'cover', height: 200, width: '100%' }}
                    />
                    {/* Skip size badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        background: '#0037c1',
                        color: 'white',
                        fontSize: '0.85em',
                        padding: '3px 10px',
                        borderRadius: 4,
                        fontWeight: 600,
                        zIndex: 2,
                      }}
                    >
                      {item.size} Yards
                    </div>

                    {!item.allowed_on_road && (
                      <div
                        style={{
                          position: 'absolute',
                          left: 10,
                          bottom: 20,
                          background: '#111',
                          color: 'white',
                          fontSize: '0.75em',
                          padding: '2px 8px 2px 6px',
                          borderRadius: 4,
                          fontWeight: 600,
                          zIndex: 2,
                          display: 'flex',
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
                  </div>
                  <h5 className="card-title mb-2 fs-6 fs-md-5">{item.size} Yard skip</h5>
                  <div className="mb-1" style={{ fontSize: '0.92em' }}>
                    {item.hire_period_days} day hire period
                  </div>
                  <div className="mb-2 d-flex align-items-center" style={{ fontSize: '1.1em', color: 'var(--primary-color)', fontWeight: 700 }}>
                    £{(item.price_before_vat + (item.vat ? (item.price_before_vat * item.vat / 100) : 0)).toFixed(2)}
                    {item.vat ? (
                      <span style={{ fontSize: '0.7em', fontWeight: 400 }}> &nbsp;(inc. VAT)</span>
                    ) : null}
                  </div>
                  <button
                    className={`Button w-100 mt-3`}
                    style={{
                      fontWeight: 600,
                      background: selectedSkip === item.id ? 'var(--primary-color)' : '#2a2a2a',
                      color: 'var(--text-color)',
                      border: 'none',
                      transition: 'background 0.2s ease-in-out, color 0.2s ease-in-out',
                      fontSize: '0.97em'
                    }}
                    disabled={false}
                    tabIndex={-1}
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedSkip(selectedSkip === item.id ? null : item.id);
                    }}
                  >
                    {selectedSkip === item.id ? 'Selected' : 'Select This Skip ->'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SkipsSwiper;
