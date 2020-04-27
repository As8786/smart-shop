import React from 'react';

import "./style.css"

const Contact = () => {
    return <div className="contact-container">
        <div className="title"> GET IN TOUCH  </div>
        <div className="info">
            If you have any specific questions, or just want to know more
        <br />
            about what we do, we’d love to hear from you
         </div>

        <div className="form">
            <div className="image-container">
                <img src="./imgs/envel.jpg" alt="" />
            </div>
            <div className="form-inputs-container">

                <input className="contact-input" placeholder="Your name" />
                <input className="contact-input" placeholder="Your email" />
                <textarea className="contact-text-area" placeholder='Your enquiry' />
                <button>
                    Send Message
                </button>
            </div>
        </div>

    </div>
}

export default Contact; 