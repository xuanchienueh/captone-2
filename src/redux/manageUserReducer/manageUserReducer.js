import { createSlice } from "@reduxjs/toolkit";
import { TOKEN, USER_LOGIN } from "../../utils/setting/config";
let infoUserLogined = {};
if (localStorage.getItem(USER_LOGIN)) {
  infoUserLogined = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  infoUserLogined,
};

export const manageUserReducer = createSlice({
  name: "manageUserReducer",
  initialState,
  reducers: {
    userLoginReducer: (state, { type, payload }) => {
      state.infoUserLogined = payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      localStorage.setItem(TOKEN, payload.accessToken);
    },
  },
});

export const { userLoginReducer } = manageUserReducer.actions;

export default manageUserReducer.reducer;
