import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.Log(email, pass)
    }

    return (
        <div className="auth-form-container">
            <h2 style={{color:'#C0C0C0'}}>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                {(props.error != "") ? (<div className="error">{props.error}</div>) : ("")}
                <label style={{color:'white'}} htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label style={{color:'white'}} htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
