import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { CalendarFold, Copy, Ellipsis } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CellAction = ({ data }) => {
  const onCopy = () => {
    navigator.clipboard.writeText(data.id);
    toast.success("ID Presensi berhasil disalin");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span className="sr-only">Open Menu</span>
          <Ellipsis className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-24 sm:w-36 flex flex-col gap-1">
        <div className="w-full flex flex-col">
          <span className="text-base text-muted-foreground pl-2 py-1">
            Action
          </span>
          <Separator />
        </div>
        <Button
          className="w-full text-sm justify-start border-none"
          variant="outline"
          onClick={() => onCopy()}>
          <Copy className="h-4 w-4" /> Copy ID
        </Button>
        <Link
          to={`/presensi/${data.id}`}
          className="flex w-full text-sm justify-start p-2 pl-4 gap-2 rounded-md hover:bg-slate-100">
          <CalendarFold className="h-4 w-4" /> Detail
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
