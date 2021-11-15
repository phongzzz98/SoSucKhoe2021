import axios from "axios";
import { getAccessToken } from "../utils/localStorage";

export const axiosInstance = axios.create({
  baseURL: 'https://tiemchungv1.herokuapp.com',
  timeout: 12000,
  headers: { "X-Custom-Header": "foobar" },
});

axiosInstance.interceptors.request.use((request) => {
  const accessToken = getAccessToken();
  const accessHeader = `Bearer ${accessToken}`;
  request.headers!["Authorization"] = accessHeader;
  return request;
});
