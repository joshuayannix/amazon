export const initialState = {
  cart: [],
  coins: [],
  searchTerm: '',
  user: null,
};

export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  //console.log(action);
  switch(action.type) {

    case 'RECEIVE_COINS_FROM_API' :
      return {
        ...state,
        coins: action.id
      }

    case 'UPDATE_SEARCH_TERM':
      return { ...state, searchTerm: action.id}

    case 'ADD_TO_CART':
      return { 
        ...state,
        cart: [...state.cart, action.item]  
      }      

    case 'REMOVE_FROM_CART':
      let newCart = [...state.cart];

      const index = state.cart.findIndex((cartItem) => cartItem.uuid === action.id);

      if(index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product id: ${action.id}`)
      };

      return { ...state, cart: newCart };
    
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    default: 
      return state;
  }
}

export default reducer;