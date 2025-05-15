import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonTableClient = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-4">
      <Skeleton className="w-56 sm:w-80 h-10 sm:h-12 mb-1 rounded-lg" />
      <Skeleton className="w-56 sm:w-80 h-8 sm:h-10 mb-3 rounded-lg" />
      <Skeleton className="w-full h-[0.5px] mb-2 sm:w-3/4" />
      <Skeleton className="w-full h-10 mb-2 rounded-lg" />

      <Skeleton className="w-full h-48 rounded-lg" />

      <div className="flex w-full justify-end mt-2">
        <Skeleton className="w-24 sm:w-28 h-10 rounded-lg" />
        <Skeleton className="w-28 sm:w-32 h-10 ml-2 rounded-lg" />
      </div>
    </div>
  );
};

export default SkeletonTableClient;
