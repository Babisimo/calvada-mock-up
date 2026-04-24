import React from 'react';
import caltransDistricts from '../data/caltrans_districts.json';

const CaltransDistrict = ({ id }) => {
    const district = caltransDistricts.find(d => d.id === `District${id}` || d.id === String(id));
    
    if (!district) return null;

    const hasRequestForm = district.links && district.links.some(l => l.label.includes('Request Form'));
    const hasPostmile = district.links && district.links.some(l => l.label.includes('Postmile'));

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
                if (link.label.includes('Contact:')) return null;
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

            {district.links && district.links.map((link, index) => {
                if (!link.label.includes('Contact:')) return null;
                const email = link.url.replace('mailto:', '');
                return (
                    <React.Fragment key={index}>
                        <br />
                        <h4>Contact:</h4>
                        <p>
                            {district.contactName || 'Right of Way Engineering Staff'}
                            {email && <> | <a href={link.url}> {email}</a></>}
                            {district.phone && <> | {district.phone}</>}
                        </p>
                    </React.Fragment>
                );
            })}

            {!district.links?.some(l => l.label.includes('Contact:')) && (district.email || district.contactName || district.phone) && (
                <>
                    <br />
                    <h4>Contact:</h4>
                    <p>
                        {district.contactName || 'Right of Way Engineering Staff'}
                        {district.email && <> | <a href={`mailto:${district.email}`}> {district.email}</a></>}
                        {district.phone && <> | {district.phone}</>}
                    </p>
                </>
            )}
        </div>
    );
};

export default CaltransDistrict;
