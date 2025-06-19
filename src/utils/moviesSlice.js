import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlaying: [],
    trailerVideo: null
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlaying, addTrailerVideo } = moviesSlice.actions;
