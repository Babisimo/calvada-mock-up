import React from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_xy4nmcc', 'template_ljfl7cs', e.target, 'GGiduFndqG58Nn5Lh')
            .then((result) => {
                console.log(result.text);
                console.log("Message Successfully Sent " + result.status)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    return (
        <div className="contactDiv">
            <form className="form" onSubmit={sendEmail}>
                <h1 className="title">Contact Form</h1>
                <p className="title">Contact me for any maps that cannot be found on this website</p>

                <label>Name</label>
                <input
                    className='input-name'
                    placeholder="Name"
                    type='text'
                    name='name'
                />

                <label>Email</label>
                <input
                    className='input-email'
                    type='email'
                    name='email'
                    placeholder="Email"
                />

                <label>Subject</label>
                <input
                    className="input-subject"
                    type='subject'
                    name='subject'
                    autoComplete='new-password'
                    placeholder='Subject'
                />

                <label>Message</label>
                <textarea
                    placeholder="Message + Job Number"
                    itemType='message'
                />

                <input disabled={true} className='send' type='submit' value='Send' />


            </form >


        </div >
    )
}

export default Contact