import React, { useState, useContext, useEffect } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';

import { DatePicker } from '@atlaskit/datetime-picker';


import * as filtersActions from "../../actions/filtersActions"
import * as ordersHistoryActions from "../../actions/ordersHistoryActions"

import { FiltersContext } from "../../Context/FiltersContext"
import { OrderHistoryContext } from '../../Context/OrderHistory';

const OrdersFilters = () => {

    let { dispatchNewFiltersValues } = useContext(FiltersContext)
    let { dispatchOrdersHistoryList } = useContext(OrderHistoryContext)

    let [amountFilterVal, setAmountFilterVal] = useState([0, 20000])
    let [selectedMinDate, setSelectedMinDate] = useState("")
    let [selectedMaxDate, setSelectedMaxDate] = useState("")
    let [slectedOrderNumber, setSlectedOrderNumber] = useState('')
    let [statusFilterVal, setStatusFilterVal] = useState('')

    useEffect(() => {
        handleOrderNumberChange()
    }, [slectedOrderNumber])

    useEffect(() => {
        handleStatusChange()
    }, [statusFilterVal])

    useEffect(() => {
        handleDateChange()
    }, [selectedMinDate, selectedMaxDate])

    useEffect(() => {
        handleAmountChange()
    }, [amountFilterVal])


    const handleOrderNumberChange = async () => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_ORDER_NUMBER_FILTER_VALUE,
            payload: slectedOrderNumber
        })
        dispatchOrdersHistoryList({
            type: ordersHistoryActions.FILTER_ORDERS_HISTORY
        })
    }

    const handleStatusChange = async () => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_ORDER_STATUS_FILTER_VALUE,
            payload: statusFilterVal
        })
        dispatchOrdersHistoryList({
            type: ordersHistoryActions.FILTER_ORDERS_HISTORY
        })
    }

    const handleDateChange = async () => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_ORDER_DATE_FILTER_VALUE,
            payload: [selectedMinDate, selectedMaxDate]
        })
        dispatchOrdersHistoryList({
            type: ordersHistoryActions.FILTER_ORDERS_HISTORY
        })
    }

    const handleAmountChange = async () => {
        await dispatchNewFiltersValues({
            type: filtersActions.SET_ORDER_AMOUNT_FILTER_VALUE,
            payload: amountFilterVal
        })
        dispatchOrdersHistoryList({
            type: ordersHistoryActions.FILTER_ORDERS_HISTORY
        })
    }

    const onInitialFiltersClick = () => {
        setAmountFilterVal([0, 20000])
        setSelectedMaxDate('')
        setSelectedMinDate('')
        setSlectedOrderNumber('')
        setStatusFilterVal('')

        dispatchOrdersHistoryList({
            type: ordersHistoryActions.UNFILTER_ORDERS_HISTORY
        })
    }

    const handleSliderChange = (e, val) => {
        setAmountFilterVal(val)
    }

    return <div className="filters">

        <div className="filters-container" >
            <span className="filters-part-name"> Filters </span>
            <div className="filters-list">

                <div className="filter-item-pair">
                    <label> By Number </label>
                    <input value={slectedOrderNumber} onChange={(e) => setSlectedOrderNumber(e.target.value)} />
                </div>
                <div className="filter-item-unpair" >
                    <label> Status </label>
                    <FormControl className="select-container" >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={statusFilterVal}
                            onChange={(e) => { setStatusFilterVal(e.target.value) }}
                        >
                            {statusFilterChoices.map((el, k) => <MenuItem value={el.val} key={k} >{el.designation}</MenuItem>
                            )}

                        </Select>
                    </FormControl>

                </div>
                <div className="filter-item-pair">
                    <label> By Date </label>
                    <div className="date-picker-container">

                        <DatePicker
                            className="timepicker"
                            value={selectedMinDate}
                            onChange={(e) => setSelectedMinDate(e)}
                            name='From'
                            timeIsEditable={true}
                        />
                        <DatePicker
                            className="timepicker"
                            value={selectedMaxDate}
                            onChange={(e) => setSelectedMaxDate(e)}
                            title='Before'
                            timeIsEditable={true}

                        />
                    </div>
                </div>


                <div className="filter-item-unpair">
                    <label> By Amount </label>
                    <Slider
                        className="select-container"
                        value={amountFilterVal}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        max={20000}
                    />
                </div>
                {selectedMaxDate !== "" || selectedMinDate !== "" || statusFilterVal !== "" || slectedOrderNumber !== "" || amountFilterVal[0] !== 0 || amountFilterVal[1] !== 20000 ?
                    <div className="remove-filter-btn"> <button onClick={() => onInitialFiltersClick()}> Remove Filters </button></div>
                    : ""}
            </div>
        </div>
    </div>
}

export default OrdersFilters;


const statusFilterChoices = [
    { val: true, designation: "Delivred" }, {
        val: false, designation: "Not Delivred"
    }]