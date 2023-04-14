// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./Login";
// import { Register } from "./Register";
import LoginPage from "./loginpage";
import Home from "./home";
import { Routes ,Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import FavList from "./FavList";

function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}


export default App;
