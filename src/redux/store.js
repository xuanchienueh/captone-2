import { configureStore } from "@reduxjs/toolkit";
import demSoReducer from "../counter/demSoSlice";

export const store = configureStore({
  reducer: {
    //reducer: ItemReducer
    demSo: demSoReducer,
  },
});
