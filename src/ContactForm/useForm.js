import { useState, useEffect } from "react";

const useForm = (callback, validate) => {

    const state = {
        disabled: false
    }

    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [errors, setErros] = useState({})
    
    const [isSubmitting, setIsSubmitting] = useState(false)



    const handleChange = (e) => {
        const { name, value } = e.target



        setValues({
            ...values,
            [name]: value,
        })

        if (values === '') {
            this.setState({
                disabled: true
            })
        } else {
            this.setState({
                disabled: false
            })
        }

    }

    const handleSubmit = (e) => {
        // e.preventDefault();

        setErros(validate(values))
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    // eslint-disable-next-line
    }, [errors])

    return { handleChange, values, handleSubmit, errors, state }

}

export default useForm