import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_BE_URL;

const findAllJadwalMatkul = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/jadwal-matkul`, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching jadwal matkul:", error.message);
  }
};

const findByIdJadwalMatkul = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/jadwal-matkul/${id}`, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching jadwal matkul by id:", error.message);
  }
};

export default { findAllJadwalMatkul, findByIdJadwalMatkul };
