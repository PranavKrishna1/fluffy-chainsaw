import React, { useState } from "react";
import { auth } from "./firebase";
import {useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.css';

const Register=({setUser}) => {
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    // const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            
            console.log(email,password)
            await createUserWithEmailAndPassword(auth,email,password)
            .then((userCre) => {
                console.log(userCre)
            })
        }
        catch(error){
            console.log(error);
            // alert(error);
        }
    };
    
    return (
        <div className="wraping">
            <h2>Registration</h2>
            <form onSubmit={handleRegister}>
                <div className="input-box">    
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>  <FaUser className='icon' />
                </div>
            
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> <FaLock className='icon' />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register