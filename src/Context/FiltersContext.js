import React, { createContext, useReducer } from 'react'
import * as filtersActions from "../actions/filtersActions"


export const FiltersContext = createContext('')

let FilterReducer = (state = defaultFiltersState, action) => {
    switch (action.type) {
        case filtersActions.SET_BRAND_FILTER_VALUE:
            return { ...state, brand: action.payload }
        case filtersActions.SET_CATEGORIE_FILTER_VALUE:
            return { ...state, categorie: action.payload }
        case filtersActions.SET_PRICE_FILTER_VALUE:
            return { ...state, price: action.payload }
        case filtersActions.SET_SEARCH_FILTER_VALUE:
            return { ...state, search: action.payload }
        case filtersActions.SET_ORDER_STATUS_FILTER_VALUE:
            return { ...state, orderStatus: action.payload }
        case filtersActions.SET_ORDER_NUMBER_FILTER_VALUE:
            return { ...state, orderNumber: action.payload }
        case filtersActions.SET_ORDER_DATE_FILTER_VALUE:
            return { ...state, orderDate: action.payload }
        case filtersActions.SET_ORDER_AMOUNT_FILTER_VALUE:
            return { ...state, orderAmount: action.payload }
        default:
            return state
    }
}

let FiltersProvider = props => {

    let [filtersValues, dispatchNewFiltersValues] = useReducer(FilterReducer, defaultFiltersState)

    return <FiltersContext.Provider value={{ filtersValues, dispatchNewFiltersValues }}>
        {props.children}
    </FiltersContext.Provider>
}


export default FiltersProvider


const defaultFiltersState = {
    brand: "",
    categorie: "",
    price: [],
    search: "",
    orderAmount: [],
    orderDate: [],
    orderNumber: "",
    orderStatus: ""
}