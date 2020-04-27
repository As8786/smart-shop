import React, { createContext, useState } from "react"

export const ModalContext = createContext('')

const ModalProvider = props => {
    let [displayModal, setDisplayModal] = useState(defaultState)

    return <ModalContext.Provider value={{ displayModal, setDisplayModal }}>
        {props.children}
    </ModalContext.Provider>

}

export default ModalProvider

const defaultState = {
    display: false,
    text: ""
}