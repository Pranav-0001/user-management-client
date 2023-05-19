import React from 'react'
import './Login.css'
function Login() {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'90vh'}}>
        <form className="form card">
  <div className="card_header">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
    </svg>
    <h1 className="form_heading">Sign in</h1>
  </div>
  <div className="field">
    <label for="username">Username</label>
    <input className="input" name="username" type="text" placeholder="Username" id="username" />
  </div>
  <div className="field">
    <label for="password">Password</label>
    <input className="input" name="user_password" type="password" placeholder="Password" id="password" />
  </div>
  <div className="field">
    <button className="button">Login</button>
  </div>
</form>
    </div>
  )
}

export default Login