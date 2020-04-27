import React, { useContext } from 'react';

import "./style.css"
import { ModalContext } from "../../Context/ModalContext"


const Modal = () => {

    let { displayModal, setDisplayModal } = useContext(ModalContext)

    return <div className="modal-container">
        <div className='modal-content'>
            <div className="modal-text"> {displayModal.text} successfully</div>
            <button onClick={() => setDisplayModal({
                display: false,
                text: ""
            })}> Close
            </button>
        </div>
    </div>
}

export default Modal;