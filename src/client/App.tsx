// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./Login";
// import { Register } from "./Register";
import LoginPage from "./Login Page/LoginPage";
import SearchResults from "./Search Results Page/SearchResults";
import Home from "./Home Page/Home";
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import FavList from "./Components/FavList/FavList";
import SearchResults from "./Components/Search Results Page/SearchResults";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<LoginPage/>}/>
        <Route path="/favlist" element={<FavList/>}/>
        <Route path="/search-results" element={<SearchResults />}></Route>
      </Routes>
    </>
  );
}

export default App;