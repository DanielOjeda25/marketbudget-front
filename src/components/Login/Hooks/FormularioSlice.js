// Importa las funciones necesarias de Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginEndpoint } from '../../../endpoints';
import axios from 'axios';

// Define una función async para realizar la autenticación (puedes personalizar según tus necesidades)
export const authenticateUser = createAsyncThunk('user/authenticate', async (credentials) => {
  try {
    console.log(credentials)
    const response = await axios.post(loginEndpoint, credentials);

    // Axios manejará automáticamente la verificación de la respuesta y lanzará un error si no es exitosa.

    return response.data;
  } catch (error) {
    throw new Error('Error al autenticar usuario: ' + error.message);
  }
});

// Define un slice con el estado y las funciones relacionadas
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    showPassword: false,
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    toggleShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
  },
  extraReducers: (builder) => {
    // Maneja el éxito de la autenticación
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.user = action.payload.name;
      state.token = action.payload.token;
      state.status = 'succeeded';
    });
    // Maneja cualquier error durante la autenticación
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

// Exporta las acciones del slice
export const { setEmail, setPassword, toggleShowPassword } = authSlice.actions;

// Exporta el estado del slice
export const selectAuth = (state) => state.auth;

// Exporta el reducer del slice
export default authSlice.reducer;
