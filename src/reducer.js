export const initialState = {
  basket: [
    {
      id:"12321341",
      title:"Apple AirPods Pro",
      price:219.99,
      rating:4,
      image:"https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg"
    }
  ],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return { 
        ...state,
        basket: [...state.basket, action.item]  
      }      
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if(index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product id: ${action.id}`)
      };

      return { ...state, basket: newBasket };
    default: 
      return state;
  }
}

export default reducer;