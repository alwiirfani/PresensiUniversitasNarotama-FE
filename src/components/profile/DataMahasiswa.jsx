import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const DataMahasiswa = () => {
  const [user, setUser] = useState({});
  const [tabValue, setTabValue] = useState("mahasiswa");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      if (parsedUser.role === "mahasiswa") {
        setTabValue("mahasiswa");
      } else {
        setTabValue("dosen");
      }
    }
  }, []);

  const dataMahasiswa = {
    name: "Alwi",
    email: "alwi@example.com",
    status: "Aktif",
  };

  const dataAkademik = {
    semester: "Genap 2025",
    ipk: "3.85",
  };

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
              <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  disabled={isDisabled}
                  id="name"
                  defaultValue={dataMahasiswa.name}
                  type={"text"}
                  className="w-full overflow-auto whitespace-nowrap"
                />
              </div>
              <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  disabled={isDisabled}
                  id="email"
                  type={"email"}
                  defaultValue={dataMahasiswa.email}
                  className="w-full"
                />
              </div>
              <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                <Label htmlFor="status">Status</Label>
                <Input
                  disabled={isDisabled}
                  id="status"
                  type={"text"}
                  defaultValue={dataMahasiswa.status}
                  className="w-full overflow-auto"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-2 sm:p-3">
              {isDisabled ? (
                <Button
                  className="w-full hover:bg-white hover: border border-border"
                  variant="secondary"
                  onClick={() => setIsDisabled(false)}>
                  Edit
                </Button>
              ) : (
                <Button
                  className="w-full hover:bg-white hover: border border-border"
                  variant="secondary"
                  onClick={() => setIsDisabled(true)}>
                  Save
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="akademik">
          <Card className="h-[26.6rem] sm:h-[34rem] shadow-md overflow-y-scroll">
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 p-2 sm:py-2 sm:px-4">
              <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                <Label htmlFor="semester">Semester</Label>
                <Input
                  disabled={isDisabled}
                  id="semester"
                  defaultValue={dataAkademik.semester}
                  type={"text"}
                  className="w-full"
                />
              </div>
              <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start sm:flex-col gap-1">
                <Label htmlFor="ipk">IPK</Label>
                <Input
                  disabled={isDisabled}
                  id="ipk"
                  type={"number"}
                  defaultValue={dataAkademik.ipk}
                  className="w-full"
                  step="0.01"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-2 sm:p-3">
              {isDisabled ? (
                <Button
                  className="w-full hover:bg-white hover: border border-border"
                  variant="secondary"
                  onClick={() => setIsDisabled(false)}>
                  Edit
                </Button>
              ) : (
                <Button
                  className="w-full hover:bg-white hover: border border-border"
                  variant="secondary"
                  onClick={() => setIsDisabled(true)}>
                  Save
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataMahasiswa;
