import { configureStore } from "@reduxjs/toolkit";
import demSoReducer from "../counter/demSoSlice";

export const store = configureStore({
  reducer: {
    demSo: demSoReducer,
  },
});
git;
