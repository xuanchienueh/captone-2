import { manageUserReducer } from "../../services/manageUserServices";
import { userLoginReducer } from "./manageUserReducer";

export const userLoginAction = (dataLogin, navigate) => {
  return async (dispatch, getState) => {
    try {
      let { data, status } = await manageUserReducer.userLoginService(dataLogin);
      status === 200 && dispatch(userLoginReducer(data.content));
      navigate(-1);
    } catch (err) {
      console.log("user Login fail", err);
    }
  };
};
