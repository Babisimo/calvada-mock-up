import React from 'react';
import Dropdown from './Dropdown';

const CityDropdown = ({ name, links }) => {
    return (
        <Dropdown
            label={name}
            className="city-dropdown"
            buttonClassName="city-dropbtn"
            contentClassName="city-dropdown-content"
        >
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
        </Dropdown>
    );
};

export default CityDropdown;
