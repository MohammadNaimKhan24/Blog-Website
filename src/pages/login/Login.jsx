import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

 const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                 <label>Email</label>
                 <input type="text" placeholder="Enter your email..." />
                 <label>Password</label>
                 <input type="password" placeholder="Enter your password..." />
                 <button className="loginButton" onClick={(e) => e.preventDefault()}>Login</button>
                 <button className="loginRegisterButton">
                     <Link style={{textDecoration: "none", color: "inherit"}} to="/register">Register</Link>
                 </button>
            </form>
        </div>  
    )
}
export default Login;