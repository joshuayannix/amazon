export const initialState = {
  basket: [{
    id:"12321341",
    title:"Apple AirPods Pro",
    price:219.99,
    rating:4,
    image:"https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg"
  }],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      return { 
        ...state,
        basket: [...state.basket, action.item]  
      }      
    case 'REMOVE_FROM_BASKET':
      // Logic for removing item from basket
      return { state }
    default: 
      return state;
  }
}

export default reducer;