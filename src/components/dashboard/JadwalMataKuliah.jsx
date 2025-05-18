import React, { useEffect, useState } from "react";
import JadwalMataKuliahClient from "./jadwal/client";
import SkeletonTableClient from "../SkeletonTableClient";

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

  const jadwalList = [
    {
      id: "1",
      hari: "Senin",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      ruangan: "R1",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "1",
      hari: "Senin",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      ruangan: "R1",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "1",
      hari: "Senin",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      ruangan: "R1",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "1",
      hari: "Senin",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      ruangan: "R1",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "1",
      hari: "Senin",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      ruangan: "R1",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
    {
      id: "2",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruangan: "R2",
    },
    {
      id: "3",
      hari: "Senin",
      jamMulai: "13:00",
      jamSelesai: "15:00",
      ruangan: "R3",
    },
  ];

  const fetchJadwalMatkul = async () => {
    try {
      setIsLoading(true);

      const formattedData = jadwalList
        .filter((item) => item.hari.toLowerCase() === getDayNow().toLowerCase())
        .map((item) => ({
          hari: item.hari,
          jam_mulai: item.jamMulai,
          jam_selesai: item.jamSelesai,
          ruangan: item.ruangan,
        }));

      setJadwalMatKul(formattedData);

      console.log(formattedData);
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
