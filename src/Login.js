import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";  // Corrected useNavigate import
import ecommlogo from './assets/ecomm.png';
import './Login.css';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './firebase';  // Import necessary functions

function Login() {
  const navigate = useNavigate();  // Corrected useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redirect to home after successful sign in
        navigate('/');
      })
      .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redirect to home after successful registration
        navigate('/');
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className='login-page'>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <img className="logo-login" src={ecommlogo} alt="" />
        </div>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail </h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-email'
          />

          <h5>Password :</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-password'
          />

          <button type='submit' className="login" onClick={SignIn}>Sign In</button>
        </form>
        <p>By using this service, you agree to comply with our Terms of Service and Privacy Policy. Please read them carefully before proceeding.</p>
        <button className="signup" onClick={register}>Create your ECommWorld account</button>
      </div>
    </div>
  )
}

export default Login;
