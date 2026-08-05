import React from 'react';
import Link from 'next/link';

const UtilityPageTemplate = ({ utility }) => {
    if (!utility) return (
        <div className='county-info'>
             <div className='county-btn'>
                <Link href={'/utilities'}><button>Back to Utilities</button></Link>
                <h1 className='title'>Utility Zone Not Found</h1>
            </div>
        </div>
    );

    return (
        <div className='county-info'>
            <div className='county-btn'>
                <Link href={'/utilities'}><button>Back to Utilities</button></Link>
                <h1 className='title'>{utility.name}</h1>
            </div>

            <p className='border'></p>

            {utility.sections && utility.sections.map((section, sIdx) => (
                <span key={sIdx} className='span'>
                    <h2 className='util-header'>{section.title}</h2>
                    {section.subsections && section.subsections.map((sub, ssIdx) => (
                        <div key={ssIdx} className='util-subsection'>
                            {sub.name && <h3>{sub.name}</h3>}
                            {sub.links && sub.links.map((link, lIdx) => (
                                <React.Fragment key={lIdx}>
                                    &nbsp;&nbsp;- <a href={link.url} target='_blank' rel='noreferrer'>{link.label}</a>
                                    {link.note && <span>&nbsp;&nbsp;&nbsp;{link.note}</span>}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                    <p className='border'></p>
                </span>
            ))}
        </div>
    );
};

export default UtilityPageTemplate;
