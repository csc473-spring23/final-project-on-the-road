import React from "react";
import NavBar from "../Components/nav/NavBar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { getNearbyTouristAttractions } from "./TouristAttractions";

function SearchResults() {
  const [queryParam] = useSearchParams();
  const query = queryParam.get("q");
  let searchResults;

  getNearbyTouristAttractions(query).then((result) => {
    searchResults = result;
    result.results.forEach((place) => {
      console.log(`${place.name}`);
    });
  });

  return (
    <div>
      <NavBar hasSearchBar={true} />
      <h2> {query} </h2>
    </div>
  );
}

export default SearchResults;
