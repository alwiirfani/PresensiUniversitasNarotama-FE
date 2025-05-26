import JadwalPresensi from "@/components/presensi/JadwalPresensi";
import { titleChange } from "@/services/title-manager";
import React, { useEffect, useState } from "react";

const PresensiLayout = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      console.log(parsedUser);
    }
  }, []);

  titleChange("Presensi - Universitas Narotama");
  return (
    <div className="container flex flex-col">
      {/* Jadwal Presensi anda hari ini */}
      <div className="w-full mt-4 sm:mt-6">
        {user && user.id && <JadwalPresensi id={user.id} role={user.role} />}
      </div>
    </div>
  );
};

export default PresensiLayout;
