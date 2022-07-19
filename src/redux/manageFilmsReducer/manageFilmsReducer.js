import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listFilms: [],
};

const manageFilmReducer = createSlice({
  name: "manageFilmReducer",
  initialState,
  reducers: {
    getListFilms: (state, { type, payload }) => {
      state.listFilms = payload;
    },
  },
});

export const { getListFilms } = manageFilmReducer.actions;

export default manageFilmReducer.reducer;
