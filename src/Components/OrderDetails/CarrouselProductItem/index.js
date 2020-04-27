import React from 'react';

import "./style.css"

const CarrouselProductItem = props => {

    let { product, index } = props

    return <div className="carrousel-product-item-container"  >
        <div className="number"> {index + 1} </div>
        <div className='image-container'>
            <img src={`/imgs/${product.imgs[0]}.jpg`} alt="" />
        </div>
        <div className="infos">
            <div className="product-name"> {product.name} </div>
            <div className="infos-item">
                <div className="title"> Ordered Quantity </div>
                <span> {product.orderQty} </span>   Unity
            </div>
            <div className="infos-item">
                <div className="title"> Unit Price </div>
                <span> {product.price} </span> DT
            </div>
            <div className="infos-item">
                <div className="title"> Total Amount </div>
                <span> {product.price * product.orderQty} </span>  DT
            </div>
        </div>
    </div>
}

export default CarrouselProductItem;