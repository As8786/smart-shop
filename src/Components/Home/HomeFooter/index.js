import React from 'react';

import './style.css'


const HomeFooter = props => {

    let { homeDimension } = props

    return <div className="home-footer-container" >
        <div className="home-footer-contact-links">
            <div className="left">
                <div className="section-title">
                    Message Us
             </div>
                <input className="home-footer-input" placeholder="Your name" />
                <input className="home-footer-input" placeholder="Your email" />
                <textarea className="home-footer-text-area" placeholder='Your enquiry' />
                <button>
                    Send
        </button>
            </div>
            <div className="right">
                <div className="home-footer-information-item" >
                    <div className="home-footer-information-item-title"> CALL US ON </div>
                    <div className="home-footer-information-item-content"> 11 222 333 444 </div>
                </div>
                <div className="home-footer-information-item" >
                    <div className="home-footer-information-item-title"> Or Email </div>
                    <div className="home-footer-information-item-content"> hello@shoponline.com</div>
                </div>
                <div className="home-footer-information-item" >
                    <div className="home-footer-information-item-title"> Social Us </div>
                    <div className="home-footer-information-item-content"> hello@shoponline.com</div>
                </div>
            </div>
        </div>
    </div>
}

export default HomeFooter;