import React from "react";

const ErrorNotFoundLayout = () => {
  return (
    <div className="w-full flex flex-col min-h-dvh gap-3 items-center justify-center">
      <img src="./src/assets/page-not-found.svg" alt="404" />
      <h1 className="text-2xl font-bold">Page Not Found</h1>
    </div>
  );
};

export default ErrorNotFoundLayout;
