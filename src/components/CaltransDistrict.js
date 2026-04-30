import React from 'react';
import caltransDistricts from '../data/caltrans_districts.json';
import CopyEmail from './CopyEmail';

const CaltransDistrict = ({ id }) => {
    const district = caltransDistricts.find(d => d.id === `District${id}` || d.id === String(id));

    if (!district) return null;

    const hasRequestForm = district.links && district.links.some(l => l.label.includes('Request Form'));
    const hasPostmile = district.links && district.links.some(l => l.label.includes('Postmile'));

    let contacts = district.contacts;
    if (!contacts && (district.email || district.contactName || district.phone)) {
        contacts = [{ name: district.contactName, email: district.email, phone: district.phone }];
    }

    return (
        <div>
            <p>({district.name || `District ${id}`})</p>
            {district.gisUrl && (
                <>
                    <br />
                    <a href={district.gisUrl} target="_blank" rel="noreferrer">{district.name} GIS</a>
                </>
            )}

            {district.links && district.links.map((link, index) => {
                if (link.label.includes('Postmile Info') || link.label.includes('Request Form')) return null;
                return (
                    <React.Fragment key={index}>
                        <a href={link.url} target='_blank' rel='noreferrer'>{link.label}</a>
                        <br />
                    </React.Fragment>
                );
            })}

            {(hasRequestForm || hasPostmile) && (
                <>
                    <br />
                    <h4>{hasRequestForm ? 'Request ROW Maps by Email:' : 'Request ROW by Email:'}</h4>
                </>
            )}

            {district.links && district.links.map((link, index) => {
                if (!link.label.includes('Postmile Info') && !link.label.includes('Request Form')) return null;
                return (
                    <React.Fragment key={index}>
                        <p>Attach <strong><a href={link.url} target='_blank' rel='noreferrer'>{link.label}</a></strong></p>
                    </React.Fragment>
                );
            })}

            {contacts && contacts.map((c, i) => (
                <React.Fragment key={i}>
                    <br />
                    <h4>{c.heading || 'Contact:'}</h4>
                    <p>
                        {c.name || 'Right of Way Engineering Staff'}
                        {c.email && <> | <CopyEmail email={c.email} /></>}
                        {c.phone && <> | {c.phone}</>}
                    </p>
                </React.Fragment>
            ))}
        </div>
    );
};

export default CaltransDistrict;
