import React, { useContext, useState, useEffect } from 'react'

import "./style.css"
import { OrderHistoryContext } from '../../Context/OrderHistory';
import CarrouselProductItem from './CarrouselProductItem';

const OrderDetails = props => {
    let { id } = props

    let { ordersHistoryList } = useContext(OrderHistoryContext)

    let [currentOrder, setCurrentOrder] = useState({ products: [], number: "" })
    let [carrouselProducts, setCarrouselProducts] = useState([])

    useEffect(() => {
        setCurrentOrder(ordersHistoryList.filter(el => el.number == id)[0])
        setCarrouselProducts(ordersHistoryList.filter(el => el.number == id)[0].products)
    }, [])

    const onCarrouselAnchorClick = value => {
        let carrouselDiv = document.getElementById('carrousel-items')
        let sLeft = carrouselDiv.scrollLeft;

        return value === "prev" ? carrouselDiv.scrollTo({
            left: sLeft - 315,
            behavior: "smooth"
        }) : carrouselDiv.scrollTo({
            left: sLeft + 315,
            behavior: "smooth"
        })
    }

    return <div className="order-details-container">
        <div className="left" >
            <div className="page-title" >
                ORDER DETAILS
            </div>
            <div className="order-general-infos">
                <div className="section-title">
                    Infos
                </div>
                <div className="info-items-container">
                    {
                        orderInfosTab.map((el, i) => {
                            return <div className="info-item" key={i}>
                                <div className="title">
                                    {el.title}
                                </div>
                                {currentOrder[el.val]}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        <div className="right">
            <div className="order-products-carrousel-container">
                <div className="section-title">
                    Order Products
                </div>
                <div className="order-products-carrousel">
                    <span className="anchor" onClick={() => onCarrouselAnchorClick("prev")} > ≪ </span>
                    <div className="carrousel-items" id="carrousel-items">
                        {carrouselProducts.map((el, i) => {
                            return <CarrouselProductItem product={el} key={i} index={i} />
                        })}
                    </div>
                    <span className="anchor" onClick={() => onCarrouselAnchorClick("next")} >  ≫ </span>
                </div>
            </div>
            <div className="order-products-table-container">
                <div className="section-title">
                    Details
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                N°
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Ordered Qty
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Total Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrder.products.map((el, i) => {
                            return <tr key={i}>
                                <th> {i + 1} </th>
                                <th> {el.name} </th>
                                <th> {el.orderQty} </th>
                                <th> {el.price} </th>
                                <th> {el.price * el.orderQty} </th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default OrderDetails;


let orderInfosTab = [
    {
        title: "ORDER NUMBER",
        val: "number"
    },
    {
        title: "ORDER AMOUNT",
        val: "amount"
    },
    {
        title: "ORDER DATE",
        val: "date"
    },
    {
        title: "DELIVERY DATE",
        val: "deliveryDate"
    },
]