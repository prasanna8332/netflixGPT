import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
  },
  reducers: {
    updateNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateNowPlaying } = movieSlice.actions;

export default movieSlice.reducer;
