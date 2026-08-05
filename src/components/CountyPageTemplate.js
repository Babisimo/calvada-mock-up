import React from 'react';
import Link from 'next/link';
import CaltransDistrict from './CaltransDistrict';
import CopyEmail from './CopyEmail';

const CountyPageTemplate = ({ county }) => {
    if (!county) return (
        <div className='county-info'>
             <div className='county-btn'>
                <Link href={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>County Not Found</h1>
            </div>
        </div>
    );

    return (
        <div className='county-info'>
            <div className='county-btn'>
                <Link href={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>{county.name}</h1>
            </div>

            <p className='border'></p>

            {county.apnFormat && (
                <>
                    <div className='apn-format'>
                        <h2>APN Format:</h2>
                        <p style={{ whiteSpace: 'pre-line' }}>{county.apnFormat}</p>
                    </div>
                    <p className='border'></p>
                </>
            )}

            {county.extraContent && county.extraContent.length > 0 && (
                <>
                    {county.extraContent.map((content, idx) => (
                        <span key={idx} className='warning' dangerouslySetInnerHTML={{ __html: content }}></span>
                    ))}
                    <p className='border'></p>
                </>
            )}

            <span className='span'>
                <h2>Links:</h2>
                {county.links && county.links.map((link, index) => {
                    if (link.break) {
                        return <br key={index} />;
                    }
                    if (link.heading) {
                        return (
                            <React.Fragment key={index}>
                                <h3>{link.heading}</h3>
                                <p>
                                    {link.name && <>{link.name}{link.email ? ' | ' : ''}</>}
                                    {link.email && <CopyEmail email={link.email} />}
                                </p>
                            </React.Fragment>
                        );
                    }
                    return (
                        <React.Fragment key={index}>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                            {link.note && <span>&nbsp;&nbsp;&nbsp;{link.note}</span>}
                            {link.description && <p dangerouslySetInnerHTML={{ __html: link.description }}></p>}
                            <br />
                        </React.Fragment>
                    );
                })}
            </span>

            <p className='border'></p>

            {county.publicWorks && (county.publicWorks.address || county.publicWorks.phone || county.publicWorks.email || county.publicWorks.extraInfo) && (
                <>
                    <span className='span'>
                        <h2>Public Works:</h2>
                        {county.publicWorks.departmentName && <h3>{county.publicWorks.departmentName}</h3>}
                        {county.publicWorks.director && <p><strong>{county.publicWorks.director}</strong>, Director</p>}
                        {county.publicWorks.addressLabel && <h3>{county.publicWorks.addressLabel}</h3>}
                        {county.publicWorks.address && (
                            <>
                                <a 
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(county.publicWorks.address)}`} 
                                    target='_blank' 
                                    rel='noreferrer'
                                    dangerouslySetInnerHTML={{ __html: county.publicWorks.address.replace(', ', ',<br/>') }}
                                >
                                </a>
                                <br />
                            </>
                        )}
                        <br />
                        {county.publicWorks.phone && <p><strong>Phone: </strong>{county.publicWorks.phone}</p>}
                        {county.publicWorks.fax && <p><strong>Fax: </strong>{county.publicWorks.fax}</p>}
                        {county.publicWorks.email && (
                            <p><strong>E-Mail: </strong><CopyEmail email={county.publicWorks.email} /></p>
                        )}
                        {county.publicWorks.extraInfo && county.publicWorks.extraInfo
                            .filter(info => typeof info !== 'string' || !/^\s*(Phone|Fax|E-?mail)\s*:/i.test(info))
                            .map((info, idx) => {
                                if (typeof info === 'string') {
                                    return <p key={idx}>{info}</p>;
                                }
                                if (info.break) {
                                    return <br key={idx} />;
                                }
                                if (info.heading) {
                                    return <h3 key={idx}>{info.heading}</h3>;
                                }
                                if (info.email) {
                                    return (
                                        <p key={idx}>
                                            {info.label && <strong>{info.label} </strong>}
                                            <CopyEmail email={info.email} />
                                        </p>
                                    );
                                }
                                if (info.label) {
                                    return <p key={idx}><strong>{info.label} </strong>{info.value}</p>;
                                }
                                return null;
                            })}
                    </span>
                    <p className='border'></p>
                </>
            )}

            {county.caltransDistricts ? (
                county.caltransDistricts.map((d, i) => (
                    <React.Fragment key={i}>
                        <span className='span'>
                            <h2>Caltrans {d.label ? `(${d.label})` : ''}:</h2>
                            <CaltransDistrict id={d.id || d} />
                        </span>
                        <p className='border'></p>
                    </React.Fragment>
                ))
            ) : county.caltransDistrict ? (
                <>
                    <span className='span'>
                        <h2>Caltrans:</h2>
                        <CaltransDistrict id={county.caltransDistrict} />
                    </span>
                    <p className='border'></p>
                </>
            ) : null}

            {county.highway && (
                <>
                    <span className='span'>
                        <h2>DOT:</h2>
                        {county.highway.logo && (
                            <>
                                <a href={county.highway.url || '#'} target='_blank' rel='noreferrer'>
                                    <img alt='DOT Logo' src={county.highway.logo} className='dot-logo' />
                                </a>
                                <br />
                            </>
                        )}
                        {county.highway.title && <h3>{county.highway.title}</h3>}
                        {county.highway.links && county.highway.links.map((link, idx) => (
                            <React.Fragment key={idx}>
                                <a href={link.url} target='_blank' rel='noreferrer'>{link.label}</a>
                                <br />
                            </React.Fragment>
                        ))}
                        {county.highway.contact && (
                            <>
                                <br />
                                <p><strong>{county.highway.contact.name} Email:</strong>&nbsp;&nbsp; <CopyEmail email={county.highway.contact.email} /></p>
                                {county.highway.contact.title && <p>{county.highway.contact.title}</p>}
                                {county.highway.contact.department && <p>{county.highway.contact.department}</p>}
                                {county.highway.contact.phone && <p><strong>Phone: </strong>{county.highway.contact.phone}</p>}
                            </>
                        )}
                    </span>
                    <p className='border'></p>
                </>
            )}
        </div>
    );
};

export default CountyPageTemplate;
