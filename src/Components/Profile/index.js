import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom"


import "./style.css"
import { ProfileContext } from '../../Context/ProfileContext';
import { OrderHistoryContext } from '../../Context/OrderHistory';
import { ModalContext } from "../../Context/ModalContext"

const UserProfile = () => {

    let { userProfile, setUserProfile } = useContext(ProfileContext)
    let { ordersHistoryList } = useContext(OrderHistoryContext)
    let { displayModal, setDisplayModal } = useContext(ModalContext)

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [phone, setPhone] = useState('')
    let [address, setAddress] = useState('')
    let [name, setName] = useState('')
    let [profileImg, setProfileImg] = useState('')


    let [emailInput, setEmailInput] = useState(false)
    let [passwordInput, setPasswordInput] = useState(false)
    let [phoneInput, setPhoneInput] = useState(false)
    let [addressInput, setAddressInput] = useState(false)
    let [nameInput, setNameInput] = useState(false)

    useEffect(() => {
        let { name, email, password, phone, address } = userProfile
        setName(name)
        setEmail(email)
        setAddress(address)
        setPhone(phone)
        setPassword(password)
    }, [])

    const inputs = [
        { title: "Name", value: name, func: setName, activeInputFunc: setNameInput, validator: nameInput },
        { title: "Address", value: address, func: setAddress, activeInputFunc: setAddressInput, validator: addressInput },
        { title: "Email", value: email, func: setEmail, activeInputFunc: setEmailInput, validator: emailInput },
        { title: "Phone", value: phone, func: setPhone, activeInputFunc: setPhoneInput, validator: phoneInput },
    ]

    useEffect(() => {
        renderNewProfileImg()
    }, [profileImg])

    const onUpdateProfileImgClick = () => {
        const fileElem = document.getElementById("fileElem")
        fileElem.click()
    }

    const renderNewProfileImg = () => {
        if (profileImg !== "") {
            const reader = new FileReader();
            const img = document.getElementById('img-profile')
            reader.addEventListener("load", function () {
                img.setAttribute('src', this.result)
            })
            reader.readAsDataURL(profileImg)
        }
    }

    const onEditInputClick = (activeInputFunc, validator) => {
        setNameInput(false)
        setAddressInput(false)
        setEmailInput(false)
        setPhoneInput(false)

        return activeInputFunc(!validator)
    }

    const displayUpdateProfileBtn = () => {
        return email !== userProfile.email || address !== userProfile.address || name !== userProfile.name || phone !== userProfile.phone
            ? <button onClick={() => onButtonEditProfileClick()}> UPDATE PROFILE </button>
            : ""
    }

    const onButtonEditProfileClick = () => {
        setNameInput(false)
        setAddressInput(false)
        setEmailInput(false)
        setPhoneInput(false)

        //Display the modal
        setDisplayModal({
            text: `${name} profile was updated`,
            display: true
        })
    }


    return <div className="user-profile-container">
        <div className="user-profile-content">
            <div className="profile-img-container">
                <div className="gradient"  >
                    <input id='fileElem' type="file" accept="image/png, image/jpeg" onChange={e => setProfileImg(e.target.files[0])} style={{ display: "none" }} />
                    <img src="./imgs/camera.jpg" alt="" onClick={onUpdateProfileImgClick} title="Modify profile image" />
                </div>
                <img src="./imgs/userProfile.jpg" alt="" id='img-profile' />
            </div>
            <div className="user-name">
                FirstName
                    <br />
                <span> UserName </span>
            </div>
            <div className="user-imformations">
                <div className="section-title">
                    About
                </div>
                {inputs.map((el, i) => {
                    return <div className="user-imformations-item">
                        <label>
                            {el.title}
                        </label>
                        <div className="user-profile-input">

                            <img src="./imgs/edit.jpg" onClick={() => onEditInputClick(el.activeInputFunc, el.validator)} alt="Click to edit content" title="Click to edit content" />
                            {el.validator ?
                                <input onChange={e => el.func(e.target.value)} value={el.value} id="editable-input" />
                                : <input value={el.value} disabled onClick={() => el.activeInputFunc(!el.validator)} />
                            }

                        </div>
                    </div>
                })}
                {displayUpdateProfileBtn()}
            </div>
            <div className="user-orders-stat">
                <div className="user-orders-stat-item">
                    <span> 17 </span>
                    Buyed Orders
               </div>
                <div className="user-orders-stat-item">
                    <span> 77  </span>
                    Buyed Products
               </div>
                <div className="user-orders-stat-item">
                    <span> 7777 Dt </span>
                    Purchase Value
               </div>
            </div>
        </div>
        <Link to="/order-history" id="orders-hystory-link"> Orders History </Link>
    </div>
}

export default UserProfile;


