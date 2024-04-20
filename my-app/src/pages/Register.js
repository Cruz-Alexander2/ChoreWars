import {useState} from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import './Register.css';

function Register() {

  const [name,setName]=useState("") 
  const [password,setPassword]=useState("") 
  const [email,setEmail]=useState("")  

  function signUp()
  {
        let item={name,password,email}
        console.warn(item)
        
  }
  return (
    <div className="col-sm-6 offset-sm-3">
        <Navbar></Navbar>
        <h1>Registeration Page</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
        <br />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
        <br />
        <button onClick={signUp} className="btn btn-primary">Sign Up</button>
    </div>
  )
}

export default Register