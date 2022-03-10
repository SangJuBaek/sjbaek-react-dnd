import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import dragItemReducer from 'store/dragItem'

export const store = configureStore({
  reducer: {
    dragItem: dragItemReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
