import { isTokenExpired } from "@/utils/jwt-utils";
import axios from "axios";
import { getAuthToken, setAuthToken } from "../auth/auth-context";

// API URL
const API_URL = import.meta.env.VITE_BASE_BE_URL;

const verifyApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// refresh token
export const refreshAccessToken = async () => {
  try {
    const response = await verifyApi.get("/auth/refresh-token");

    return response.data.accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw new Error("Failed to refresh access token");
  }
};

// Interceptor request
verifyApi.interceptors.request.use(async (config) => {
  // Skip untuk endpoint auth tertentu
  if (config.url.includes("/auth/")) return config;

  if (verifyApi.defaults.headers.common["Authorization"]) {
    const token = getAuthToken();

    if (!isTokenExpired(token)) return config;
  }

  // Request token baru
  const newToken = await refreshAccessToken();
  setAuthToken(newToken);
  config.headers.Authorization = `Bearer ${newToken}`;

  return config;
});

// Interceptor response
verifyApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken();
        setAuthToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return verifyApi(originalRequest);
      } catch (refreshError) {
        setAuthToken(null);
        // Redirect ke login jika refresh gagal
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default verifyApi;
