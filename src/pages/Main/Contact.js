import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Result = () => {
    return (
        <p>Successfully sent! I will get to you shortly.</p>
    )
}

const Contact = () => {
    const [result, showResult] = useState(false)
    const [clickable, toggleClickable] = useState(false)

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
        showResult(true)
    }


    return (
        <div className="contactDiv">
            <form className="form" onSubmit={sendEmail}>
                <h1 className="title">Contact Form</h1>
                <p className="title">Contact me for any maps that cannot be found on this website</p>

                <label>Name</label>
                <input className='input-name' type='text' name='name' placeholder="Name"></input>

                <label>Email</label>
                <input className='input-email' type='email' name='email' placeholder="Email"></input>

                <label>Subject</label>
                <input className="input-subject" type='subject' name='subject' placeholder='Subject'></input>

                <label>Message</label>
                <textarea placeholder="Message + Job Number"></textarea>

                <input className='send' type='submit' value='Send' />

            </form>

            <div className='result'>
                {result ? <Result /> : null}
            </div>

        </div>
    )
}

export default Contact