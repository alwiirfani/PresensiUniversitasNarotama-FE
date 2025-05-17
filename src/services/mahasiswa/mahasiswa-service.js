import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_BE_URL;

const findMahasiswaByNim = async (nim, accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/mahasiswa/${nim}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching mahasiswa by NIM:", error.message);
  }
};

export default { findMahasiswaByNim };
