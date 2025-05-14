import DataTable from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { columns } from "./columns";

const PresensiDosenClient = ({ data }) => {
  return (
    <div className="items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-0">
        <Heading
          className="flex flex-col items-center justify-center mb-3 w"
          title="Kehadiran Dosen"
          description="hari ini"
          classNameHr={"w-20"}
        />
        <Separator className="w-full sm:w-3/4" />
      </div>
      <DataTable data={data} columns={columns} searchKey={"nama"} />
    </div>
  );
};

export default PresensiDosenClient;
