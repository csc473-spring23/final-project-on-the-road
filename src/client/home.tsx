import React from "react";
import "./Home.css";
import NavBar from "./nav/NavBar";
import Place from "./place";

function Home() {

  return (
    <div>
      <NavBar/>
      <div className="home">
        <div className="home__row">
          <Place title="Empire State Building" price={64} rating={4.7}/>
          <Place title="Edge" price={42} rating={4.6}/>
          <Place title="Bronx Zoo" price={37.75} rating={4.6}/>
        </div>
        <div className="home__row">
          <Place title="Madame Tussauds New York" price={43.99} rating={4.4}/>
          <Place title="Top of The Rock" price={40} rating={4.6}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
