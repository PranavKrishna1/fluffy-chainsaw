import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { auth } from "./firebase";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import { getDefaultNormalizer } from "@testing-library/react";
import { signInWithEmailAndPassword } from "firebase/auth";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth ,email, password);
            console.log(email + " " + password);
            navigate("/nextpage");
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="register-link">
                <p>Don't have an account? 
                    {/* <Link to'='/register'>Register</Link> */}
                    <NavLink to="/register"> Register </NavLink>
                </p>
            </div>
        </div>
    )
};

export default LoginForm;
