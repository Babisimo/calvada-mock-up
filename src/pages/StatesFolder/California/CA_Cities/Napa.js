import React, { useState } from 'react';

export default function Napa() {
    const [notification, setNotification] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const copyEmailToClipboard = () => {
        const email = 'twood@cityofnapa.org';
        navigator.clipboard.writeText(email)
            .then(() => {
                setNotification(`Email copied to clipboard! (${email})`);
                showNotification();
            })
            .catch(() => {
                setNotification('Failed to copy email.');
                showNotification();
            });
    };

    const showNotification = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Keep the notification up for 2 seconds
    };

    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Napa</button>
            <div className='city-dropdown-content'>
                <a
                    href='mailto:twood@cityofnapa.org'
                    target={'_blank'}
                    rel='noreferrer'
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default mailto action
                        copyEmailToClipboard();
                    }}
                >
                    City of Napa Surveyor Email (Click to Copy)
                </a>
            </div>
            {notification && (
                <div className={`notification ${isVisible ? 'show' : ''}`}>
                    {notification}
                </div>
            )}
        </div>
    );
}
