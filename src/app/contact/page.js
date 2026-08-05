import React from 'react';

export const metadata = {
    title: 'Contact',
    description: 'Reach Calvada Surveying, Inc.',
};

const contacts = [
    { name: 'Calvada Website Contact', email: 'https://www.calvada.com/contact.html', phone: '951-280-9960', position: "" },
];

export default function Contact() {
    return (
        <>
            <h1 className='title'>Contact</h1>
            <div className="contact">
                <ul>
                    {contacts.map((contact, index) => (
                        <li key={index}>
                            <h2>{contact.name}</h2>
                            <p><a href={contact.email}>{"Contact Us Form"}</a></p>
                            <p>Call Us: {contact.phone}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
