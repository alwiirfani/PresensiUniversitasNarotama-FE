import React, { useEffect, useState } from "react";
import SkeletonTableClient from "../SkeletonTableClient";
import JadwalPresensiClient from "./data-presensi/client";
import mahasiswaService from "@/services/mahasiswa/mahasiswa-service";
import dosenService from "@/services/dosen/dosen-service";

const JadwalPresensi = ({ id, role }) => {
  const [jadwalPresensi, setJadwalPresensi] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchJadwalPresensiMahasiswa = async () => {
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

  const fetchJadwalPresensiDosen = async () => {
    try {
      setIsLoading(true);

      const today = new Date().toLocaleDateString("id-ID", { weekday: "long" });
      console.log("hari ini: ", today);

      const response = await dosenService.findDosenByNip(id);
      console.log(response.data);

      const formattedData = response.matakuliah.flatMap((mk) =>
        mk.jadwal
          .filter((item) => item.hari.toLowerCase() === today.toLowerCase())
          .map((item) => ({
            id: item.id,
            nama: response.nama,
            mata_kuliah: mk.nama,
            hari: item.hari,
            jam_mulai: item.jamMulai,
            jam_selesai: item.jamSelesai,
            ruangan: item.ruangan,
          }))
      );

      console.log(formattedData);

      setJadwalPresensi(formattedData);
    } catch (error) {
      console.error("Error fetching jadwal presensi:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (role === "mahasiswa") {
      fetchJadwalPresensiMahasiswa();
    } else {
      fetchJadwalPresensiDosen();
    }
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
