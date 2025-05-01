import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_BE_URL;

const findAllFakultas = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fakultas`, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching fakultas:", error.message);
  }
};

export { findAllFakultas };
