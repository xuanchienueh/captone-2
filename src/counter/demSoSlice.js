import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value1: 100,
  loaiNguoiDung: [],
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
  },
});

export const getDSFilm = () => {
  return async (dispatch, getState) => {
    try {
      const { data, status } = await axios.get(
        "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
      );
      if (status === 200) {
        dispatch(getLoaiNguoiDung(data.content));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const { tang, giam, getLoaiNguoiDung } = demSoSlice.actions;
export default demSoSlice.reducer;
