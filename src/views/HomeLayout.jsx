import IklanBanner from "@/components/home/IklanBanner";
import PresensiDosen from "@/components/home/presensiDosen";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { findAllFakultas } from "@/services/fakultas/fakultas-service";
import { titleChange } from "@/services/title-manager";
import { useEffect, useState } from "react";

const HomeLayout = () => {
  const [user, setUser] = useState({});
  const [fakultas, setFakultas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      console.log(parsedUser);
    }

    const manyFakultas = async () => {
      try {
        const response = await findAllFakultas();
        setFakultas(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching fakultas:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    manyFakultas();
  }, []);

  // title
  titleChange("Universitas Narotama");
  return (
    <div className="container h-full flex flex-col items-center">
      {/* konten bagian atas */}
      <div className="w-full items-center justify-center">
        {user && user.nama ? (
          <h1 className="mt-3 text-3xl text-center break-words">
            Welcome, {user.nama} &#129299;
          </h1>
        ) : (
          <h1 className=" mt-3 text-xl sm:text-3xl text-center break-words">
            Silahkan login terlebih dahulu untuk melakukan Presensi &#129300;
          </h1>
        )}
      </div>

      {/* iklan kampus */}
      <div className="flex w-full items-center justify-center h-56 sm:h-80 mt-6">
        <IklanBanner />
      </div>

      {/* test get data fakultas */}
      <div className="w-full h-52 mt-16">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Skeleton className={"w-[47%] h-7 bg-gray-300"} />
          </div>
        ) : fakultas.length > 0 ? (
          fakultas.map((fakultas) => (
            <div key={fakultas.id}>
              <div className="h-32 text-center">
                <span className="font-bold">Fakultas</span> : {fakultas.nama} -{" "}
                <span className="font-bold">Prodi</span> :{" "}
                {fakultas.prodi[0].nama}, {fakultas.prodi[1].nama}
              </div>
              <Separator className="my-6" />
            </div>
          ))
        ) : (
          <p className="text-center">Tidak ada data fakultas.</p>
        )}
      </div>

      {/* tabel kehadiran dosen */}
      <div className="w-full h-52 mb-64 sm:mb-52">
        <PresensiDosen />
      </div>
    </div>
  );
};

export default HomeLayout;
