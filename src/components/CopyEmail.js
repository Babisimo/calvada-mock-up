'use client';

import React, { useState } from 'react';

const CopyEmail = ({ email, label, className }) => {
    const [copied, setCopied] = useState(false);

    if (!email) return null;

    const handleCopy = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = email;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') handleCopy(e);
    };

    return (
        <>
            <span
                className={`copy-email ${className || ''}`}
                role="button"
                tabIndex={0}
                aria-label={`Copy email ${email} to clipboard`}
                onClick={handleCopy}
                onKeyDown={handleKey}
                data-tooltip="Click to copy"
            >
                {label || email}
            </span>
            <span className={`notification ${copied ? 'show' : ''}`} role="status" aria-live="polite">
                Email copied to clipboard
            </span>
        </>
    );
};

export default CopyEmail;
