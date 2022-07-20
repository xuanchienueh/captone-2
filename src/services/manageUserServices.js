import { baseServices } from "./baseServices";

class userServices extends baseServices {
  constructor() {
    super();
  }

  userLoginService = (dataLogin) => this.post(`QuanLyNguoiDung/DangNhap`, dataLogin);

  userSignupService = (dataSignup) => {
    return this.post(`QuanLyNguoiDung/DangKy`, dataSignup);
  };

  infoUserService = () => {
    return this.post(`QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  updateInfoUser = (dataUpdate) => {
    return this.put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, dataUpdate);
  };
}

export const manageUserReducer = new userServices();
