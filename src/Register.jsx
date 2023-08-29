import React, { useState } from "react";


export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 style={{color:"#C0C0C0"}}>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label style={{color:'white'}}>Full Name</label>
                <input value={name} name = "name" id = "name" placeholder="e.g. Jane Doe"></input>
                <label style={{color:'white'}} htmlFor="Email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label style={{color:'white'}} htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}