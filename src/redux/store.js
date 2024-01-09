import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/button/buttonSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})