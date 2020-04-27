import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import "./style.css"
import OrdersFilters from './Filters';
import Pagination from '../Pagination';
import { OrderHistoryContext } from '../../Context/OrderHistory';
import { PaginationContext } from '../../Context/PaginationContext';

const OrderHistory = () => {

    let [ordersAmount, setOrdersAmount] = useState(0)
    let [ordersTotalProducts, setOrdersTotalProducts] = useState(0)


    let { ordersHistoryList } = useContext(OrderHistoryContext)
    let { actualPage, setActualPage } = useContext(PaginationContext)

    useEffect(() => {
        return () => setActualPage(1)
    }, [])

    useEffect(() => {
        handleOrdersAmountAndTotalProductsCount()
    }, [ordersHistoryList])


    const handleOrdersAmountAndTotalProductsCount = () => {
        let totalProducts = 0
        let totalAmount = 0
        ordersHistoryList.map(el => {
            totalAmount += el.amount
            totalProducts += el.totalProducts
        })
        setOrdersTotalProducts(totalProducts)
        setOrdersAmount(totalAmount)
    }


    return <div className="order-history-container">
        <div className="left">
            <div className="title"> Order History </div>
            <OrdersFilters />
        </div >
        <div className='right'>
            <div className="stats">
                <div className="section-title"> Orders Statistics  </div>
                <div className="stats-items-containers">
                    <div className='stats-item'>
                        <div className="title"> Total Orders Number </div>
                        <div className='info'>   {ordersHistoryList.length} <span> Orders  </span> </div>
                    </div>
                    <div className='stats-item'>
                        <div className="title"> Total Ordered Products </div>
                        <div className='info'>   {ordersTotalProducts} <span> Products  </span> </div>
                    </div>
                    <div className='stats-item'>
                        <div className="title"> Total Orders Amounts </div>
                        <div className='info'>  {ordersAmount} <span> Dinars  </span> </div>
                    </div>
                </div>
            </div>
            <div className='orders-list'>
                <div className="section-title"> Orders Lists  </div>
                <div className="orders-list-display">
                    <table>
                        <thead>
                            <tr>
                                <th> Order N° </th>
                                <th> Date </th>
                                <th> Amount </th>
                                <th> Status </th>
                                <th>  </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersHistoryList.map((el, i) => {
                                return (actualPage - 1) * 7 < i + 1 && i + 1 <= actualPage * 7 ? <tr key={i} style={{ backgroundColor: (i) % 2 === 0 ? "inherit" : "#f0f0f0" }}>
                                    <th> {el.number} </th>
                                    <th> {el.date} </th>
                                    <th> {el.amount} </th>
                                    <th> {el.status ? "Delivred" : "Undelivred"}  </th>
                                    <th> <Link to={`/order-detail/${el.number}`}> Details </Link> </th>
                                </tr> : ""
                            })}
                        </tbody>
                    </table>
                    <div className="pagination-container">
                        <Pagination pages={ordersHistoryList.length % 7 === 0 ? ordersHistoryList.length / 7 : Math.floor(ordersHistoryList.length / 7) + 1} />
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default OrderHistory;



