import axios from "axios";

const API_KEY = "AIzaSyB7tyYzcG6ULOQvCZ-A-tXWqr5MmYKrVBI";

export async function getNearbyTouristAttractions(query: string) {
  const url = `http://localhost:3000/map?query=${query}&radius=1609&key=${API_KEY}`;
  return axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Invalid Request");
      throw error;
    });
}
