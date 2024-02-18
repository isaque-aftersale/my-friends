import axios from "axios";

export const axios_instance = axios.create({
  baseURL: "http://localhost:3003",
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
