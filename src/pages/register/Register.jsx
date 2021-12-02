import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
    return (
        <div className="register">
             <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" placeholder="Enter your username..." />
                 <label>Email</label>
                 <input type="text" placeholder="Enter your email..." />
                 <label>Password</label>
                 <input type="password" placeholder="Enter your password..." />
                 <button className="registerButton">
                     <Link style={{textDecoration: "none", color: "inherit"}} to="/login">Register</Link>
                 </button>
                 
            </form>
        </div>
    )
}
export default Register;