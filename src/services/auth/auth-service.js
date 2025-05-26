import axios from "axios";
import publicApi from "../axios/public-api-service";
import verifyApi from "../axios/verify-api-service";

const BASE_URL = import.meta.env.VITE_BASE_BE_URL;

const loginAuthDosen = async (credentials) => {
  try {
    const response = await publicApi.post("/auth/dosen-login", credentials, {
      withCredentials: true,
    });

    if (response.data.data.accessToken) {
      verifyApi.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.data.accessToken}`;
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login Failed");
  }
};

const loginAuthMahasiswa = async (credentials) => {
  try {
    const response = await publicApi.post(
      "/auth/mahasiswa-login",
      credentials,
      {
        withCredentials: true,
      }
    );

    if (response.data.data.accessToken) {
      verifyApi.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.data.accessToken}`;
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login Failed");
  }
};

const logoutAuth = async (user) => {
  try {
    // Hapus header authorization
    delete verifyApi.defaults.headers.common["Authorization"];

    // Panggil API logout
    const response = await axios.delete(
      `${BASE_URL}/auth/logout/${user.accessToken}`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Logout Failed");
  }
};

export { loginAuthDosen, loginAuthMahasiswa, logoutAuth };
