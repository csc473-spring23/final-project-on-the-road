import React from "react";
import "../avatar/Avatar.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../config/firebase";

function Avatar({ name }) {
  const navigate = useNavigate();
  const handleClickFavoriteList = () => navigate("/favlist");
  const handleClickSignOut = (event) => {
    event.preventDefault();
    logout();
    navigate(`/`);
  };

  return (
    <div className="avatar">
      <img
        id="avatar-icon"
        src="icons/avatar.png"
        alt="Avatar"
        width={"65px"}
      ></img>
      <div className="avatar-menu">
        <p>Hello, {name}</p>
        <a id="avatar-menu-favList" onClick={handleClickFavoriteList}>
          Favorite
        </a>
        <a id="avatar-menu-signout" onClick={handleClickSignOut}>
          Sign out
        </a>
      </div>
    </div>
  );
}

export default Avatar;
