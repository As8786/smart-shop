import React, { useContext, useEffect, useState } from 'react'

import "./style.css"
import { ProductsContext } from '../../Context/ProductsContext';
import { CartContext } from '../../Context/CartContext';
import * as cartActions from "../../actions/cartActions"
import { ModalContext } from "../../Context/ModalContext"


const ProductDisplay = props => {
    let { id } = props
    let { productsList } = useContext(ProductsContext)
    let { dispatchCartState } = useContext(CartContext)
    let { displayModal, setDisplayModal } = useContext(ModalContext)

    let [product, setProduct] = useState({ imgs: [], description: "", name: "" })
    let [displayedImg, setDisplayedImg] = useState(0)
    let [orderQty, setOrderQty] = useState(0)


    useEffect(() => {
        setProduct(productsList.products.find(el => el.name === id))
    }, [id])


    const onImgClick = value => {
        setDisplayedImg(value)
    }

    const onAddProductToCartClick = () => {

        //Add product to cart
        dispatchCartState({
            type: cartActions.ADD_PRODUCT_TO_CART,
            payload: { ...product, cartQty: orderQty }
        })

        //Display the modal
        setDisplayModal({
            text: `${product.name} was added to cart`,
            display: true
        })
    }

    return <div className="product-display-container">
        <div className="title">
            {product.name}
        </div>
        <div className="product-attributes">
            <div className="product-imgs-container">
                <div className="product-displayed-img-container">
                    <img src={`/imgs/${product.imgs[displayedImg]}.jpg`} alt='' />
                </div>
                <div className="product-imgs">
                    {product.imgs.map((el, i) => {
                        return <div className="product-none-displayed-imgs-container" key={i}>
                            <img src={`/imgs/${product.imgs[i]}.jpg`} onClick={() => onImgClick(i)} alt='' />
                        </div>
                    })}
                </div>
            </div>
            <div className="product-informations">

                <div className="product-descprition">
                    <div className="section-title"> Specifications </div>
                    {product.description}
                </div>
                <div className="product-price">
                    <div className="section-title"> Price </div>
                    {product.price} DT
                </div>
                <div className="product-order">
                    <div className="section-title"> Order </div>
                    <div className="order-quantity">
                        <label>
                            Quantity :
                        </label>
                        <input type="number" min={0} max={10} value={orderQty} onChange={(e) => setOrderQty(e.target.value)} />
                    </div>
                    {orderQty !== 0 ? <button onClick={onAddProductToCartClick}>
                        Add To Cart
                    </button> : <button disabled title="Please specify the quantity to order"> Add To Cart </button>}
                </div>
            </div>
        </div>




    </div>;
}

export default ProductDisplay;