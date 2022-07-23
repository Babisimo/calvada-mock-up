import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'



const Result = () => {
    return (
        <p>Successfully sent! I will get to you shortly.</p>
    )
}

const Contact = () => {
    const [result, showResult] = useState(false)
    const initialValues = { name: "", email: "", subject: "", message: "" }

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        sendEmail(e)
    }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length == 0 && isSubmit) {
            console.log(formValues)
        }

    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.name) {
            errors.name = "Name is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        }
        if (!values.subject) {
            errors.subject = "Subject is required!"
        }
        if (!values.message) {
            errors.message = "Message is required!"
        }
        return errors
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
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Contact Form</h1>
                <p className="title">Contact me for any maps that cannot be found on this website</p>

                <label>Name</label>
                <input
                    className='input-name'
                    placeholder="Name"
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                />
                <p>{formErrors.name}</p>

                <label>Email</label>
                <input
                    className='input-email'
                    type='email'
                    name='email'
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <p>{formErrors.email}</p>

                <label>Subject</label>
                <input
                    className="input-subject"
                    type='subject'
                    name='subject'
                    value={formValues.subject}
                    autoComplete='new-password'
                    placeholder='Subject'
                    onChange={handleChange}
                />
                <p>{formErrors.subject}</p>

                <label>Message</label>
                <textarea
                    placeholder="Message + Job Number"
                    onChange={handleChange}
                />
                <p>{formErrors.message}</p>

                <input disabled={true} className='send' type='submit' value='Send' />


            </form >

            <div className='result'>
                {result ? <Result /> : null}
            </div>

        </div >
    )
}

export default Contact