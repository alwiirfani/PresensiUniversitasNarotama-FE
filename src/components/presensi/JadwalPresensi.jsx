import React, { useEffect, useState } from "react";
import SkeletonTableClient from "../SkeletonTableClient";
import JadwalPresensiClient from "./data-presensi/client";
import mahasiswaService from "@/services/mahasiswa/mahasiswa-service";

const JadwalPresensi = ({ id }) => {
  const [jadwalPresensi, setJadwalPresensi] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchJadwalPresensi = async () => {
    try {
      setIsLoading(true);

      const today = new Date().toLocaleDateString("id-ID", { weekday: "long" });
      console.log("hari ini: ", today);

      const response = await mahasiswaService.findMahasiswaByNim(id);
      console.log(response.data);

      const formattedData = response.data.jadwal
        .filter((item) => item.hari.toLowerCase() === today.toLowerCase())
        .map((item) => ({
          id: item.jadwalMataKuliahId,
          nama: item.namaDosen,
          mata_kuliah: item.namaMataKuliah,
          hari: item.hari,
          jam_mulai: item.jamMulai,
          jam_selesai: item.jamSelesai,
          ruangan: item.ruangan,
        }));

      console.log(formattedData);

      setJadwalPresensi(formattedData);
    } catch (error) {
      console.error("Error fetching jadwal presensi:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJadwalPresensi();
  }, []);

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <SkeletonTableClient />
      ) : (
        <div className="flex-1 space-y-4 pt-6">
          <JadwalPresensiClient data={jadwalPresensi} />
        </div>
      )}
    </div>
  );
};

export default JadwalPresensi;
