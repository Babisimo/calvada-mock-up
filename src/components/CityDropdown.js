import React from 'react';

const CityDropdown = ({ name, links }) => {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>{name}</button>
            <div className='city-dropdown-content'>
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url} 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CityDropdown;
