import React, { useEffect, useState } from "react";
import JadwalMataKuliahClient from "./jadwal/client";

const JadwalMataKuliah = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="flex-1 space-y-4 pt-6">
          <JadwalMataKuliahClient data={[]} />
        </div>
      )}
    </div>
  );
};

export default JadwalMataKuliah;
