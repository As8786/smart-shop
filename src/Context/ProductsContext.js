import React, { useReducer, useState, createContext, useContext } from 'react';

import { products } from "../data/products"
import { FiltersContext } from "./FiltersContext"
import * as productsActions from "../actions/productsActions"
import { regExpLiteral } from '@babel/types';

export let ProductsContext = createContext()



let brandsList = []
products.map(el => brandsList.indexOf(el.brand) === -1 && brandsList.push(el.brand))

let categoriesList = []
products.map(el => categoriesList.indexOf(el.categorie) === -1 && categoriesList.push(el.categorie))






let ProductsProvider = props => {

    let { filtersValues } = useContext(FiltersContext)

    let productsReducer = (state = { products, brandsList, categoriesList }, action) => {
        switch (action.type) {
            case productsActions.FILTER_PRODCUT_LIST:
                return {
                    products: products.filter(el => {
                        if (filtersValues.brand !== "") {
                            if (el.brand !== filtersValues.brand) return ""
                        }
                        if (filtersValues.categorie !== "") {
                            if (el.categorie !== filtersValues.categorie) return ""
                        }
                        if (filtersValues.price[0] !== 0 || filtersValues.price[1] !== 8000) {
                            if (el.price < filtersValues.price[0] || el.price > filtersValues.price[1]) return ""
                        }
                        if (filtersValues.search !== "") {
                            let searchVal = new RegExp(filtersValues.search, "gi")
                            if (el.name.search(searchVal) === -1) return
                        }
                        return el
                    }),
                    brandsList,
                    categoriesList
                }
            default:
                return state
        }
    }

    let [productsList, dispatchProductsActions] = useReducer(productsReducer, { products, brandsList, categoriesList })



    return <ProductsContext.Provider value={{ productsList, dispatchProductsActions }}>
        {props.children}
    </ProductsContext.Provider>
}


export default ProductsProvider
