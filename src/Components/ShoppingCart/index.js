import React, { useContext, useState, useEffect } from 'react';
import * as moment from "moment"

import './style.css'
import { PaginationContext } from "../../Context/PaginationContext"
import Pagination from '../Pagination';
import * as cartActions from "../../actions/cartActions"
import * as ordersHistoryActions from "../../actions/ordersHistoryActions"
import { CartContext } from '../../Context/CartContext';
import { ModalContext } from "../../Context/ModalContext"
import { OrderHistoryContext } from "../../Context/OrderHistory";



const ShoppingCart = () => {

    let { cartState, dispatchCartState } = useContext(CartContext)
    let { actualPage, setActualPage } = useContext(PaginationContext)
    let { displayModal, setDisplayModal } = useContext(ModalContext)
    let { dispatchOrdersHistoryList } = useContext(OrderHistoryContext)

    let [cartTotalAmount, setCartTotalAmount] = useState(0)
    let [cartProductsNumber, setCartProductsNumber] = useState(0)

    useEffect(() => {
        return () => setActualPage(1)
    }, [])

    useEffect(() => {
        countCartTotalAmount()
        countCartProductsNumber()
    }, [cartState])

    const countCartTotalAmount = () => {
        let newAmount = 0
        cartState.map(el => {
            newAmount += (el.cartQty * el.price)
        })
        setCartTotalAmount(newAmount)
    }

    const countCartProductsNumber = () => {
        let quantity = 0
        cartState.map(el => {
            quantity = el.cartQty + quantity
        })
        setCartProductsNumber(quantity)
    }

    const onRemoveProductClick = value => {
        dispatchCartState({
            type: cartActions.REMOVE_PRODUCT_TO_CART,
            payload: value
        })
    }

    const onProductQtyChange = value => {
        dispatchCartState({
            type: cartActions.CHANGE_QTE_PRODUCT_IN_CART,
            payload: value
        })
    }

    const onButtonConfirmOrderClick = () => {
        //Empty the cart
        dispatchCartState({
            type: cartActions.EMPTY_CART
        })
        //Display the modal
        setDisplayModal({
            text: `Our order was confirmed`,
            display: true
        })
        //Add order to order history context
        dispatchOrdersHistoryList({
            type: ordersHistoryActions.ADD_ORDER,
            payload: {
                products: cartState,
                status: false,
                totalProducts: cartProductsNumber,
                amount: cartTotalAmount,
                date: moment().format('L'),
                deliveryDate: ""
            }
        })
    }

    return <div className="shop-cart-container">
        <div className="left">
            <div className="title"> Shopping Cart </div>
            <div className="cart-infos">
                <div className="cart-infos-item">
                    <div className="section-title"> Cart Products Quantity </div>
                    <span> {cartProductsNumber} </span> {cartProductsNumber > 1 ? "Products" : "Product"}
                </div>
                <div className="cart-infos-item">
                    <div className="section-title"> Cart Total Amount </div>
                    <span> {cartTotalAmount} </span>  MDT
                </div>
            </div>
            {cartState.length > 0 && <div className="cart-confirmation">
                <button onClick={onButtonConfirmOrderClick}> Confirm Order </button>
            </div>}
        </div>
        <div className="right">
            {cartState.length > 0 ? <React.Fragment> <div className="title"> Cart Products List </div>
                <div className="cart-products-display">
                    <div className="table">
                        <div className="table-thead">

                            <div className="product-info">
                                Product
                        </div>
                            <div className="product-quantity">
                                Quantity
                        </div>
                            <div className="product-unitprice">
                                Unit Price
                         </div>
                            <div className="product-totalprice">
                                Total Price
                         </div>
                            <div className='product-remove'>

                            </div>
                        </div>
                        {
                            cartState.map((el, i) => {
                                return (actualPage - 1) * 5 < i + 1 && i + 1 <= actualPage * 5 ? <div key={i} className="table-tbody">
                                    <div className='product-info'>
                                        <div className='img-container'>
                                            <img src={`/imgs/${el.imgs[0]}.jpg`} />
                                        </div>
                                        <div className="product-designation">
                                            <div className="title">
                                                {el.name}
                                            </div>
                                            <div className="description">
                                                {el.description}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-quantity">
                                        <input type="number" value={el.cartQty} onChange={e => onProductQtyChange({ ...el, cartQty: Number(e.target.value) })} min={1} />
                                    </div>
                                    <div className="product-unitprice">
                                        <span>  {el.price} </span>
                                    </div>
                                    <div className="product-totalprice">
                                        <span>  {el.cartQty * el.price} </span>
                                    </div>
                                    <div className='product-remove'>
                                        <button onClick={() => onRemoveProductClick(el.name)} > Remove </button>
                                    </div>
                                </div> : ""
                            })
                        }

                    </div>
                    <div className="pagination-container">
                        <Pagination pages={cartState.length % 5 === 0 ? cartState.length / 5 : Math.floor(cartState.length / 5) + 1} />
                    </div>
                </div> </React.Fragment> : <div className="empty-cart">
                    <div className="empty-cart-text"> Your cart is empty, please to add products to it  </div>
                    <img src="./imgs/emptyCart.jpg" alt='' />
                </div>
            }
        </div>
    </div>
}

export default ShoppingCart;