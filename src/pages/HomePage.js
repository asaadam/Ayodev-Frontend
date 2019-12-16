import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './HomePage.css';

export default function HomePage() {


  let [judul,setJudul]=useState(null);

 async function getData(){
   let data = 'Halo'
   data = await Axios.get('http://www.mocky.io/v2/5de11264320000620e809174?mocky-delay=4000ms')
    setJudul(data.data.Content);
  }

  getData();

  return (
    <div>
    {judul ?   <h1>{judul}</h1> :<div class="loader"></div> }
      <Link to='/login'>
        <button >Login</button>
      </Link>
      <Link to='/register'>
        <button>Register</button>
      </Link>
    </div>
  )

}
