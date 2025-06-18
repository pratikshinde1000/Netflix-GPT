import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("Action", action);
            console.log("state", state);
            return action.payload
        },
        removeUser: (state) => {
            return null;
        }
    }
})

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;