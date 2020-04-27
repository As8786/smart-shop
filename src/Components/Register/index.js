import React, { useState } from 'react'

import './style.css'


const Register = () => {

    let [lastName, setLastName] = useState('')
    let [firstName, setFirstName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')


    const activeSignUpBtn = () => {
        return email && lastName && firstName && password && password === confirmPassword
    }

    const signUpBtnInformation = () => {
        return password !== "" && confirmPassword !== password ? "Please to check password and confirm password inputs values, they are not equal" : "Please to fill empty inputs"
    }

    return (<div className="register-container">
        <div className="title"> Register  </div>

        <div className="inputs-container">
            <div className="name-inputs">
                <div className="firstname-input">
                    <label>
                        First Name
                </label>
                    <input onChange={e => {
                        setFirstName(e.target.value)

                    }} value={firstName} />
                </div>
                <div className="lastname-input">
                    <label>
                        Last Name
                </label>
                    <input onChange={e => {
                        setLastName(e.target.value)

                    }} value={lastName} />
                </div>

            </div>
            <div className="input-item">
                <label>
                    Email
                </label>
                <input onChange={e => {
                    setEmail(e.target.value)

                }} value={email} />
            </div>
            <div className="input-item">
                <label>
                    Password
                </label>
                <input type="password" onChange={e => {
                    setPassword(e.target.value)

                }} value={password} />
            </div>
            <div className="input-item">
                <label>
                    Confirm Password
                </label>
                <input type="password" onChange={e => {
                    setConfirmPassword(e.target.value)

                }} value={confirmPassword} />
            </div>

        </div>
        <div className="btn-container">
            {activeSignUpBtn() ? <button onClick={() => alert('hellooo')}> SIGN UP </button> : <button disabled style={{ cursor: "not-allowed" }} title={signUpBtnInformation()}> SIGN UP </button>}
        </div>
    </div>);
    ;
}

export default Register;