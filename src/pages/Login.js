import React, { useState,Fragment } from 'react';
import './Login.css';

export default function Login() {

  let [usernameError,setUsernameError]=useState(false);
  function checkUsername (data){
    console.log(data.length);
    if (data.charAt(0) != '@'){
      setUsernameError(true);
    }
     if (data.length === 0){
      setUsernameError(false);
    }
    if (data.charAt(0) == '@'){
      setUsernameError(false);
    }
  }

  return (
      <div className='body'>
        <h3>Login</h3>
        <div className='box'>
        <form className='form'>
       {usernameError?<h3 style={{color:'red'}}>Tolong pakai @ ya</h3>:<Fragment/>} 
        <label >
        Input your username
          <input type="text" onChange={data=>checkUsername(data.target.value)}></input>
          </label>
          <label>
          Password
          <input type="password"></input>
          </label>
          <button style={{marginTop:'1rem'}}>Submit</button>
        </form>
        </div>
      </div>

  )
 
}

