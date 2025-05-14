import { titleChange } from "@/services/title-manager";
import React from "react";

const ChangePasswordLayout = () => {
  titleChange("Change Password - Universitas Narotama");
  return (
    <div className="flex w-full h-screen container justify-center items-center">
      <h1 className="font-bold">ChangePasswordLayout</h1>
    </div>
  );
};

export default ChangePasswordLayout;
