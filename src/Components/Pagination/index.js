import React, { useContext } from 'react';

import './style.css'
import { PaginationContext } from '../../Context/PaginationContext';

const Pagination = props => {
    let { pages } = props

    let { actualPage, setActualPage } = useContext(PaginationContext)

    const onPaginationClick = action => {
        switch (action.type) {
            case "prev":
                return actualPage > 1 ? setActualPage(actualPage - 1) : ""
            case "next":
                return actualPage < pages ? setActualPage(actualPage + 1) : ""
            case "number":
                return actualPage !== action.pageToGo ? setActualPage(action.pageToGo) : ""
            default:
                return ""
        }
    }


    return <div className="pagination-container">
        <div className="pagination-item" title="Previous" onClick={() => onPaginationClick({ type: "prev" })} > 👆 </div>
        {[... new Array(pages).keys()].map((el, i) => {
            return <div key={i}
                className={actualPage === i + 1 ? "active-pagination-item" : "pagination-item"}
                title={actualPage === i + 1 ? "actual page" : `page number ${i + 1}`}
                onClick={() => onPaginationClick({ type: "number", pageToGo: i + 1 })}
            >
                <span> {i + 1} </span>
            </div>
        })}

        <div className="pagination-item" title='Next' onClick={() => onPaginationClick({ type: "next" })}> 👇 </div>

    </div>
}

export default Pagination;