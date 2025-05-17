import DataProfile from "@/components/profile/DataProfile";
import Profile from "@/components/profile/Profile";
import { titleChange } from "@/services/title-manager";
import React from "react";

const ProfileLayout = () => {
  titleChange("Profile - Universitas Narotama");

  return (
    <div className="container flex">
      <div className="w-full flex flex-col items-center">
        <Profile>
          <DataProfile />
        </Profile>
      </div>
    </div>
  );
};

export default ProfileLayout;
