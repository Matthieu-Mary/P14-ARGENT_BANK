import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    id: string | null;
    error: string | null;
}

const initialUserState: UserState = {
    firstName: null,
    lastName: null,
    email: null,
    id: null,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        userFulfilled: (state, { payload }) => {
            state.firstName = payload.body.firstName;
            state.lastName = payload.body.lastName;
            state.email = payload.body.email;
            state.id = payload.body.id;
            state.error = null;
        },
        userRejected: (state, { payload }) => {
            state.firstName = null;
            state.lastName = null;
            state.email = null;
            state.id = null;
            state.error = payload;
        },
        editUserFulfilled: (state, { payload }) => {
            state.firstName = payload.body.firstName;
            state.lastName = payload.body.lastName;
            state.error = null;
        },
        editUserRejected: (state, { payload }) => {
            state.error = payload
        }
    }
})

export const { userFulfilled, userRejected, editUserFulfilled, editUserRejected } = userSlice.actions;
export default userSlice.reducer;