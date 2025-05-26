import { cn } from "@/lib/utils";
import React from "react";

const ContentDetail = ({ label, value, className }) => {
  return (
    <div className={cn("w-full flex flex-col p-2 rounded-md", className)}>
      <span className="text-sm sm:text-base font-semibold text-muted-foreground">
        {label}
      </span>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default ContentDetail;
