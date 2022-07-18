import { baseServices } from "./baseServices";

class userServices extends baseServices {
  constructor() {
    super();
  }

  userLoginService = (dataLogin) => this.post(`QuanLyNguoiDung/DangNhap`, dataLogin);
}

export const manageUserReducer = new userServices();
