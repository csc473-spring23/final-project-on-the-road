// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./Login";
// import { Register } from "./Register";
import LoginPage from "./Login Page/LoginPage";
import SearchResults from "./Search Results Page/SearchResults";
import Home from "./Home Page/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { Register } from "./Register/Register";
import FavList from "./Favorite List Page/FavList";
import { logout } from "./config/firebase";
import { log } from "console";
import HomeLI from "./Home Page LI/Home LI";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    logout();
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-results" element={<SearchResults />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favlist" element={<FavList />} />
        <Route path="/loggedin" element={<HomeLI />} />
      </Routes>
    </>
  );
}

export default App;
