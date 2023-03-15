import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: null
    },
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;