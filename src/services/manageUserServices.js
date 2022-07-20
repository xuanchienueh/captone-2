import { baseServices } from "./baseServices";

class userServices extends baseServices {
  constructor() {
    super();
  }

  userLoginService = (dataLogin) => this.post(`QuanLyNguoiDung/DangNhap`, dataLogin);

  userSignupService = (dataSignup) => {
    return this.post(`QuanLyNguoiDung/DangKy`, dataSignup);
  };
}

export const manageUserReducer = new userServices();
