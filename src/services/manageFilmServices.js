import { MA_NHOM } from "../utils/setting/config";
import { baseServices } from "./baseServices";
class filmServices extends baseServices {
  constructor() {
    super();
  }

  getListBannerService = () => {
    return this.get("QuanLyPhim/LayDanhSachBanner");
  };

  getListFilmService = (nameMovie = undefined) => {
    if (nameMovie) {
      return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${nameMovie}`);
    }
    return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`);
  };

  getFilmScheduleService = (id = undefined) => {
    if (id) {
      return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
    }
    return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom${MA_NHOM}`);
  };
}

export const manageFilmServices = new filmServices();
