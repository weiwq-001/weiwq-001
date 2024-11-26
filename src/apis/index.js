import axios from "axios";
const apiPrefix = "/api";

export default {
  getVerificationCode: ({ method = "get", data, params }) => {
    return axios({
      url: `${apiPrefix}/get/verification/code`,
      method,
      data,
      params,
    });
  },
  login: ({ method = "get", data, params }) => {
    return axios({
      url: `${apiPrefix}/login`,
      method,
      data,
      params,
    });
  },
  getUserInfoByOpenId: ({ method = "get", data, params }) => {
    return axios({
      url: `${apiPrefix}/get/user/info/opendId`,
      method,
      data,
      params,
    });
  },
  validOpenId: ({ method = "get", data, params }) => {
    return axios({
      url: `${apiPrefix}/check/BindOpenId/again`,
      method,
      data,
      params,
    });
  },
};
