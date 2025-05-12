export const columns = [
  {
    header: "Nama Dosen",
    accessorKey: "nama",
    cell: (info) => info.getValue(),
  },
  {
    header: "Fakultas",
    accessorKey: "fakultas",
    cell: (info) => info.getValue(),
  },
  {
    header: "Program Studi",
    accessorKey: "prodi",
    cell: (info) => info.getValue(),
  },
];
