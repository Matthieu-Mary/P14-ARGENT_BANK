import { createSlice } from "@reduxjs/toolkit";

// Interface pour le state d'authentification
interface AuthState {
  token: string | null;
  authSuccess: boolean;
  error: string | null;
}

  // Initial state
  const initialState: AuthState = {
    token: null,
    authSuccess: false,
    error: null
  };
  
  // Slice Redux pour gérer l'authentification
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginFulfilled: (state, {payload}) => {
        state.token = payload.body.token
        state.authSuccess = true
        state.error = null
      },
      loginRejected: (state, {payload}) => {
        state.token = null
        state.authSuccess = false
        state.error = payload
      }
    },
});

export const { loginFulfilled, loginRejected } = authSlice.actions;
export default authSlice.reducer;


