import DataProfile from "@/components/profile/DataProfile";
import Profile from "@/components/profile/Profile";
import { titleChange } from "@/services/title-manager";
import React, { useEffect, useState } from "react";

const ProfileLayout = () => {
  const [user, setUser] = useState({});
  const [tabValue, setTabValue] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      setTabValue(parsedUser.role);
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
