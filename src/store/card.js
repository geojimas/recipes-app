import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    favorites: []
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorite: (state, action) => {
      const index = state.favorites.findIndex(recipe => recipe.label === action.payload.label);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    }
  }
})

export const { addToFavorite, removeFromFavorite } = cardSlice.actions

export default cardSlice.reducer
