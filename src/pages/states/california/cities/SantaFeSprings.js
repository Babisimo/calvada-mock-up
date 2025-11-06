import React, { useState } from 'react';

export default function SantaFeSprings() {
    const [notification, setNotification] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const copyEmailToClipboard = () => {
        const email = 'alexflores@santafesprings.org';
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
            <button className='city-dropbtn'>Santa Fe Springs</button>
            <div className='city-dropdown-content'>
                <a href='https://www.santafesprings.org/departments/public_works/engineering_division.php' target={'_blank'} rel='noreferrer'>
                    Engineering Division (CL Ties)
                </a>
                <a
                    href='mailto:alexflores@santafesprings.org'
                    target={'_blank'}
                    rel='noreferrer'
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default mailto action
                        copyEmailToClipboard();
                    }}
                >
                    Contact for Ties (Click to Copy)
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
