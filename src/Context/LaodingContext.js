import React, { createContext, useState } from "react"


export const LoadingValueContext = createContext("")

const LoadingValueProvider = props => {

    let [loadingValue, setLoadingValue] = useState(true)

    return <LoadingValueContext.Provider value={{ loadingValue, setLoadingValue }}>
        {props.children}
    </LoadingValueContext.Provider >
}


export default LoadingValueProvider