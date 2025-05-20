import React, { useEffect, useState } from "react";
import JadwalMataKuliahClient from "./jadwal/client";
import SkeletonTableClient from "../SkeletonTableClient";
import { findAllJadwalMatkul } from "@/services/jadwal-matkul/jadwal-matkul-service";

const getDayNow = () => {
  const dayList = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  return dayList[new Date().getDay()];
};

const JadwalMataKuliah = () => {
  const [jadwalMatKul, setJadwalMatKul] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJadwalMatkul = async () => {
    try {
      setIsLoading(true);

      const response = await findAllJadwalMatkul();
      console.log(response.data);

      const formattedData = response.data
        .filter((item) => item.hari.toLowerCase() === getDayNow().toLowerCase())
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
