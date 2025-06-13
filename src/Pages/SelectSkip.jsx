import React, { useEffect, useState } from 'react';
import { AxiosInstance } from '../Components/Axios/axios';
import SkipsGrid from '../Components/Skip-Views/SkipsGrid';
import SkipsSwiper from '../Components/Skip-Views/SkipsSwiper';
import SkipsList from '../Components/Skip-Views/SkipsList';
import SkipSelectionBar from '../Components/Skip-Views/SkipSelectionBar';


const gridIcon = (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
);
const swiperIcon = (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="7" width="7" height="10" /><rect x="14" y="7" width="7" height="10" /><line x1="12" y1="7" x2="12" y2="17" /></svg>
);
const listIcon = (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><circle cx="3" cy="6" r="1" /><circle cx="3" cy="12" r="1" /><circle cx="3" cy="18" r="1" /></svg>
);

function SelectSkip() {
    const [skip, setSkip] = useState([]);
    const [selectedSkip, setSelectedSkip] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [view, setView] = useState('grid');

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                const response = await AxiosInstance.get(`/api/skips/by-location?postcode=NR32&area=Lowestoft`);
                const data = response.data;
                setSkip(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    return (
        <div className='d-flex mt-5 flex-column justify-content-end align-items-center'>
            <div className="mb-4">
                <h2 style={{ color: 'var(--text-color)', fontWeight: 700, marginBottom: 4 }}>Select Your Skip Size</h2>
                <div style={{ color: 'var(--text-color)', fontSize: '1.05em', opacity: 0.8 }}>Select the skip size that best suits your needs</div>
            </div>
            <div className="d-flex justify-content-end mb-3 gap-2">
                <button
                    className={`btn btn-outline-primary d-flex align-items-center${view === 'grid' ? ' active' : ''}`}
                    onClick={() => setView('grid')}
                    title="Grid View"
                >
                    {gridIcon}
                </button>
                <button
                    className={`btn btn-outline-primary d-flex align-items-center${view === 'swiper' ? ' active' : ''}`}
                    onClick={() => setView('swiper')}
                    title="Swiper View"
                >
                    {swiperIcon}
                </button>
                <button
                    className={`btn btn-outline-primary d-flex align-items-center${view === 'list' ? ' active' : ''}`}
                    onClick={() => setView('list')}
                    title="List View"
                >
                    {listIcon}
                </button>
            </div>
            {loading ? (
                <div className="text-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert d-flex h-100 align-items-center justify-content-start my-5 alert-danger" role="alert">
                    {error}
                </div>
            ) : (
                <div className="w-100" style={{ maxWidth: 900 }}>
                    {view === 'grid' && (
                        <SkipsGrid skips={skip} selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />
                    )}
                    {view === 'swiper' && (
                        <SkipsSwiper skips={skip} selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />
                    )}
                    {view === 'list' && (
                        <SkipsList skips={skip} selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />
                    )}
                </div>
            )}
            <SkipSelectionBar
                selectedSkip={selectedSkip}
                skips={skip}
                onCancel={() => setSelectedSkip(null)}
                onContinue={() => {console.log('Continue with selected skip:', selectedSkip);}}
            />
        </div>
    );
}

export default SelectSkip;