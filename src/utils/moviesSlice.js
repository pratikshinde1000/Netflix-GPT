import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    trailerVideo: null
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlaying, addTrailerVideo, addPopular, addTopRated, addUpcoming } = moviesSlice.actions;
