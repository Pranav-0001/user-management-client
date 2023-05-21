import React from 'react'
import './Edit.css'
function EditUser() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
                <form className="form card-1">
                    <div className="card_header">
                        
                        <h1 className="form_heading">Edit User</h1>
                    </div>
                    <div className="field">
                        <label for="username">Username</label>
                        <input className="input" name="username" type="text" placeholder="Username" id="username" />
                    </div>

                    
                    <div className="field">
                        <button type='submit' className="button">Update</button>
                    </div>
                </form>

            </div>
    </div>
  )
}

export default EditUser
