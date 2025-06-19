import IklanBanner from "@/components/home/IklanBanner";
import PresensiDosen from "@/components/home/PresensiDosen";
import { titleChange } from "@/services/title-manager";
import { useEffect, useState } from "react";

const HomeLayout = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      console.log(parsedUser);
    }
  }, []);

  // title
  titleChange("Universitas Narotama");
  return (
    <div className="container flex flex-col items-center">
      {/* konten bagian atas */}
      <div className="w-full items-center justify-center">
        {user && user.nama ? (
          <h1 className="mt-3 text-3xl text-center break-words">
            Welcome, {user.nama} &#128075;
          </h1>
        ) : (
          <h1 className=" mt-3 text-xl sm:text-3xl text-center break-words">
            Silahkan login terlebih dahulu untuk melakukan Presensi &#xf1d8;
          </h1>
        )}
      </div>

      {/* iklan kampus */}
      <div className="flex w-full items-center justify-center h-56 sm:h-80 mt-6">
        <IklanBanner />
      </div>

      {/* tabel kehadiran dosen */}
      <div className="w-full mt-14 ">
        <PresensiDosen />
      </div>
    </div>
  );
};

export default HomeLayout;
