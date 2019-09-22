import React from 'react';

const ContactForm = ({ action }) => {
    return (
        <div>
            <form action={action} method="POST">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="_replyto" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" name="message" type="text" rows="3"></textarea>
                </div>

                <input type="submit" className="btn btn-primary custom-skill" value="Send" />
            </form>
        </div>
    )
}

export default ContactForm; 
