import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Ellipsis } from "lucide-react";
import React from "react";
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
      <DropdownMenuContent className="w-24 sm:w-36">
        <Button
          className="w-full text-xs sm:text-sm justify-start"
          variant="outline"
          onClick={() => onCopy()}>
          Copy ID <Copy className="h-4 w-4" />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
