import React from "react";
import { useStateValue } from "./StateProvider";

import CheckoutProduct from "./CheckOut";


function FavList() {
  const [{basket}]=useStateValue();
  return <div className="checkout">
    {basket?.length===0?(
      <div>
        <h2>Your favoriate list is empty.</h2>
        <p>To add some places to your list, click "Add to Favoriate List" next to the item.</p>
      </div>
    ):(<div className="checkout_title">
      <h2>Your Favoriate List</h2>
      {basket.map((item)=>(
        <CheckoutProduct
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        />
      ))}
    </div>)}
  </div>;
}

export default FavList;
