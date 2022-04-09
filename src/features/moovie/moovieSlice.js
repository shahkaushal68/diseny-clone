import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moovies: [],
};

export const moovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMoovies: (state, action) => {
      state.moovies = action.payload;
    },
  },
});

export const { fetchMoovies } = moovieSlice.actions;
export default moovieSlice.reducer;
