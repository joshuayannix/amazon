import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    coinsRedux: [],
    searchTermRedux: ''
  },
  reducers: {
    receiveCoinsFromAPI: (state, action) => {
      state.coinsRedux = action.payload.id;
    },
    updateSearchTerm: (state, action) => {
      state.searchTermRedux = action.payload.text;
    }
  }
})

export const { receiveCoinsFromAPI, updateSearchTerm } = appSlice.actions;

export const coinsRedux = state => state.app.coinsRedux;

export const searchTermRedux = state => state.app.searchTermRedux;

export default appSlice.reducer;