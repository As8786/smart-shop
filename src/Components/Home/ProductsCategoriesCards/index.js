import React, { useEffect } from 'react';

import Swiper from "swiper";
import "swiper/css/swiper.css"

import "./style.css"

const ProductsCategoriesCards = () => {



    useEffect(() => {
        let swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 70,
                stretch: 0,
                depth: 10,
                modifier: 1,
                slideShadows: true,
            }
        });
    }, [])

    return <div className="products-categories-cards" id="products-categories-cards" >
        <div className="section-title">
            Our Products
        </div>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className='slide-name'> Console </div>
                    <div className='img-container'>
                        <img src="./imgs/carr4.jpg" alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className='slide-name'> Smartphone </div>
                    <div className='img-container'>
                        <img src="./imgs/carr1.jpg" alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className='slide-name'> Laptop </div>
                    <div className='img-container'>
                        <img src="./imgs/carr2.jpg" alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className='slide-name'> Tablet </div>
                    <div className='img-container'>
                        <img src="./imgs/carr3.jpg" alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className='slide-name'> Home Cinema </div>
                    <div className='img-container'>
                        <img src="./imgs/carr5.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <p> {`<- Make It Slide ->`} </p>
    </div>
}

export default ProductsCategoriesCards