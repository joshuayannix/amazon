import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.cart];

      const index = state.cart.findIndex((cartItem) => cartItem.uuid === action.payload.id);

      if(index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product id: ${action.payload.id}`)
      };

      state.cart = newCart;

    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cart = state => state.cart.cart;

export default cartSlice.reducer;