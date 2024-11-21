import axios from "axios";
const apiPrefix = "/api";

export default {
  test: ({ method = "get", data, params }) => {
    return axios({
      url: `${apiPrefix}/lottery/types`,
      method,
      data,
      params,
    });
  },
  fetchCode: ({ method = "get", data, params }) => {
    return axios({
      url: `${apiPrefix}/get/Status/info/List`,
      method,
      data,
      params,
    });
  },
};
