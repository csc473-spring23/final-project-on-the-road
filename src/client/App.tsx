// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./Login";
// import { Register } from "./Register";
import LoginPage from "./loginpage";
import Home from "./home";
import { Routes ,Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";


function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<LoginPage/>}/>
      </Routes>
    </>
  );
}


export default App;
