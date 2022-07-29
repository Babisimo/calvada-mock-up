import React, { useState } from 'react'
import Contact from './FormContact'
import FormSuccess from './FormSuccess'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div>
            {!isSubmitted ? <Contact submitForm={submitForm} /> : <FormSuccess />}
        </div>
    )
}

export default Form
