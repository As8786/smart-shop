import React, { createContext, useState } from 'react'

export let PaginationContext = createContext()




let PaginationProvider = props => {

    let [actualPage, setActualPage] = useState(1)

    return <PaginationContext.Provider value={{ actualPage, setActualPage }} >
        {props.children}
    </PaginationContext.Provider>
}

export default PaginationProvider