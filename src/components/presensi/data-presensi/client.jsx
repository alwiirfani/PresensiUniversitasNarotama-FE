import DataTable from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { columns } from "./columns";

const JadwalPresensiClient = ({ data }) => {
  return (
    <div className="items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-0">
        <Heading
          className="flex flex-col items-center justify-center mb-3"
          title="Jadwal Presensi"
          description="hari ini"
          classNameHr={"w-16"}
        />
        <Separator className="w-full sm:w-3/4" />
      </div>
      <DataTable
        inputSearch={"dosen/mata_kuliah/ruangan"}
        data={data}
        columns={columns}
        searchKey={["nama", "ruangan", "mata_kuliah", "prodi"]}
      />
    </div>
  );
};

export default JadwalPresensiClient;
