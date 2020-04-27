import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./style.css"
import HomeFooter from '../HomeFooter';
import BestSellers from '../BestSellers';

const CustomerReviews = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    })

    return <div className="customer-reviews-container" id="customer-reviews-container">
        <div className="section-title"> Customers Reviews </div>
        <div className="reviews-container">
            {users.map((el, i) => {
                return <div className='review-item' style={{ alignSelf: i % 2 === 0 ? "flex-start" : "flex-end" }} key={i} data-aos="zoom-in-up" >
                    <div className="img-container">
                        <img src={`./imgs/${el.img}.jpg`} alt="" />
                    </div>
                    <div className="user-informations">
                        <div className="user-name"> {el.name}  </div>
                        <div className="user-review">
                            <div className='review-title'> Review : </div>
                            <div className="review-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc.
                                Quam quisque id diam vel quam elementum.
                             </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
        <HomeFooter />
    </div>
}

export default CustomerReviews;

let users = [
    { name: "User User 1", img: "user1" },
    { name: "User User 2", img: "user3" }

]