import { findAllPresensiDosen } from "@/services/presensi-dosen/presensi-dosen-service";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import PresensiDosenClient from "./presensi-dosen/client";

const PresensiDosen = () => {
  const [presensiDosen, setPresensiDosen] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPresensiDosen = async () => {
      try {
        setIsLoading(true);

        const response = await findAllPresensiDosen();
        console.log(response.data);

        // format data
        const formattedData = response.data.map((item) => ({
          nama: item.dosen.nama,
          tanggal: format(new Date(item.tanggal), "MMMM dd, yyyy"),
          status: item.status,
        }));

        setPresensiDosen(formattedData);
      } catch (error) {
        console.error("Error fetching presensi dosen:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPresensiDosen();
  }, []);
  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div></div>
      ) : (
        <div className="flex-1 space-y-4 pt-6 p-8">
          <PresensiDosenClient data={presensiDosen} />
        </div>
      )}
    </div>
  );
};

export default PresensiDosen;
