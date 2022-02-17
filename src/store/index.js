import { configureStore } from '@reduxjs/toolkit'
import dragItemReducer from './dragItem'

export const store = configureStore({
  reducer: {
    dragItem: dragItemReducer
  },
})
