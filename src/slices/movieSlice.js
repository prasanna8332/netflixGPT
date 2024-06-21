import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    trailers: null,
    currentDisplay: null,
    currentVideoDetails: null,
  },
  reducers: {
    updateNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    updateTrailers: (state, action) => {
      state.trailers = action.payload;
    },
    updateCurrentDisplay: (state, action) => {
      state.currentDisplay = action.payload;
    },
    updateCurrentVideoDetails: (state, action) => {
      state.currentVideoDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateNowPlaying, updateTrailers, updateCurrentDisplay, updateCurrentVideoDetails } =
  movieSlice.actions;

export default movieSlice.reducer;
