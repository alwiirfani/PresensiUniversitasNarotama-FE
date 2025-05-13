import DataMahasiswa from "@/components/profile/DataMahasiswa";
import ProfileMahasiswa from "@/components/profile/ProfileMahasiswa";
import React from "react";

const ProfileLayout = () => {
  return (
    <div className="container flex">
      <div className="w-full flex flex-col items-center">
        <ProfileMahasiswa>
          <DataMahasiswa />
        </ProfileMahasiswa>
      </div>
    </div>
  );
};

export default ProfileLayout;
