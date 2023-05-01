import React from "react";
import NavBar from "../../nav/NavBar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { getNearbyTouristAttractions } from "./TouristAttractions";
import "./Search.css";
import filterObjects from "./filter";
import filterOnR from "./filterR";
import { favNumber,getFavorites, addFavorite,deleteFavorite } from "../../config/firestore"
import {curr_usr} from "../../config/firebase";

const iconArray=['school',"restaurant","bar","shopping","park","stadium",'museum'];


function SearchResults() {
  const [queryParam] = useSearchParams();
  const query = queryParam.get("q");
  let searchResults;
  const myslider=()=>{
    var slider = document.getElementById("sliderRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function() {
      slider.value=this.value;
      output.innerHTML = this.value;
  }};


  const places=new Array();
  const myDiv = document.getElementById("display");
  if (!(myDiv==null)){
    while (myDiv.firstChild) {
      myDiv.removeChild(myDiv.firstChild);
  }}
  getNearbyTouristAttractions(query).then((result) => {
    searchResults = result;
    
    result.results.forEach((place) => {
      
      const placeID=place.place_id;
      const placeN=place.name;
      const placeA=place.formatted_address;
      const placeR=place.rating;

      const placei={id:placeID,title:placeN,addr:placeA,rating:placeR};
      places.push(placei);

      const targetElement=document.getElementById("display");
      const x=document.createElement("section");
      x.setAttribute("Id",placeID);
      x.setAttribute("class","place others");

      const placeI=document.createElement("span");
      placeI.setAttribute("class","place_image");
      const y = document.createElement("img");
      y.src = place.icon;
      for (var i=0;i<iconArray.length;i++){
        if (place.icon.includes(iconArray[i])){
          x.setAttribute("class","place "+iconArray[i]);
        }
      };
      
      y.setAttribute("aria-hidden", "true");
      y.setAttribute("class", "image");
      y.setAttribute("alt", placeN);
      placeI.append(y);
      x.append(placeI);
    
      const placeInfo=document.createElement("div");
      placeInfo.setAttribute("class","place_info");

      const placeName=document.createElement("span");
      placeName.setAttribute("class","place_name");
      const txtName=document.createTextNode(placeN);
      placeName.appendChild(txtName);
      placeInfo.append(placeName);

      const placeAdd=document.createElement("span");
      placeAdd.setAttribute("class","place_address");
      const txtAdd=document.createTextNode(placeA);
      placeAdd.appendChild(txtAdd);
      placeInfo.append(placeAdd);

      const placeRating=document.createElement("span");
      placeRating.setAttribute("class","place_rating "+placeR);
      const txtRating=document.createTextNode("Rating:"+placeR+" ("+place.user_ratings_total+")");
      placeRating.appendChild(txtRating);
      placeInfo.append(placeRating);

      const buttonA=document.createElement('button');
      buttonA.textContent="Add to Favorite List";
      buttonA.addEventListener("click",
      ()=>{
        if (buttonA.style.backgroundColor=="white"){
          buttonA.style.backgroundColor="lightblue";
          // buttonA.innerText="Remove from Favorite List";
          if (curr_usr){
            addFavorite(curr_usr.uid,placeA,placeN).
            then(()=>
              favNumber(curr_usr.uid)).
              then((num)=>{
              const basketLenElement=document.getElementById("basketLength");
              basketLenElement.innerHTML=num.toString();});
          }
            
            

          else {
            console.log("No user");
    }
          }
        else{
          buttonA.style.backgroundColor="white";
          // buttonA.innerText="Add to Favorite List";
          }
        });
      placeInfo.append(buttonA);
      x.appendChild(placeInfo);
      targetElement?.appendChild(x);
      
    });
  }).then(()=>myslider()).then(()=>{filterOnR();console.log("finished")});
  
  return (
    <div className="home">
      <NavBar />
      <h2>What you have entered: {query}</h2>
      <div className="main">
        <div className="filter">
          <span><strong>Filter</strong></span>  
          {/* <button className="btn PLACE" onClick={()=>{
            filterObjects('place')} }>Show All</button> */}
          {/* <button className="btn SHOPPING" onClick={()=>filterObjects('shopping')}>Shopping</button>
          <button className="btn SCHOOL" onClick={()=>filterObjects('school')}>School</button>
          <button className="btn RESTAURANT" onClick={()=>filterObjects('restaurant')}>Restaurant</button>
          <button className="btn BAR" onClick={()=>filterObjects('bar')}>Bar</button>
          <button className="btn MUSEUM" onClick={()=>filterObjects('museum')}>Museum</button>
          <button className="btn STADIUM" onClick={()=>filterObjects('stadium')}>Stadium</button>
          <button className="btn PARK" onClick={()=>filterObjects('park')}>Park</button>
          <button className="btn OTHERS" onClick={()=>filterObjects('others')}>Others</button> */}
          
          <div className="rangeslider">
            <p>Rating range slider:</p>
            <input type="range" min="0" max="5"  step="0.1" value="0"
            className="myslider" id="sliderRange" onClick={()=>filterOnR()}
            />
            <p><span id="demo">
          </span> and above</p>
          </div>
        </div>
        
        <div id="display">

        </div>
        </div>
        {/* {places.map((placei)=>(<Place id={placei.id} title={placei.title} addr={placei.addr} rating={placei.rating}/>))} */}
    </div>
  );
}

export default SearchResults;
