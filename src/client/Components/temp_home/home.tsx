import React from "react";
import "./Home.css";
import NavBar from "../../nav/NavBar";
import Place from "../../place";
import SearchBar from "../Search Results Page/SearchBar";
import { useSearchParams } from "react-router-dom";

function Home() {
  
  return (
    <div>
      <NavBar/>
      <div className="home">
      
        {/* <div id="home_row">
          <Place id="1" title="Empire State Building" addr="20 W 34th St., New York, NY 10001" rating={4.7}/>
          <Place id="2" title="Edge" addr="30 Hudson Yards, New York, NY 10001" rating={4.6}/>
          <Place id="3"  title="Bronx Zoo" addr="2300 Southern Blvd, Bronx, NY 10460" rating={4.6}/>
          <Place id="4" title="Madame Tussauds New York" addr="234 W 42nd St, New York, NY 10036" rating={4.4}/>
          <Place id="5" title="Top of The Rock" addr="30 Rockefeller Plaza, New York, NY 10112" rating={4.6}/>
        </div> */}
      </div>
    </div>
  );
}

export default Home;