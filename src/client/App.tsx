// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./Login";
// import { Register } from "./Register";
import LoginPage from "./Login Page/LoginPage";
import SearchResults from "./Search Results Page/SearchResults";
import Home from "./Home Page/Home";
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { Register } from "./Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-results" element={<SearchResults />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
