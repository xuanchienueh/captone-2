import axios from "axios";
import { DOMAIN_API, TOKEN, TokenCybersoft } from "../utils/setting/config";

export class baseServices {
  constructor() {
    super();
  }
  get = (url) => {
    return axios({
      method: "GET",
      url: `${DOMAIN_API}/${url}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        TokenCybersoft,
      },
    });
  };

  post = (url, data) => {
    return axios({
      method: "POST",
      url: `${DOMAIN_API}/${url}`,
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        TokenCybersoft,
      },
    });
  };

  put = (url, data) => {
    return axios({
      method: "PUT",
      url: `${DOMAIN_API}/${url}`,
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        TokenCybersoft,
      },
    });
  };

  delete = () => {
    return axios({
      method: "DELETE",
      url: `${DOMAIN_API}/${url}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        TokenCybersoft,
      },
    });
  };
}
