import verifyApi from "../axios/verify-api-service";

let memoryToken = null;

// Fungsi untuk set token
export const setAuthToken = (token) => {
  memoryToken = token;
  verifyApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Fungsi untuk clear token
export const clearAuthToken = () => {
  memoryToken = null;
  delete verifyApi.defaults.headers.common["Authorization"];
};

// Fungsi untuk get token
export const getAuthToken = () => memoryToken;
