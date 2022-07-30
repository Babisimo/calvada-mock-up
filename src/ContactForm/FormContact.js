import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import emailjs from '@emailjs/browser'

const Contact = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors, state } = useForm(submitForm, validate);

    const sendEmail = (e) => {
        e.preventDefault()

        handleSubmit()

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
                <p className="title">Contact me for any maps that cannot be found on this website or any features you would like to see added.</p>

                {/* Name */}
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    className='input-name'
                    type='text'
                    name='name'
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && <p className='result'>{errors.name}</p>}

                {/* Email */}
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    className='input-email'
                    type='email'
                    name='email'
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p className='result'>{errors.email}</p>}

                {/* Subject */}
                <label htmlFor='subject'>Subject</label>
                <input
                    id='subject'
                    autoComplete='new-password'
                    className="input-subject"
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={values.subject}
                    onChange={handleChange}

                />
                {errors.subject && <p className='result'>{errors.subject}</p>}

                {/* Message */}
                <label htmlFor='message'>Message</label>
                <textarea
                    id='message'
                    name='message'
                    placeholder="Message + Job Number"
                    value={values.message}
                    onChange={handleChange}
                />
                {errors.message && <p className='result'>{errors.message}</p>}

                <button disabled={state.disabled} className='send' type='submit'>Send</button>


            </form >


        </div >
    )
}

export default Contact