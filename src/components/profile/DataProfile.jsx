import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardFooter } from "../ui/card";
import mahasiswaService from "@/services/mahasiswa/mahasiswa-service";

const DataProfile = () => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [tabValue, setTabValue] = useState("mahasiswa");
  const [isLoading, setIsLoading] = useState(false);

  const handleDataProfile = async () => {
    try {
      setIsLoading(true);
      if (user.role === "mahasiswa") {
        const response = await mahasiswaService.findMahasiswaByNim(
          user.id,
          user.accessToken
        );

        setUserData(response.data);
        console.log(response);
      } else if (user.role === "dosen") {
        // Lakukan tindakan untuk dosen
      }
    } catch (error) {
      console.error("Error fetching data profile:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

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

  useEffect(async () => {
    if (user) await handleDataProfile();
  }, [user]);

  return (
    <div className="flex w-full justify-center items-center">
      <Tabs defaultValue={tabValue} className="w-11/12">
        <TabsList className="grid w-full grid-cols-2 border border-border shadow-md">
          <TabsTrigger value={tabValue}>
            {user.role === "mahasiswa" ? "Mahasiswa" : "Dosen"}
          </TabsTrigger>
          <TabsTrigger value="akademik">Akademik</TabsTrigger>
        </TabsList>
        <TabsContent value={tabValue}>
          <Card className="h-[26.6rem] sm:h-[34rem] shadow-md overflow-y-scroll">
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 p-2 sm:py-2 sm:px-4">
              {isLoading ? (
                <div className="col-span-2 flex justify-center items-center h-32">
                  <span className="text-gray-500 text-sm">Memuat data...</span>
                </div>
              ) : (
                <>
                  <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                    <Label htmlFor="nama" className="text-xs sm:text-base">
                      Nama
                    </Label>
                    <Input
                      id="nama"
                      defaultValue={userData.nama}
                      type={"text"}
                      className="w-full overflow-auto whitespace-nowrap"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                    <Label htmlFor="email" className="text-xs sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type={"email"}
                      defaultValue={userData.email}
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                    <Label htmlFor="alamat" className="text-xs sm:text-base">
                      Alamat
                    </Label>
                    <Input
                      id="alamat"
                      type={"text"}
                      defaultValue={userData.alamat}
                      className="w-full"
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="akademik">
          <Card className="h-[26.6rem] sm:h-[34rem] shadow-md overflow-y-scroll">
            {tabValue === "mahasiswa" && (
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 p-2 sm:py-2 sm:px-4">
                <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                  <Label htmlFor="prodi" className="text-xs sm:text-base">
                    Program Studi
                  </Label>
                  <Input
                    id="prodi"
                    defaultValue={userData.namaProdi}
                    type={"text"}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                  <Label htmlFor="ipk">IPK</Label>
                  <Input
                    id="ipk"
                    type={"number"}
                    defaultValue={0}
                    className="w-full"
                    step="0.01"
                  />
                </div>
              </CardContent>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataProfile;
