import React from "react";
import { Separator } from "../ui/separator";

const ProfileMahasiswa = ({ children }) => {
  return (
    <div className="flex flex-col w-[20rem] h-[40rem] sm:w-[40rem] sm:h-[50rem] border border-gray-200 shadow-md rounded-md items-center mt-10">
      <img
        src="./src/assets/images/user.png"
        alt="dummy_user"
        className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border-2 border-gray-400 mt-5"
      />

      <Separator className="w-3/4 mt-4" />

      <div className="flex w-full mt-4 mx-3">{children}</div>
    </div>
  );
};

export default ProfileMahasiswa;
