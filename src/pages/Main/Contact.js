// src/ContactPage.js
import React from 'react';
import '../../styles/contact.css';

const contacts = [
    { name: 'Oswaldo Gonzalez', email: '', phone: '951-280-9960', position: "Lead Web Developer/Head of Research" },
    { name: 'Hector Navarro', email: '', phone: '951-280-9960', position: "IT/CAD Technician" },
    { name: 'Daniel Gonzalez', email: '', phone: '951-280-9960', position: "Research" },
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
