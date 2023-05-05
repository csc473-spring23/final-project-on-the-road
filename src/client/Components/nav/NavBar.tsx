import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../search bar/SearchBar";
import "../nav/NavBar.css";
import { curr_usr, login, logout } from "../../config/firebase";
import Avatar from "../avatar/Avatar";

interface Props {
  hasSearchBar: boolean;
  hasColor: boolean;
  isLoggedIn: boolean;
}

function NavBar({ hasSearchBar, hasColor, isLoggedIn }: Props) {
  const navigate = useNavigate();
  const handleClickHome = () => navigate("/");
  const handleClickLogin = () => navigate("/login");
  const handleClickSignup = () => navigate("/register");
  const handleClickFavoriteList = () => navigate("/favlist");

  if (isLoggedIn) {
    const currentUser = curr_usr;
    const displayName = currentUser?.displayName;
    console.log(displayName);

    return (
      <div
        className="header"
        style={{ backgroundColor: hasColor ? "#006994" : "none" }}
      >
        <div className="header-left">
          <img
            id="logo"
            src="icons/logo.png"
            alt="Logo"
            onClick={handleClickHome}
          ></img>

          <div className="header-website-name">
            <p>SightSeeker</p>
          </div>
        </div>

        <div className="header-middle">
          {hasSearchBar ? <SearchBar /> : null}
        </div>

        <div className="header-right">
          <Avatar name={displayName} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="header"
      style={{ backgroundColor: hasColor ? "#006994" : "none" }}
    >
      <div className="header-left">
        <img
          id="logo"
          src="icons/logo.png"
          alt="Logo"
          onClick={handleClickHome}
        ></img>

        <div className="header-website-name">
          <p>SightSeeker</p>
        </div>
      </div>

      <div className="header-middle">{hasSearchBar ? <SearchBar /> : null}</div>

      <div className="header-right">
        <div className="header-options">
          <div className="header-login" onClick={handleClickLogin}>
            <p>Log In</p>
          </div>

          <div className="header-signin" onClick={handleClickSignup}>
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;