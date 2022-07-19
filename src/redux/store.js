import { configureStore } from "@reduxjs/toolkit";
import manageFilmsReducer from "./manageFilmsReducer/manageFilmsReducer";
import manageUserReducer from "./manageUserReducer/manageUserReducer";

export const store = configureStore({
  reducer: {
    manageUserReducer: manageUserReducer,
    manageFilmReducer: manageFilmsReducer,
  },
});
