import axios from "axios";

// API URL
const API_URL = import.meta.env.VITE_BASE_BE_URL;

const publicApi = axios.create({
  baseURL: API_URL,
  timeout: 15000, // 10 detik timeout
  headers: {
    "Content-Type": "application/json",
  },
});

publicApi.interceptors.request.use((config) => {
  console.log("Public request to:", config.url);
  return config;
});

publicApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Public API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default publicApi;
