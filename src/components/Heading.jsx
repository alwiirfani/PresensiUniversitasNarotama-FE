import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ title, description, className, classNameHr }) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="flex items-center justify-between w-full">
        <hr className={cn("bg-border py-[0.5px]", classNameHr)} />
        <p className="text-sm text-muted-foreground">{description}</p>
        <hr className={cn("bg-border py-[0.5px]", classNameHr)} />
      </div>
    </div>
  );
};

export default Heading;
