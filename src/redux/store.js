import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/button/buttonSlice'
import authReducer from '../components/Login/Hooks/FormularioSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
})