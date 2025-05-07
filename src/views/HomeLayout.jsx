import { titleChange } from "@/services/title-manager";
import React, { useEffect, useState } from "react";

const HomeLayout = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      console.log(parsedUser);
    }
  }, []);

  // title
  titleChange("Universitas Narotama");
  return (
    <div className="container">
      <div className="w-full items-center justify-center">
        {user && user.nama ? (
          <h1 className="mt-3 text-3xl text-center break-words">
            Welcome, {user.nama}
          </h1>
        ) : (
          <h1 className=" mt-3 text-3xl text-center break-words">
            Not Logged In
          </h1>
        )}
      </div>
    </div>
  );
};

export default HomeLayout;
