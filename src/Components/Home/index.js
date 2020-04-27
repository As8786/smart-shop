import React, { useState, useEffect, useMemo } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./style.css"
import ProductsCategoriesCards from "./ProductsCategoriesCards"
import BestSellers from './BestSellers';
import CustomerReviews from './CostomerReviews';


const Home = () => {

    let [currentImg, setCurrentImg] = useState(1)
    let [firstShow, setFirstShow] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    })

    useEffect(() => {
        setTimeout(() => handleCurrentImgDisplay(), 5000)
        let carrousel = document.getElementById('carrousel')
        carrousel.style.backgroundImage = `url(./imgs/carr${currentImg}.jpg)`
        // third.style.backgroundImage = `url(./imgs/carr${currentImg}.jpg)`
    }, [currentImg])

    useEffect(() => {
        setTimeout(() => handleCurrentImgDisplay(), 5000)
    }, [])

    const handleCurrentImgDisplay = () => {
        return currentImg < 5 ? setCurrentImg(currentImg + 1) : setCurrentImg(1)
    }




    return <div className="home-container">
        <div className="background" id="carrousel">
            <div className="home-container-gradient" />
        </div>
        <div className="first-part-container" id="first-part-container">
            <p data-aos="fade-up" className="site-name" > Online Shop Tech</p>
            <p data-aos="fade-down" > Best Entertainment Tools With Best Prices </p>
        </div>
        <ProductsCategoriesCards />
        <BestSellers />
        <CustomerReviews />
    </div >;
}

export default Home;