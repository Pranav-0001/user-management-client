import React, { useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Signup() {
  useEffect(()=>{
    let user=localStorage.getItem('user')
    if(user){
      navigate('/')
    }
  },[])
  const navigate = useNavigate()
  const [user,setUser]=useState({
    username:'',
    password:''
  })
  const generateError = (err) => toast.error(err, {
    position: "bottom-right"
})
  const handleSignup=async (e)=>{
    e.preventDefault()
    const { data } = await axios.post("http://localhost:5000/register", { ...user}, { withCredentials: true })
    console.log(data);
    if (data) {
      if (data.errors) {
          const { username, password } = data.errors
          if (username) generateError(username)
          else if (password) generateError(password)
      } else {
          navigate("/login")
      }
  }
  }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'90vh'}}>
        <form onSubmit={handleSignup} className="form card">
  <div className="card_header">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
    </svg>
    <h1 className="form_heading">Sign Up</h1>
  </div>
  <div className="field">
    <label for="username">Username</label>
    <input className="input" name="username" type="text" placeholder="Username" id="username" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
  </div>
  
  <div className="field">
    <label for="password">Password</label>
    <input className="input" name="password" type="password" placeholder="Password" id="password" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/>
  </div>
  <div className="field">
    <button type='submit' className="button">Register</button>
  </div>
</form>
<ToastContainer />
    </div>
  )
}

export default Signup