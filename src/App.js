import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import HomePage from "./Pages/HomePage";


import 'react-toastify/dist/ReactToastify.css'
import AdminHome from "./Pages/AdminHome";
import AdminLogin from "./Pages/AdminLoginPage";
import ProfilePage from "./Pages/ProfilePage";
import Adduers from "./Pages/Adduers";
import EditUserPage from "./Pages/EditUserPage";



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        < Route path="/login" Component={LoginPage}/>
        < Route path="/signup" Component={SignupPage}/>
        < Route path="/admin" Component={AdminHome} />
        < Route path="/admin/login" Component={AdminLogin} />
        <Route path="/profile" Component={ProfilePage}/>
        <Route path="/admin/add-user" Component={Adduers}/>
        <Route path="/admin/edit-user" Component={EditUserPage}/>
      </Routes>
    </div>
  );
}

export default App;
