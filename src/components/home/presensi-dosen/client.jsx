import DataTable from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { columns } from "./columns";

const PresensiDosenClient = ({ data }) => {
  return (
    <div className="items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
        <Heading
          className="flex flex-col items-center justify-center"
          title="Kehadiran Dosen"
          description="hari ini"
        />
        <Separator className="mt-3 sm:mb-4 w-3/4" />
      </div>
      <Heading title="Fakultas" description="Prodi" />
      <Separator className="my-3" />
      <DataTable data={data} columns={columns} searchKey={"nama"} />
    </div>
  );
};

export default PresensiDosenClient;
