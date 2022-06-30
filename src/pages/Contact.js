const Contact = () => {
    return (
        <div className="contactDiv">
            <form className="form">
                <h1 className="title">Contact Form</h1>
                <p className="title">Contact me for any maps that cannot be found on this website</p>

                <label>Name</label>
                <input placeholder="Name"></input>

                <label>Email</label>
                <input placeholder="Email"></input>

                <label>Message + <strong>Job Number</strong></label>
                <textarea placeholder="Message + Job Number"></textarea>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Contact