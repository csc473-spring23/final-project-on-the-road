import SearchBar from "../Components/SearchBar";
import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getFavorites, addFavorite,deleteFavorite } from "../config/firestore";
import { curr_usr, login, logout } from "../config/firebase";

function Home() {
  const navigate = useNavigate();
  const handleClick1 = () => navigate("/register");
  const handleClick2 = () => navigate("/");
  

  function log(e){
    e.preventDefault();
    login("test@gmail.com", "Abcd1234!");
  }

  function lout(e){
    e.preventDefault();
    logout();
  }

  function getfav(e){
    e.preventDefault();
    // console.log("Testing Function", curr_usr);
    if (curr_usr)
      getFavorites(curr_usr.uid);
    else {
      console.log("No user");
    }
  }

  function addfav(e){
    e.preventDefault();
    console.log("Adding Favorite");
    if (curr_usr)
      addFavorite(curr_usr.uid, "tests", "test");
    else
      console.log("No user");
  }
  
  function delfav(e){
    e.preventDefault();
    console.log("Deleting Favorite");
    if (curr_usr)
      deleteFavorite(curr_usr.uid, 4);
    else
      console.log("No user");
  }


  return (
    <div>
      <div className="header">
        <div className="header__logo" onClick={handleClick2}>
          <span>SightSeeker</span>
        </div>

        <div className="header__right">
          <div className="header__register" onClick={handleClick1}>
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>

          <div className="header__optionBasket">
            <BsCardChecklist></BsCardChecklist>
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </div>
      </div>
      <SearchBar />
      <button onClick={log}>login</button>
      <button onClick={lout}>log out</button>
      <button onClick={getfav}>getfav</button>
      <button onClick={addfav}>addfav</button>
      <button onClick={delfav}>delfav</button>
    </div>
  );
}

export default Home;
