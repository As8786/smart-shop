import React from 'react';
import { Link } from "react-router-dom"

import "./style.css"

const ProductItemDisplay = (props) => {
    let { product } = props

    return <Link to={`/product/${product.name}`} >
        <div className="product-item-display-container">
            <div className='product-item-display-container-img-container'>
                <img src={`./imgs/${product.imgs[0]}.jpg`} alt='' />
            </div>
            <div className="product-item-display-container-product-name">
                {product.name}
            </div>
            <div className="product-item-display-container-product-desc">
                {product.description}
            </div>
            <div className="product-item-display-container-product-price">
                {`Price : ${product.price} DT`}
            </div>
        </div>
    </Link>
}

export default ProductItemDisplay;