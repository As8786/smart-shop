import React, { useState } from 'react'
import { Link } from "react-router-dom"

import "./style.css"


const LogIn = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    return (<div className="login-container">
        <div className="title"> LOG IN  </div>
        <div className="inputs-container">
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
            <div className="link-container">
                <Link to="/register"> Create Account </Link>

                <Link to="/forget-password"> Forgot Password? </Link>
            </div>
        </div>
        <div className="btn-container">
            {email && password ? <button onClick={() => alert('hellooo')}> LOG IN </button> : <button disabled style={{ cursor: "not-allowed" }}> LOG IN </button>}
        </div>
    </div>);
}

export default LogIn;