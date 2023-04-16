import axios from "axios";
const local = "http://localhost:8000";
const prod = "https://d4downloader.site";
let accessToken;
if (typeof window !== "undefined") {
  accessToken = localStorage.getItem("token");
}
export const axiosInstance = axios.create({
  baseURL: prod,
  headers: {
    "Content-Type": "application/json",
  },
});
export const protectedInstance = axios.create({
  baseURL: prod,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
