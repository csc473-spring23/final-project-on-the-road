import React from "react";
import "./place.css"
import { useStateValue } from "./StateProvider";


function Place({id,title, addr, rating} ) {
  const [{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
    //Add item to basket
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        addr:addr,
        rating:rating
      }})
  };


  return (
    <div className="place">
      <div className="place__info">
        <p><strong>{title}</strong></p>
        <p className="place__address">
          <strong>Address:</strong> {addr}
        </p>
        {/* <p className="place__price">
          <small>$</small>
          <strong>{price}</strong>
        </p> */}
        <div className="product__rating">
          <p><strong>Rating:</strong> {rating}</p>
        {/* { Array(rating).fill('⭐').map((_, i) => ( '⭐' )) } */}
        </div>
        </div>
        
        <button onClick={addToBasket}>Add to Favorite List</button>
    </div>
  );
}

export default Place;