import publicApi from "../axios/public-api-service";
import axios from "axios";

const findAllPresensiDosen = async () => {
  try {
    const response = await publicApi.get("/presensi-dosen", {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching presensi dosen:", error.message);
  }
};

export { findAllPresensiDosen };
