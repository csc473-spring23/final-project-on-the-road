import React from "react";
import "./place.css"


function Place({title, price, rating }) {
 
  return (
    <div className="place">
      <div className="place__info">
        <p>{title}</p>
        <p className="place__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>rating: {rating}</p>
        {/* { Array(rating).fill('⭐').map((_, i) => ( '⭐' )) } */}
        </div>
      </div>

      <button>Add to Favorite List</button>
    </div>
  );
}

export default Place;