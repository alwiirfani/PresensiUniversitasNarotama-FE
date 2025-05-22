import CellAction from "./cell-action";

export const columns = [
  {
    header: "Nama Dosen",
    accessorKey: "nama",
  },
  {
    header: "Mata Kuliah",
    accessorKey: "mata_kuliah",
  },
  {
    header: "Jam Mulai",
    accessorKey: "jam_mulai",
  },
  {
    header: "Jam Selesai",
    accessorKey: "jam_selesai",
  },
  {
    header: "Ruangan",
    accessorKey: "ruangan",
  },
  {
    id: "aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
