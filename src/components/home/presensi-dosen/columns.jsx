export const columns = [
  {
    header: "Nama",
    accessorKey: "nama",
    cell: (info) => info.getValue(),
  },
  {
    header: "Tanggal",
    accessorKey: "tanggal",
    cell: (info) => info.getValue(),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => info.getValue(),
  },
  {
    header: "Fakultas",
    accessorKey: "fakultas",
    cell: (info) => info.getValue(),
  },
  {
    header: "Prodi",
    accessorKey: "prodi",
    cell: (info) => info.getValue(),
  },
];
