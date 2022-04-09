import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import moovieReducer from "../features/moovie/moovieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    moovie: moovieReducer,
  },
});
