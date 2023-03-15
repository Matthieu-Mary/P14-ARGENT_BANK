import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../features/userSlice";


export const store = configureStore({
    reducer: {
        auth: usersSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>