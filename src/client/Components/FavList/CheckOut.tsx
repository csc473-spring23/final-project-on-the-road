import React from "react";
import "./CheckOut.css";
import { useStateValue} from "./StateProvider";


function CheckoutProduct({id, title,addr,rating}){
    const [{ basket },dispatch] = useStateValue();
    const removeFromBasket=()=>{
      dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
      });
    } 
    return (
      <div className="place">
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_addr">{addr}</p>
          {/* <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
          </p> */}
          <p className="checkoutProduct_rating">rating: {rating}</p>
          <button onClick={removeFromBasket}>Remove from the list</button>
        </div>
  
      </div>
    )
  }
export default CheckoutProduct;