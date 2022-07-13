import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value1: 100,
  loaiNguoiDung: [],
  listUser: [],
};

export const demSoSlice = createSlice({
  name: "demSo",
  initialState,
  reducers: {
    tang: (state) => {
      state.value1 += 10;
    },
    giam: (state) => {
      state.value1 -= 5;
    },
    getLoaiNguoiDung: (state, { type, payload }) => {
      console.log(payload);
      state.loaiNguoiDung = payload;
    },
    getListUser: (state, { type, payload }) => {
      state.listUser = payload;
    },
  },
});

export const { tang, giam, getLoaiNguoiDung, getListUser } = demSoSlice.actions;
export default demSoSlice.reducer;
