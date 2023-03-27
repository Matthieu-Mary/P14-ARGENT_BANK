import { createSlice } from "@reduxjs/toolkit";

// Interface pour le state d'authentification
interface AuthState {
  token: string | null;
  authSuccess: boolean;
  error: string;
}

  // Initial state
  const initialState: AuthState = {
    token: null,
    authSuccess: false,
    error: ""
  };
  
  // Slice Redux pour gérer l'authentification
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginFulfilled: (state, {payload}) => {
        state.token = payload.body.token
        state.authSuccess = true
        state.error = ""
      },
      loginRejected: (state, {payload}) => {
        state.token = null
        state.authSuccess = false
        state.error = payload
      },
      logoutUser: (state) => {
        state.token = null
        state.authSuccess = false
        state.error = ""
      }
    },
});

export const { loginFulfilled, loginRejected, logoutUser } = authSlice.actions;
export default authSlice.reducer;


