import SearchBar from "../Components/SearchBar";
import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { test } from "../config/firestore";
function Home() {
  const navigate = useNavigate();
  const handleClick1 = () => navigate("/register");
  const handleClick2 = () => navigate("/");
  
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
      <h1>Hello</h1>
      <button onClick={test}>test</button>
    </div>
  );
}

export default Home;
