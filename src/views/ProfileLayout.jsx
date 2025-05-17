import DataProfile from "@/components/profile/DataProfile";
import Profile from "@/components/profile/Profile";
import { titleChange } from "@/services/title-manager";
import React, { useEffect, useState } from "react";

const ProfileLayout = () => {
  const [user, setUser] = useState({});
  const [tabValue, setTabValue] = useState("mahasiswa");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      if (parsedUser.role === "mahasiswa") {
        setTabValue("mahasiswa");
      } else if (parsedUser.role === "dosen") {
        setTabValue("dosen");
      }
    }
  }, []);

  titleChange("Profile - Universitas Narotama");
  return (
    <div className="container flex">
      <div className="w-full flex flex-col items-center">
        <Profile>
          <DataProfile user={user} tabValue={tabValue} />
        </Profile>
      </div>
    </div>
  );
};

export default ProfileLayout;
