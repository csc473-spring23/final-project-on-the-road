import SearchBar from "../Components/search bar/SearchBar";
import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import NavBar from "../Components/nav/NavBar";
import Footer from "../Components/footer/Footer";
import "../Home Page/Home.css";

const touristAttractionImages = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
];

function Home() {
  return (
    <div>
      <div className="home-header">
        <NavBar hasSearchBar={false} />
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

      <div className="home-info">
        <div id="home-info-info1">
          <img
            id="home-info-info1-icon"
            src="icons/discover.png"
            alt="Discover"
          ></img>
          <p>Discover new sights and adventures</p>
        </div>

        <div id="home-info-info2">
          <img
            id="home-info-info2-icon"
            src="icons/question.png"
            alt="Question"
          ></img>
          <p>Ask any questions about an attraction</p>
        </div>

        <div id="home-info-info3">
          <img id="home-info-info3-icon" src="icons/news.png" alt="News"></img>
          <p>Find the latest news on an attraction</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
