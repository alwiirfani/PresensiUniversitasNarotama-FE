import React from "react";
import { Separator } from "../ui/separator";
import dummyUser from "../../assets/images/user.png";

const ProfileMahasiswa = ({ children }) => {
  return (
    <div className="flex flex-col w-[20rem] h-[40rem] sm:w-[40rem] sm:h-[50rem] border border-gray-200 shadow-md rounded-md items-center mt-10">
      <img
        src={dummyUser}
        alt="dummy_user"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-400 mt-5"
      />

      <Separator className="w-3/4 mt-4" />

      <div className="flex w-full mt-4 mx-3">{children}</div>
    </div>
  );
};

export default ProfileMahasiswa;
