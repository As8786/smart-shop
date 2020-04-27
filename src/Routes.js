import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import LogIn from './Components/LogIn';
import Register from './Components/Register';
import Home from './Components/Home';
import ForgetPassword from './Components/ForgetPassword';
import ProductsListDisplay from './Components/ProductsList';
import ProductDisplay from './Components/ProductDisplay';
import ShoppingCart from './Components/ShoppingCart';
import OrderHistory from './Components/OrderHistory';
import OrderDetails from './Components/OrderDetails';
import UserProfile from './Components/Profile';
import Contact from './Components/Contact';
import Modal from "./Components/Modal"

import LoadingValueProvider, { LoadingValueContext } from './Context/LaodingContext';
import { ModalContext } from "./Context/ModalContext"


const Router = () => {
    let { loadingValue, setLoadingValue } = useContext(LoadingValueContext)
    let { displayModal, setDisplayModal } = useContext(ModalContext)


    useEffect(() => {
        setLoadingValue(false)
    }, [])

    return <div className="routes-container" id="routesPage">
        {displayModal.display && <Modal />}
        <Route exact path="/login" render={() => <LogIn />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/forget-password" render={() => <ForgetPassword />} />
        <Route exact path="/products" render={() => <ProductsListDisplay />} />
        <Route exact path="/product/:id" render={(props) => <ProductDisplay id={props.match.params.id} />} />
        <Route exact path="/shopping-cart" render={() => <ShoppingCart />} />
        <Route exact path="/order-history" render={() => <OrderHistory />} />
        <Route exact path="/order-detail/:id" render={(props) => < OrderDetails id={props.match.params.id} />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/contact" render={() => <Contact />} />
    </div>
}

export default Router
