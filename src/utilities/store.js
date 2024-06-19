import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import userReducer from "../slices/userSlice";
import movieReducer from "../slices/movieSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    movie: movieReducer,
  },
});
