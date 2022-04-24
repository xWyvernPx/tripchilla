import axios from "axios";
import qs from "query-string";
import https from "https";
import getToken from "_helpers/getToken";

export const axiosClient = axios.create({
  baseURL: "https://localhost:4000/api",
  // withCredentials: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  headers: {
    "Content-Type": "application/json",
    Authorization: getToken() ? `Bearer ${getToken()}` : "",
  },
  paramsSerializer: (params) => qs.stringify({ ...params }),
});
axiosClient.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";
axiosClient.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use((res) => {
  if (res.headers["access_token"]) {
    localStorage.setItem("auth", res.headers["access_token"]);
    sessionStorage.setItem("auth", res.headers["access_token"]);
  }
  if (res && res.data) {
    return res.data;
  }
  return res;
});

export default axiosClient;
