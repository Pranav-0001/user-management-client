import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import HomePage from "./Pages/HomePage";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        < Route path="/login" Component={LoginPage}/>
        < Route path="/signup" Component={SignupPage}/>
      </Routes>
    </div>
  );
}

export default App;
