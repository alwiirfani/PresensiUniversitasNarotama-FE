import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const DataMahasiswa = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const dataMahasiswa = {
    name: "Alwi",
    email: "alwi@example.com",
    status: "Aktif",
  };

  const dataAkademik = {
    semester: "Ganjil 2024",
    ipk: "3.85",
  };

  return (
    <div className="flex w-full justify-center items-center">
      <Tabs defaultValue="mahasiswa" className="w-11/12">
        <TabsList className="grid w-full grid-cols-2 border border-border shadow-md">
          <TabsTrigger value="mahasiswa">Mahasiwa</TabsTrigger>
          <TabsTrigger value="akademik">Akademik</TabsTrigger>
        </TabsList>
        <TabsContent value="mahasiswa">
          <Card className="h-[24.7rem] sm:h-[31rem] shadow-md">
            <CardContent className="space-y-2 my-3">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  disabled={isDisabled}
                  id="name"
                  defaultValue={dataMahasiswa.name}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  disabled={isDisabled}
                  id="email"
                  type={"email"}
                  defaultValue={dataMahasiswa.email}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="status">Status</Label>
                <Input
                  disabled={isDisabled}
                  id="status"
                  type={"text"}
                  defaultValue={dataMahasiswa.status}
                />
              </div>
            </CardContent>
            <CardFooter>
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
          <Card className="h-[24.7rem] sm:h-[31rem] shadow-md">
            <CardContent className="space-y-2 my-3">
              <div className="space-y-1">
                <Label htmlFor="semester">Semester</Label>
                <Input
                  disabled={isDisabled}
                  id="semester"
                  type={"text"}
                  defaultValue={dataAkademik.semester}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="ipk">IPK</Label>
                <Input
                  disabled={isDisabled}
                  id="ipk"
                  type={"number"}
                  defaultValue={dataAkademik.ipk}
                  step="0.01"
                />
              </div>
            </CardContent>
            <CardFooter>
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
