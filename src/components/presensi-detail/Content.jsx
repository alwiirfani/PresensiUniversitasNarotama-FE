import React from "react";
import ContentDetail from "./ContentDetail";

const Content = ({ data }, loading) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 mb-4">
      <ContentDetail
        label="Nama Dosen Pengajar"
        value={data?.namaDosen}
        className="border-b-2"
      />
      <ContentDetail
        label="Mata Kuliah"
        value={data?.namaMataKuliah}
        className="border-b-2"
      />
    </div>
  );
};

export default Content;
