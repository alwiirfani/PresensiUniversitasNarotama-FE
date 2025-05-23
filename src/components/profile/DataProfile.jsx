import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import mahasiswaService from "@/services/mahasiswa/mahasiswa-service";
import FieldSet from "./FieldSet";
import { BookKey, Home, IdCard, Mail, PersonStanding } from "lucide-react";
import SkeletonDataProfile from "./SkeletonDataProfile";

const DataProfile = ({ user, tabValue }) => {
  const [userData, setUserData] = useState({});
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
    if (user) handleDataProfile();
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
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 p-2 sm:py-2">
              {isLoading ? (
                <SkeletonDataProfile />
              ) : (
                <>
                  <FieldSet
                    label={user.role === "mahasiswa" ? "NIM" : "NIP"}
                    value={userData.nim}
                    icon={<IdCard className="h-4 w-4" />}
                  />
                  <FieldSet
                    label={"Nama"}
                    value={userData.nama}
                    icon={<PersonStanding className="h-4 w-4" />}
                  />
                  <FieldSet
                    label={"Email"}
                    value={userData.email}
                    icon={<Mail className="h-4 w-4" />}
                  />
                  <FieldSet
                    label={"Alamat"}
                    value={userData.alamat}
                    icon={<Home className="h-4 w-4" />}
                  />
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="akademik">
          <Card className="h-[26.6rem] sm:h-[34rem] shadow-md overflow-y-scroll">
            {tabValue === "mahasiswa" && (
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 p-2 sm:py-2 sm:px-4">
                {isLoading ? (
                  <SkeletonDataProfile />
                ) : (
                  <>
                    <FieldSet
                      label={"Program Studi"}
                      value={userData.namaProdi}
                      icon={<BookKey className="h-4 w-4" />}
                    />
                    <FieldSet label={"IPK"} value={0} />
                  </>
                )}
              </CardContent>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataProfile;
