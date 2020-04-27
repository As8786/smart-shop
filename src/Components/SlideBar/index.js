import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"

const Slider = () => {
    return <div className="slider-container">
        <div className="slider-content">

            <div className="title"> MENU </div>
            <div className="links-container">    {tab.map(el => <div className="link-item"> <Link to={el.link}>  {el.name} </Link> </div>)} </div>
        </div>
    </div>
}


let tab = [
    { name: "Products", link: "/products" },
    { name: "Profile", link: "/profile" },
    { name: "Shopping cart", link: "/shopping-cart" },
    { name: "Orders history", link: "/order-history" },
    { name: "Contact", link: "/contact" },
    { name: "Log In", link: "/login" }
]

export default Slider;