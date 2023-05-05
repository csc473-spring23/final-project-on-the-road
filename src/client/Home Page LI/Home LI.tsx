import SearchBar from "../Components/search bar/SearchBar";
import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import NavBar from "../Components/nav/NavBar";
import Footer from "../Components/footer/Footer";
import "../Home Page LI/Home LI.css";
import { curr_usr } from "../config/firebase";

const touristAttractionImages = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
];

function HomeLI() {
  const currentUser = curr_usr;
  const displayName = currentUser?.displayName;
  console.log(displayName);
  console.log("Hi");

  return (
    <div className="home">
      <div className="home-header">
        <NavBar hasSearchBar={false} hasColor={false} isLoggedIn={true} />
      </div>
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
      <div className="home-message">
        <p>Find Attractions Near Anywhere!</p>
      </div>
      <div className="home-search-bar">
        <SearchBar />
      </div>

      <div className="home-info"></div>
      <Footer />
    </div>
  );
}

export default HomeLI;
