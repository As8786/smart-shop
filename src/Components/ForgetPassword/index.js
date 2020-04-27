import React, { useState } from 'react';

import "./style.css"


const ForgetPassword = () => {

    let [email, setEmail] = useState('')

    return <div className="forget-password-container">
        <div className="title">  Forgot your password? </div>
        <input placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
        {email ? <button> Send me reset password instructions </button> : <button disabled style={{ cursor: "not-allowed" }}> Send me reset password instructions </button>}
    </div>
}

export default ForgetPassword;