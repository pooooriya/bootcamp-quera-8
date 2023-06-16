import axios from "axios";
export const Fetcher = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 20000,
});
