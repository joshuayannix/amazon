import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    coins: [],
    searchTerm: ''
  },
  reducers: {
    receiveCoinsFromAPI: (state, action) => {
      state.coins = action.payload.id;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    }
  }
})

export const { receiveCoinsFromAPI, updateSearchTerm } = appSlice.actions;

export const coins = state => state.app.coins;

export const searchTerm = state => state.app.searchTerm;

export default appSlice.reducer;