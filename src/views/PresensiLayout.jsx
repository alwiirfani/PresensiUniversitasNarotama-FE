import { titleChange } from "@/services/title-manager";
import React from "react";

const PresensiLayout = () => {
  titleChange("Presensi - Universitas Narotama");

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      PresensiLayout
    </div>
  );
};

export default PresensiLayout;
