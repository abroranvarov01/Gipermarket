import axios from "axios";
import { loadState } from "../config/storage";

const request = axios.create({ baseURL: "http://localhost:3000" });

request.interceptors.request.use((config) => {
  const user = loadState("users");
  console.log(user);

  config.headers.Authorization = `Bearer ${user}`;

  return config;
});

export { request };
