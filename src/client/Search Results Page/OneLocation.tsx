import axios from "axios";
import { useState } from "react";
import { curr_usr } from "../config/firebase";
import { addFavorite } from "../config/firestore";
const API_KEY = "AIzaSyB7tyYzcG6ULOQvCZ-A-tXWqr5MmYKrVBI";

type LocationData = {
  location: {
    placeName: string;
    placeAddress: string;
    rating: number;
    placePhotoReference: string;
  };
};

function OneLocation({ location }: LocationData) {
  const [buttonColor, setButtonColor] = useState("white");
  const [imageURL, setImageURL] = useState("");

  function handleAddFavorite() {
    if (curr_usr) {
      setButtonColor("lightblue");
      addFavorite(curr_usr.uid, location.placeAddress, location.placeName);
    } else {
      console.log("No user");
    }
  }

  const photoURL = `http://localhost:3000/photo?maxwidth=300&photoreference=${location.placePhotoReference}&key=${API_KEY}`;

  console.log(location.placeName, location.placeAddress, location.placeRating);
  return (
    <section className="place">
      <div className="place-image">
        <img src={imageURL} />
      </div>
      <span className="place-info">
        <span className="place-info-name">{location.placeName}</span>
        <span className="place-info-address">{location.placeAddress}</span>
        <span className="place-info-rating">{location.placeRating}</span>
        <button onClick={handleAddFavorite}>Add to Favorite List</button>
      </span>
    </section>
  );
}

export default OneLocation;
