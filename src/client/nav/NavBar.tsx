import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import SearchBar from "../Components/Search Results Page/SearchBar";
import { getFavorites, addFavorite,deleteFavorite } from "../config/firestore"
import { auth,curr_usr, login, logout } from "../config/firebase";
import { documentId } from "firebase/firestore";


function NavBar(){
    
    const navigate = useNavigate();
    const handleClick1 = () => navigate('/register');
    const handleClick2=()=> navigate('/'); 
    const handleClick3=()=>navigate('/favlist');

    const handleAuthenticaton = () => {
        if (curr_usr) {
          auth.signOut();
          const txt1=document.getElementById("txt1");
          txt1.textContent="Hello Guest";
          const txt2=document.getElementById("txt2");
          txt2.textContent="Sign In";
        }
        else{
            handleClick1();
            
        }
      }
    
    
    return (
        <div className="header">
                <div className="header__logo" onClick={handleClick2}>
                <span>On the Road</span>
                </div>
                
                <SearchBar/>
                {/* <div className="header__search">
                <input className="header__searchInput" type="text" />
                <AiOutlineSearch className="header__searchIcon"></AiOutlineSearch>
                </div> */}

                <div className="header__right">
                    
                    <div className="header__register" onClick={handleAuthenticaton}>
                        <span className="header__optionLineOne" id="txt1">Hello {!curr_usr? 'Guest' :curr_usr.email}</span>
                        <span className="header__optionLineTwo" id="txt2">{curr_usr? 'Sign Out': 'Sign In'}</span>
                    </div>
                    

                    <div className="header__optionBasket" onClick={handleClick3}>
                        <BsCardChecklist></BsCardChecklist>
                        <span className="header__optionLineTwo header__basketCount">{!curr_usr? 0: curr_usr.displayName}</span>
                    </div>
                </div>
            </div>)
      }

export default NavBar;