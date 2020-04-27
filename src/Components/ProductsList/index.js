import React, { useContext, useEffect } from 'react';

import "./style.css"
import ProductItemDisplay from '../ProductItemDisplay';
import Pagination from '../Pagination';
import { ProductsContext } from '../../Context/ProductsContext';
import ProductsFilters from './Filters';
import { PaginationContext } from "../../Context/PaginationContext"

const ProductsListDisplay = () => {

    let { productsList } = useContext(ProductsContext)
    let { actualPage, setActualPage } = useContext(PaginationContext)

    useEffect(() => {
        return () => setActualPage(1)
    }, [])

    return <div className="productsList-container">
        <div className="productsList-container-left-part">
            <div className="title"> PRODUCTS  </div>
            < ProductsFilters />
        </div>
        <div className="productsList-container-right-part">
            <div className="products-display">
                {productsList.products.length > 0 ? productsList.products.map((el, i) => (actualPage - 1) * 12 < i + 1 && i + 1 <= actualPage * 12 ? <ProductItemDisplay key={i} product={el} /> : "")
                    : <div className="empty-search"> No Corresponding Products <p> Please To Refine Your Selection  </p> </div>}
            </div>
            <div className="pagination-container">
                <Pagination pages={productsList.products.length % 12 === 0 ? productsList.products.length / 12 : Math.floor(productsList.products.length / 12) + 1} />
            </div>
        </div>

    </div>
}


export default ProductsListDisplay;