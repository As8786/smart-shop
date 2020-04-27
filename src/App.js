import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from "react-router-dom"

import './App.css';

import Routes from './Routes'
import NavBar from './Components/NavBar';
import Slider from './Components/SlideBar';
import ProductsProvider from "./Context/ProductsContext"
import PaginationProvider from './Context/PaginationContext';
import FiltersProvider from './Context/FiltersContext';
import CartProvider from './Context/CartContext';
import OrderHistoryProvider from './Context/OrderHistory';
import ProfileProvider from './Context/ProfileContext';
import Footer from './Components/Footer';
import ScrollBtn from './Components/ScrollBtn';
import LoadingValueProvider from './Context/LaodingContext';
import ModalProvider from "./Context/ModalContext"

function App(props) {

  let [sliderPos, setSliderPos] = useState(false)
  let [sliderWasOpenOnce, setSliderWasOpenOnce] = useState(false)

  window.addEventListener('click', (e) => {
    e.target.id !== "slider-btn" && setSliderPos(false)
  })

  return <LoadingValueProvider>
    <div className="App">
      <ProfileProvider>
        <FiltersProvider>
          <ProductsProvider>
            <OrderHistoryProvider>
              <CartProvider>
                <PaginationProvider>
                  <NavBar setSliderPos={(e) => setSliderPos(e)} sliderPos={sliderPos} sliderWasOpenOnce={sliderWasOpenOnce} setSliderWasOpenOnce={(e) => setSliderWasOpenOnce(e)} />
                  {sliderPos ? <Slider /> : sliderWasOpenOnce && <div className="slider-closed-anim" />}
                  <ModalProvider>
                    <Routes />
                  </ModalProvider>
                  <ScrollBtn />
                  {props.history.location.pathname !== "/" && <Footer />}
                </PaginationProvider>
              </CartProvider>
            </OrderHistoryProvider>
          </ProductsProvider>
        </FiltersProvider>
      </ProfileProvider>
    </div>
  </LoadingValueProvider>
}

export default withRouter(App);
