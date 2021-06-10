import axios from "axios";
import qs from "qs";
import _ from "lodash";
import appConfig from "../app-config";
import functionHelpers from "../helpers/functions";
import Session from "../helpers/session";

axios.defaults.baseURL = appConfig.apiBaseUrl;
axios.defaults.timeout = 90000;
axios.defaults.headers["x-access-token"] = Session.getAccessToken();

const http = {
  setupInterceptors: (history) => {
    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (e) => {
        return Promise.reject(e);
      }
    );
  },
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers["x-access-token"] = accessToken;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url, params, config = {}) {
    return axios.get(
      url,
      _.assign({}, config, {
        params,
        paramsSerializer: (_params) => {
          return qs.stringify(_params, { arrayFormat: "repeat" });
        },
      })
    );
  },
  post(url, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    return axios.delete(url, config);
  },
  upload(url, data = {}) {
    return axios.post(url, functionHelpers.jsonToFormData(data), {
      "Content-Type": "multipart/form-data; charset=utf-8;",
    });
  },
  download(url, params, config = {}) {
    config.responseType = "blob";
    return axios.get(
      url,
      _.assign({}, config, {
        params,
        paramsSerializer: (_params) => {
          return qs.stringify(_params, { arrayFormat: "repeat" });
        },
      })
    );
  },
  downloadPost(url, data = {}, config = {}) {
    config.responseType = "blob";
    return axios.post(url, data, config);
  },
};

export default http;
