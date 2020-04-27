import React from 'react';

import './style.css'


const Footer = () => {
    return <div className="footer-container">
        <div className="footer-contact-links">
            <div className="left">
                <div className="section-title">
                    Message Us
             </div>
                <input className="footer-input" placeholder="Your name" />
                <input className="footer-input" placeholder="Your email" />
                <textarea className="footer-text-area" placeholder='Your enquiry' />
                <button>
                    Send
        </button>
            </div>
            <div className="right">
                <div className="footer-information-item" >
                    <div className="footer-information-item-title"> CALL US ON </div>
                    <div className="footer-information-item-content"> 11 222 333 444 </div>
                </div>
                <div className="footer-information-item" >
                    <div className="footer-information-item-title"> Or Email </div>
                    <div className="footer-information-item-content"> hello@shoponline.com</div>
                </div>
                <div className="footer-information-item" >
                    <div className="footer-information-item-title"> Social Us </div>
                    <div className="footer-information-item-images-container" >
                        {arr.map((el, i) => {
                            return <div className="footer-information-item-image" key={i}>
                                <img src={`./imgs/${el.img}.jpg`} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;


const arr = [
    {
        name: "facebook",
        img: "face"
    },
    {
        name: "twitter",
        img: "twit"
    },
    {
        name: "pinterest",
        img: "pint"
    },
    {
        name: "instagram",
        img: "insta"
    },
]