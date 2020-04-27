import React, { useState, useContext, useEffect } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';

import * as filtersActions from "../../actions/filtersActions"
import * as producstActions from "../../actions/productsActions"
import { FiltersContext } from "../../Context/FiltersContext"
import { ProductsContext } from '../../Context/ProductsContext';

const ProductsFilters = () => {

    let { productsList, dispatchProductsActions } = useContext(ProductsContext)

    let [priceFilterVal, setPriceFilterVal] = useState([0, 8000])
    let [brandFilterVal, setBrandFilterVal] = useState("")
    let [categorieFilterVal, setCategorieFilterVal] = useState("")
    let [searchFilterVal, setSearchFilterVal] = useState('')

    let { dispatchNewFiltersValues } = useContext(FiltersContext)

    useEffect(() => {
        handleBrandFilterChange(brandFilterVal)
    }, [brandFilterVal])

    useEffect(() => {
        handleCategorieFilterChange(categorieFilterVal)
    }, [categorieFilterVal])

    useEffect(() => {
        handlePriceChange(priceFilterVal)
    }, [priceFilterVal])

    useEffect(() => {
        handleSearchInputChange(searchFilterVal)
    }, [searchFilterVal])


    let filterArr = [
        { name: "Categorie", choices: productsList.categoriesList.sort(), func: setCategorieFilterVal, value: categorieFilterVal },
        { name: "Brand", choices: productsList.brandsList.sort(), func: setBrandFilterVal, value: brandFilterVal },
    ]

    const handleSliderChange = (event, newValue) => {
        setPriceFilterVal(newValue);
    };

    const handleCategorieFilterChange = async value => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_CATEGORIE_FILTER_VALUE,
            payload: value
        })

        dispatchProductsActions({
            type: producstActions.FILTER_PRODCUT_LIST
        })

    }

    const handleBrandFilterChange = async value => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_BRAND_FILTER_VALUE,
            payload: value
        })
        dispatchProductsActions({
            type: producstActions.FILTER_PRODCUT_LIST
        })
    }

    const handlePriceChange = async value => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_PRICE_FILTER_VALUE,
            payload: value
        })
        dispatchProductsActions({
            type: producstActions.FILTER_PRODCUT_LIST
        })
    }

    const handleSearchInputChange = async value => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_SEARCH_FILTER_VALUE,
            payload: value
        })
        dispatchProductsActions({
            type: producstActions.FILTER_PRODCUT_LIST
        })
    }



    const onInitialFiltersClick = () => {
        dispatchNewFiltersValues({
            type: filtersActions.REMOVE_FILTERS_VALUES
        })
        dispatchProductsActions({
            type: producstActions.UNFILTER_PRODCUT_LIST
        })
        setCategorieFilterVal('')
        setBrandFilterVal('')
        setPriceFilterVal([0, 8000])
        setSearchFilterVal('')
    }

    return <div className="filters">
        <div className="search">
            <label> Search  </label>
            <input onChange={e => setSearchFilterVal(e.target.value)} value={searchFilterVal} />
        </div>
        <div className="filters-container" >
            <span className="filters-part-name"> Filters </span>
            <div className="filters-list">
                {filterArr.map((el, i) => {
                    return <div className={i % 2 !== 0 ? "filter-item-unpair" : "filter-item-pair"} key={i}>
                        <label> {el.name} </label>
                        <FormControl className="select-container" >
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={el.value}
                                onChange={(e) => { el.func(e.target.value) }}
                            >
                                {el.choices.map((val, k) => <MenuItem value={val} key={k} >{val}</MenuItem>
                                )}

                            </Select>
                        </FormControl>

                    </div>

                })}


                <div className="filter-item-pair">
                    <label> Price </label>
                    <Slider
                        className="select-container"
                        value={priceFilterVal}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        max={8000}
                    />
                </div>
                {categorieFilterVal !== "" || brandFilterVal !== "" || priceFilterVal[0] !== 0 || priceFilterVal[1] !== 8000 ?
                    <div className="remove-filter-btn"> <button onClick={() => onInitialFiltersClick()}> Remove Filters </button></div>
                    : ""}
            </div>
        </div>
    </div>
}

export default ProductsFilters;