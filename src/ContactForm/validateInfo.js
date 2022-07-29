export default function validateInfo(values) {
    let errors = {}
    const maxLength = 5

    // Name Validation
    if (!values.name.trim()) {
        errors.name = "Name Required"
    }

    // Email Validation
    if (!values.email.trim()) {
        errors.email = "Email Required"
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = "Email Address Invalid"
    }

    //Subject Validation
    if (!values.subject.trim()) {
        errors.subject = "Subject Required"
    } else if (values.subject.length < maxLength) {
        errors.subject = `Subject must be ${maxLength} characters or more`
    }

    //Message Validation
    if (!values.message.trim()) {
        errors.message = "Message Required"
    } else if (values.message.length < maxLength) {
        errors.message = `Message must be ${maxLength} characters or more`
    }

    return errors;
}
