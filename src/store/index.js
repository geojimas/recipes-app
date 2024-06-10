import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './card'
import { loadState, saveState } from '../utils/localStorageState'

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    card: cardReducer
  },
  preloadedState
})

store.subscribe(() => {
  saveState({
    card: store.getState().card
  })
})

export default store
