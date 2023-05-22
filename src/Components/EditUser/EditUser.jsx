import React, { useState } from 'react'
import './Edit.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
function EditUser() {
  const navigate= useNavigate()
  const { name, id } = useSelector(state => state.admin)
  const [username,setUsername] = useState(name)

  const generateError = (err) => toast.error(err, {
    position: "bottom-right"
  })
  


  const handleUserEdit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/admin/edit-user',{username,id},{withCredentials:true}).then((res)=>{
      let data= res.data
      if(data.errors){
        const {username} = data.errors
        if(username) generateError(username) 
      }else{
        navigate('/admin')
      }
    })
  }
  
  console.log(username);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
        <form className="form card-1" onSubmit={handleUserEdit}>
          <div className="card_header">

            <h1 className="form_heading">Edit User</h1>
          </div>
          <div className="field">
            <label for="username">Username</label>
            <input className="input" value={username}  name="username" type="text" placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)} />
          </div>


          <div className="field">
            <button type='submit' className="button">Update</button>
          </div>
        </form>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default EditUser
