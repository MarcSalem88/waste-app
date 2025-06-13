import React from 'react';

const steps = [
    {
        label: 'Postcode',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-md-2 me-0"
            >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
        active: true,
        disabled: false,
        dividerColor: '#0037C1',
    },
    {
        label: 'Waste Type',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-md-2 me-0"
            >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
            </svg>
        ),
        active: false,
        disabled: false,
        dividerColor: '#2A2A2A',
    },
    {
        label: 'Select Skip',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-md-2 me-0"
            >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
            </svg>
        ),
        active: false,
        disabled: false,
        dividerColor: '#2A2A2A',
    },
    {
        label: 'Permit Check',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-md-2 me-0"
            >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
        ),
        active: false,
        disabled: true,
        dividerColor: '#2A2A2A',
    },
    {
        label: 'Choose Date',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-md-2 me-0"
            >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
            </svg>
        ),
        active: false,
        disabled: true,
        dividerColor: '#2A2A2A',
    },
    {
        label: 'Payment',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-md-2 me-0"
            >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
        ),
        active: false,
        disabled: true,
        dividerColor: '#2A2A2A',
    },
];

function Header() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ background: 'var(--tertiary-color)', minHeight: '100%', borderRight: '1px solid black' }}>
            {steps.map((step, idx) => (
                <React.Fragment key={step.label}>
                    <button
                        className={`btn d-flex w-100 align-items-center mb-2  py-2 border-0 bg-transparent  justify-content-center ${step.active
                                ? 'text-primary'
                                : step.disabled
                                    ? 'text-secondary opacity-50'
                                    : 'text-primary'
                            }`}
                        disabled={step.disabled}
                        style={{ cursor: step.disabled ? 'not-allowed' : 'pointer' }}
                    >
                        {step.icon}
                        <span className="d-none d-md-flex align-items-center justify-content-center">{step.label}</span>
                    </button>
                    {idx < steps.length - 1 && (
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'start',
                                position: 'relative',
                                height: 32,
                                marginBottom: 4,
                                marginTop: -4,
                            }}
                        >
                            <div
                                style={{
                                    borderLeft: `2px dashed ${step.dividerColor}`,
                                    height: '100%',
                                    opacity: 0.7,
                                    zIndex: 0,
                                }}
                            ></div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Header;