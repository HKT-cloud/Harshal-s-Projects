import React, { useState } from 'react';
import Content from './Content';
const Form = () => {

  const[log,setlog]=useState(false)


  const loginvali = () => {
    const email = document.getElementById("email12").value;
    const password = document.getElementById("password12").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

if (!email) {
      alert("Please enter your Email ID");
      return;
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid Email address");
      return;
    }

    if (!password) {
      alert("Please enter your Password");
      return;
    } else if (!pwdRegex.test(password)) {
      alert("Password must be at least 8 characters long and include letters, numbers, and special characters");
      return;
    }
    setlog(true)


  };

  if(log)
    {
      return <Content/>
    } 

  return  (
    <div className="fullscreen-wrapper">
      <div id="login">
        <h1>Login / Sign Up</h1>
        <input type="text" id="email12" placeholder="Email 📧"/>
        <input type="password" id="password12" placeholder="Password 🔒"  />
        <button onClick={()=>{loginvali()}}>Login</button>
        <div className="links">
          <a href="#">Create Account</a> | <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Form;
