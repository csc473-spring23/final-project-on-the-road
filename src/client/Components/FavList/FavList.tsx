import React from "react";
import { useStateValue } from "../../StateProvider";
import NavBar from "../../nav/NavBar";
import CheckoutProduct from "./CheckOut";
import filterObjects from "../Search Results Page/filter";
import "./FavList.css";

function FavList() {
  const [{basket}]=useStateValue();
  return (
    <div>
       <NavBar/>
       
  <div className="checkout">
    {basket?.length===0?(
      <div>
        <h2>Your favoriate list is empty.</h2>
        <p>To add some places to your list, click "Add to Favoriate List" next to the item.</p>
      </div>
    ):(<div className="checkout_title">
      <h2>Your Favoriate List</h2>
      <span><strong>Filter by Type</strong></span>
      <div className="filter_box">
          
          
          <button className="btn PLACE" onClick={()=>filterObjects('place')}>Show All</button>
          <button className="btn SHOPPING" onClick={()=>filterObjects('shopping')}>Shopping</button>
          <button className="btn SCHOOL" onClick={()=>filterObjects('school')}>School</button>
          <button className="btn RESTAURANT" onClick={()=>filterObjects('restaurant')}>Restaurant</button>
          <button className="btn BAR" onClick={()=>filterObjects('bar')}>Bar</button>
          <button className="btn MUSEUM" onClick={()=>filterObjects('museum')}>Museum</button>
          <button className="btn STADIUM" onClick={()=>filterObjects('stadium')}>Stadium</button>
          <button className="btn PARK" onClick={()=>filterObjects('park')}>Park</button>
          <button className="btn OTHERS" onClick={()=>filterObjects('others')}>Others</button>
        </div>
      {basket.map((item)=>(
        <CheckoutProduct
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        />
      ))}
    </div>)}
  </div>
  </div>)
}

export default FavList;
