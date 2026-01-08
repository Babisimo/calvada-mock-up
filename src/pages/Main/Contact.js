// src/ContactPage.js
import React from 'react';
import '../../styles/contact.css';

const contacts = [
    { name: 'Calvada Website Contact', email: 'https://www.calvada.com/contact.html', phone: '951-280-9960', position: "" },
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
                            <p><a href={contact.email}>{"Contact Us Form"}</a></p>
                            <p>Call Us: {contact.phone}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Contact;
