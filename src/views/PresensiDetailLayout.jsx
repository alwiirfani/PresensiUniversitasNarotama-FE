import Content from "@/components/presensi-detail/Content";
import Header from "@/components/presensi-detail/Header";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import jadwalMatkulService from "@/services/jadwal-matkul/jadwal-matkul-service";
import { titleChange } from "@/services/title-manager";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PresensiDetailLayout = () => {
  const { user } = useAuth();
  const params = useParams();
  const [detailJadwalMatKul, setDetailJadwalMatKul] = useState({});

  const fetchDetailJadwalMatKul = async () => {
    const response = await jadwalMatkulService.findByIdJadwalMatkul(params.id);

    console.log(response);
    setDetailJadwalMatKul(response);
  };

  useEffect(() => {
    fetchDetailJadwalMatKul();
  }, []);

  titleChange("Presensi Detail - Universitas Narotama");
  return (
    <div className="container">
      <div className="flex flex-col w-full mt-7 border border-border shadow-md rounded-md">
        {/* Header */}
        <Header role={user?.role} />

        <Separator />

        {/* Konten */}
        <Content data={detailJadwalMatKul} />
      </div>
    </div>
  );
};

export default PresensiDetailLayout;
