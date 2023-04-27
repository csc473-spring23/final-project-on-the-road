export const initialState = {
  basket: [{ id:"1", title: "Empire State Building", addr:"20 W 34th St., New York, NY 10001", rating: 4.7 },
{id:"1",title:"Edge",addr:"30 Hudson Yards, New York, NY 10001",rating:4.6}],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it..
        newBasket.splice(index, 1);
      } else {
        console.warn("cannot remove ");
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;
