import JadwalMataKuliah from "@/components/dashboard/JadwalMataKuliah";
import ProfileCard from "@/components/dashboard/ProfileCard";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";

const DashboardLayout = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      console.log(parsedUser);
    }
  }, []);
  return (
    <div className="container h-full flex flex-col">
      {/* Profile Card */}
      <div className="flex w-full h-56 sm:h-64 justify-center py-8 sm:py-10">
        {user && user.nama && <ProfileCard nama={user.nama} role={user.role} />}
      </div>

      <Separator className="w-full" />

      {/* Jadwal Mata Kuliah */}
      <div className="w-full h-56 sm:h-64 mt-4 sm:mt-6 mb-44">
        <JadwalMataKuliah />
      </div>
    </div>
  );
};

export default DashboardLayout;
