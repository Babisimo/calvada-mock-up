import React from 'react';
import globalLinks from '../../data/global_links.json';

export const metadata = {
    title: 'Links',
    description:
        'Shared survey research links — NGS benchmarks, licence lookup, Caltrans right-of-way contacts, and more.',
};

export default function Links() {
    return (
        <div className='block'>
            <h1 className='title'>Links</h1>
            <div className='links'>
                {globalLinks && Array.isArray(globalLinks) && globalLinks.map((category) => (
                    <React.Fragment key={category.category}>
                        {category.links && category.links.map((link, lIdx) => (
                            <div key={lIdx} className='link'>
                                <a href={link.url} target='_blank' rel='noreferrer'>
                                    {link.imgSrc && (
                                        <img
                                            src={link.imgSrc}
                                            alt={link.imgAlt || link.label}
                                            width={link.imgWidth || 'auto'}
                                            height={link.imgHeight || 'auto'}
                                        />
                                    )}
                                    {link.label}
                                </a>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
