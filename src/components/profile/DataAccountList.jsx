import { BookKey, Home, IdCard, Mail, PersonStanding } from "lucide-react";

export const dataAccountList = (tabValue, userData) => {
  const fieldSetAccountList = [
    {
      label: tabValue === "mahasiswa" ? "NIM" : "NIP",
      value: tabValue === "mahasiswa" ? userData.nim : userData.nip,
      icon: <IdCard className="h-4 w-4" />,
    },
    {
      label: "Nama",
      value: userData.nama,
      icon: <PersonStanding className="h-4 w-4" />,
    },
    {
      label: "Alamat",
      value: userData.alamat,
      icon: <Home className="h-4 w-4" />,
    },
    {
      label: "Email",
      value: userData.email,
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return fieldSetAccountList;
};

export const dataAkademikList = (userData) => {
  const fieldSetAkademikList = [
    {
      label: "Prodi",
      value: userData.namaProdi?.nama,
      icon: <BookKey className="h-4 w-4" />,
    },
  ];

  return fieldSetAkademikList;
};
