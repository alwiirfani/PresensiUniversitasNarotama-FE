import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_BE_URL;

const findDosenByNip = async (nip) => {
  try {
    const response = await axios.get(`${BASE_URL}/dosen/${nip}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data Dosen", error);
  }
};

export default { findDosenByNip };
