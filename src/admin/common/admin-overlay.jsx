import './admin-overlay.css';
import {createContext, useState} from 'react';
import {FaWindowClose} from "react-icons/fa";

export const AdminOverlayContext = createContext();
export const OverlayMessageType = Symbol("message");
export const OverlayErrorType = Symbol("error");

function AdminOverlay({children}) {
    const [overlayConfig, setOverlayConfig] = useState(null);

    const overlayClass = `admin-overlay ${overlayConfig ? 'visible' : 'hidden'} ${overlayConfig?.type === OverlayMessageType ? 'message' : 'error'}`;

    const handleCloseOverlay = (event) => {
        event.preventDefault();

        setOverlayConfig(null);
    }

    return (
        <AdminOverlayContext.Provider value={{setOverlayConfig}}>
            <div className={overlayClass}>
                <div className='admin-overlay-close-button-overlay' onClick={handleCloseOverlay}>
                    <FaWindowClose className='admin-overlay-close-button'/>
                </div>
                <label className='admin-overlay-label'>
                    {overlayConfig?.message}
                </label>
            </div>
            {children}
        </AdminOverlayContext.Provider>
    )
}

export default AdminOverlay;
