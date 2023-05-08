// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./Login";
// import { Register } from "./Register";
import LoginPage from "./loginpage";
import Home from "./Components/temp_home/home";
import { Routes ,Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import FavList from "./Components/FavList/FavList";
import SearchResults from "./Components/Search Results Page/SearchResults";
import RegisterPage from "./RegisterPage";

function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/favlist" element={<FavList/>}/>
        <Route path="/search-results" element={<SearchResults />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}


export default App;