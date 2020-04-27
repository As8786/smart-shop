import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"

const NavBar = props => {
    let { setSliderPos, sliderPos, sliderWasOpenOnce, setSliderWasOpenOnce } = props

    return <div className="navbar-container">
        <div className="slider-btn" onClick={() => {
            !sliderWasOpenOnce && setSliderWasOpenOnce(true)
            return sliderPos ? setSliderPos(false) : setSliderPos(true)
        }} id="slider-btn">
            <span id="slider-btn" />
            <span id="slider-btn" />
            <span id="slider-btn" />
        </div>
        <Link to='/' title="Home Page">
            <div className="top">
                <div>
                    OLINE
                        </div>
                <div>
                    SHOP TECH
                        </div>
            </div>
        </Link>
        <div className="bottom">
            <Link to='/' title="Home Page"> Home </Link>
            <Link to='/products' title="Products Page"> Products </Link>
            <Link to='/profile' title="Log in Page"> Profile </Link>
            <Link to='/shopping-cart' title="Shopping Cart"> Cart </Link>
            <Link to='/contact' title="Contact Page"> Contact </Link>
            <Link to='/login' title="Log in Page"> Log In </Link>
            <Link to='/order-history' title="Order History Page"> History </Link>
        </div>
    </div >
}

export default NavBar;

{/* <div className="navbar-container">
        <div className="left">
            <div className="slider-btn" onClick={() => setSliderPos(!sliderPos)} >
                <span style={{ width: "57px" }}>  </span>
                <span style={{ width: "47px" }}>  </span>
                <span style={{ width: "37px" }}>  </span>
            </div>
            <Link to='/' >SHOP ONLINE</Link>
        </div>
        <div className="right">

            <div className="">
                <Link to='/login' title="Log in"> LOG IN </Link>
                <Link to='/register' title="Sign up"> SIGN UP </Link>
            </div>

        </div>
    </div> */}