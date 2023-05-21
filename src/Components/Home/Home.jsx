import React, { useEffect } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Home() {
  const navigate=useNavigate()
  useEffect(()=>{
    const token= localStorage.getItem('user')
    // const user = verify ? JSON.parse(verify) : null;
    // if(!user){
    //   navigate('/login')
    // }
    // console.log(user);
    axios.post('http://localhost:5000',{token}).then((res)=>{
      
      if(res.data.token){
        if(res.data.token==='valid'){
          
        }else{
          localStorage.removeItem('user')
          navigate('/login')
        }
      }else{
        navigate('/login')
      }
    })
    
  },[])
  const handleLogout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div>
     <nav className="navbar">

<div className="left">

    <h1>Navbar</h1>

</div>

<div className="right">

    <input type="checkbox" id="check" />

    <label for="check" className="checkBtn">

        <i className="fa fa-bars"></i>

    </label>

    <ul className="list">

       

        <li><Link to={'/profile'}> <i class="fa-solid fa-user fa-bounce" ></i> Profile</Link></li>

        <li><a href=' ' onClick={handleLogout}>Logout</a></li>

    </ul>

</div>

</nav>
    </div>
  )
}

export default Home
