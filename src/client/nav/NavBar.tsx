import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import { useStateValue } from "../StateProvider";

function NavBar(){
    const [ {basket}]=useStateValue();
    const navigate = useNavigate();
    const handleClick1 = () => navigate('/register');
    const handleClick2=()=> navigate('/'); 
    const handleClick3=()=>navigate('/favlist');

    console.log(basket);
    return (
        <div className="header">
                <div className="header__logo" onClick={handleClick2}>
                <span>On the Road</span>
                </div>

                {/* <div className="header__search">
                <input className="header__searchInput" type="text" />
                <AiOutlineSearch className="header__searchIcon"></AiOutlineSearch>
                </div> */}

                <div className="header__right">
                    <div className="header__register" onClick={handleClick1}>
                        <span className="header__optionLineOne" >Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>

                    <div className="header__optionBasket" onClick={handleClick3}>
                        <BsCardChecklist></BsCardChecklist>
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </div>
            </div>)
      }
