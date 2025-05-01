import React, { useEffect, useState } from "react";

const HomeLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
    console.log(user);
  }, []);
  return (
    <div className="">
      <h1>{user.nama}</h1>
    </div>
  );
};

export default HomeLayout;
