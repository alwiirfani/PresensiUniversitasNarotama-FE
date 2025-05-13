import { findAllPresensiDosen } from "@/services/presensi-dosen/presensi-dosen-service";
import { isToday } from "date-fns";
import React, { useEffect, useState } from "react";
import PresensiDosenClient from "./presensi-dosen/client";

const PresensiDosen = () => {
  const [presensiDosen, setPresensiDosen] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPresensiDosen = async () => {
    try {
      setIsLoading(true);

      const response = await findAllPresensiDosen();
      console.log(response.data);

      // format data
      const formattedData = response.data
        .filter(
          (item) => item.status === "HADIR" && isToday(new Date(item.tanggal))
        )
        .map((item) => ({
          nama: item.dosen.nama,
          fakultas: item.dosen.prodi.fakultas.nama,
          prodi: item.dosen.prodi.nama,
        }));

      setPresensiDosen(formattedData);
    } catch (error) {
      console.error("Error fetching presensi dosen:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPresensiDosen();
  }, []);

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div></div>
      ) : (
        <div className="flex-1 space-y-4 pt-6">
          <PresensiDosenClient data={presensiDosen} />
        </div>
      )}
    </div>
  );
};

export default PresensiDosen;
