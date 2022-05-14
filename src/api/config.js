import axios from "axios";
import { API_BASE_URL } from "../constants";
import { getLang } from "../helper";


export const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    "Accept-Language": getLang()
  }
  // timeout: 10000,
});

// request.interceptors.request.use((config) => {
//   config.headers.Authorization = 'Bearer ' + getAccessToken()
//   return config;
// })