import React, { useState } from 'react'
import emailjs from '@emailjs/browser'



const Result = () => {
    return (
        <p>Successfully sent! I will get to you shortly.</p>
    )
}

const Contact = () => {

    const [result, showResult] = useState(false)

    let state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        nameError: "Name cannot be empty",
        emailError: "Email cannot be empty",
        subjectError: "Subject cannot be empty",
        messageError: "Message cannot be empty"
    }

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
                <input
                    className='input-name'
                    placeholder="Name"
                    type='text'
                    name='name'
                    value={state.name}
                />
                {/* <div>{state.nameError}</div> */}

                <label>Email</label>
                <input
                    className='input-email'
                    type='email'
                    name='email'
                    placeholder="Email"
                    value={state.email}
                />
                {/* <div>{state.emailError}</div> */}

                <label>Subject</label>
                <input
                    className="input-subject"
                    type='subject'
                    name='subject'
                    value={state.subject}
                    autoComplete='new-password'
                    placeholder='Subject' />
                {/* <div>{state.subjectError}</div> */}

                <label>Message</label>
                <textarea
                    placeholder="Message + Job Number"
                    value={state.message}
                />
                {/* <div>{state.messageError}</div> */}

                <input className='send' type='submit' value='Send' />

            </form >

            <div className='result'>
                {result ? <Result /> : null}
            </div>

        </div >
    )
}

export default Contact