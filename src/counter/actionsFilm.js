import axios from "axios";
import { getListUser, getLoaiNguoiDung } from "./demSoSlice";

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

export const getListUserAction = () => {
  return async (dispatch, getState) => {
    try {
      let { data, status } = await axios.get(
        `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`
      );
      if (status === 200) {
        dispatch(getListUser(data.content));
        dispatch(getDSFilm());
      }
    } catch (err) {
      console.log(err);
    }
  };
};
