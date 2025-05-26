import React, { useEffect, useState } from "react";
import JadwalMataKuliahClient from "./jadwal/client";
import SkeletonTableClient from "../SkeletonTableClient";
import jadwalMatkulService from "@/services/jadwal-matkul/jadwal-matkul-service";

const JadwalMataKuliah = () => {
  const [jadwalMatKul, setJadwalMatKul] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJadwalMatkul = async () => {
    try {
      setIsLoading(true);

      const today = new Date().toLocaleDateString("id-ID", { weekday: "long" });
      console.log("hari ini: ", today);

      const response = await jadwalMatkulService.findAllJadwalMatkul();
      console.log(response.data);

      const formattedData = response.data
        .filter((item) => item.hari.toLowerCase() === today.toLowerCase())
        .map((item) => ({
          nama: item.dosen.nama,
          mata_kuliah: item.mataKuliah.nama,
          hari: item.hari,
          prodi: item.mataKuliah.prodi.nama,
          jam_mulai: item.jamMulai,
          jam_selesai: item.jamSelesai,
          ruangan: item.ruangan,
        }));

      setJadwalMatKul(formattedData);
    } catch (error) {
      console.error("Error fetching jadwal matkul:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJadwalMatkul();
  }, []);

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <SkeletonTableClient />
      ) : (
        <div className="flex-1 space-y-4 pt-6">
          <JadwalMataKuliahClient data={jadwalMatKul} />
        </div>
      )}
    </div>
  );
};

export default JadwalMataKuliah;
