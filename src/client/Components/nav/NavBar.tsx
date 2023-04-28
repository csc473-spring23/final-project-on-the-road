import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SearchBar from "../search bar/SearchBar";
import "../nav/NavBar.css";

function NavBar(props) {
  const { hasSearchBar } = props;
  const navigate = useNavigate();
  const handleClickHome = () => navigate("/");
  const handleClickLogin = () => navigate("/login");
  const handleClickSignup = () => navigate("/register");

  return (
    <div className="header">
      <img
        id="logo"
        src="icons/logo.png"
        alt="Logo"
        onClick={handleClickHome}
      ></img>

      <div className="header-website-name">
        <p>SightSeeker</p>
      </div>

      {hasSearchBar ? <SearchBar /> : null}

      <div className="header-options">
        <div className="header-login" onClick={handleClickLogin}>
          <p>Log In</p>
        </div>

        <div className="header-signin" onClick={handleClickSignup}>
          <p>Sign In</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
