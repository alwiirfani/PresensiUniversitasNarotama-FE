import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import mahasiswaService from "@/services/mahasiswa/mahasiswa-service";
import FieldSet from "./FieldSet";
import SkeletonDataProfile from "./SkeletonDataProfile";
import dosenService from "@/services/dosen/dosen-service";
import { cn } from "@/lib/utils";
import { dataAccountList, dataAkademikList } from "./DataAccountList";

const DataProfile = ({ user, tabValue }) => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDataProfile = async () => {
    try {
      setIsLoading(true);
      if (user.role === "mahasiswa") {
        const response = await mahasiswaService.findMahasiswaByNim(user.id);

        setUserData(response.data);
        console.log(response);
      } else if (user.role === "dosen") {
        const response = await dosenService.findDosenByNip(user.id);

        setUserData(response);
        console.log(response);
      }
    } catch (error) {
      console.error("Error fetching data profile:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fieldSetAccountList = dataAccountList(tabValue, userData);
  const fieldSetAkademikList = dataAkademikList(userData);

  useEffect(() => {
    if (user) handleDataProfile();

    console.log("tabValue: ", tabValue);
  }, [user]);

  return (
    <div className="flex w-full justify-center items-center">
      {tabValue && (
        <Tabs defaultValue={tabValue} className="w-11/12">
          <TabsList
            className={cn(
              "grid w-full border border-border shadow-md",
              tabValue === "mahasiswa" ? "grid-cols-2" : "grid-cols-1"
            )}>
            <TabsTrigger value={tabValue}>
              {tabValue === "mahasiswa" ? "Mahasiswa" : "Dosen"}
            </TabsTrigger>
            {tabValue === "mahasiswa" && (
              <TabsTrigger value="akademik">Akademik</TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={tabValue}>
            <Card className="h-[26.6rem] sm:h-[34rem] shadow-md overflow-y-scroll">
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 p-2 sm:py-2">
                {isLoading ? (
                  <SkeletonDataProfile />
                ) : (
                  <>
                    {userData &&
                      fieldSetAccountList.map((item, index) => (
                        <FieldSet
                          key={index}
                          label={item.label}
                          value={item.value}
                          icon={item.icon}
                        />
                      ))}
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          {tabValue === "mahasiswa" && (
            <TabsContent value="akademik">
              <Card className="h-[26.6rem] sm:h-[34rem] shadow-md overflow-y-scroll">
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 p-2 sm:py-2 sm:px-4">
                  {isLoading ? (
                    <SkeletonDataProfile />
                  ) : (
                    <>
                      {userData &&
                        fieldSetAkademikList.map((item, index) => (
                          <FieldSet
                            key={index}
                            label={item.label}
                            value={item.value}
                            icon={item.icon}
                          />
                        ))}
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      )}
    </div>
  );
};

export default DataProfile;
