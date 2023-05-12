import React from "react";
import "./Home.css";
import NavBar from "../../nav/NavBar";
import SearchBar from "../Search Results Page/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getFavorites, addFavorite,deleteFavorite } from "../../config/firestore"
import { curr_usr, login, logout } from "../../config/firebase";
import Footer from "../Footer/Footer";
import SimpleImageSlider from "react-simple-image-slider";
import {GiHiking} from "react-icons/gi";
import {CiSquareQuestion} from "react-icons/ci";
import {MdNewspaper} from "react-icons/md";
function Home() {
  if (curr_usr){
    console.log(curr_usr.uid); 
  }
  const touristAttractionImages = [
    { url: "src/client/Components/temp_home/1.jpg" },
    { url: "src/client/Components/temp_home/2.jpg" },
    { url: "src/client/Components/temp_home/3.jpg" },
    { url: "src/client/Components/temp_home/4.jpg" },
    { url: "src/client/Components/temp_home/5.jpg" },
  ];
  return (
    <div>
      <NavBar/>
      <div className="home">
      
      <div className="home-slider">
        <SimpleImageSlider
          width={"100%"}
          height={500}
          images={touristAttractionImages}
          showBullets={true}
          showNavs={true}
          loop={true}
          autoPlay={true}
          autoPlayDelay={5}
          slideDuration={1.5}
        />
      </div>
      <div className="home_info">
        <div className="home_info1">
          <GiHiking size='88px' className="home_info_icon"></GiHiking>
          <h4>Discover new sights and adventures</h4>
        </div>
        <div className="home_info2">
          <CiSquareQuestion size="88px" className="home_info_icon"></CiSquareQuestion>
          <h4>Ask any attractions about an attraction</h4>
        </div>
        <div className="home_info3">
          <MdNewspaper size="88px" className="home_info_icon"></MdNewspaper>
          <h4>Find the latest news on an attraction</h4>
        </div>
      </div>
    
      </div>
      <Footer />
    </div>
  );
}

export default Home;