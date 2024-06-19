import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    displayName: null,
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateEmail, updateDisplayName } = userSlice.actions;

export default userSlice.reducer;
