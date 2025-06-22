import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        searchText: null,
        movieResults: null
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMovieResult: (state, action) => {
            const { movieResults, searchText } = action.payload;
            state.movieResults = movieResults;
            state.searchText = searchText;
        }
    }
})

export default gptSlice.reducer;
export const { toggleGPTSearch, addGPTMovieResult } = gptSlice.actions;