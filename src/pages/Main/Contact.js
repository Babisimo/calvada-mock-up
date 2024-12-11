// src/ContactPage.js
import React from 'react';
import '../../styles/contact.css';

const contacts = [
    { name: 'Oswaldo Gonzalez', email: 'ogonzalez@calvada.com', phone: '951-280-9960', position: "Lead Web Developer/Researcher" },
    { name: 'Hector Navarro', email: 'hnavarro@calvada.com', phone: '951-280-9960', position: "IT/CAD Engineer" },
    { name: 'Daniel Gonzalez', email: 'daniel@calvada.com', position: "Researcher" },
];

function Contact() {
    return (
        <>
            <h1 className='title'>Contact</h1>
            <div className="contact">
                <ul>
                    {contacts.map((contact, index) => (
                        <li key={index}>
                            <h3>{contact.name}</h3>
                            <p>{contact.position}</p>
                            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                            <p>{contact.phone}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Contact;
