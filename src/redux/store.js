import { configureStore } from "@reduxjs/toolkit";
import manageUserReducer from "./manageUserReducer/manageUserReducer";

export const store = configureStore({
  reducer: {
    manageUserReducer: manageUserReducer,
  },
});
