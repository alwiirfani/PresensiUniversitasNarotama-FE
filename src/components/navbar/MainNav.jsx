import React from "react";
import { Link } from "react-router-dom";
import logoNarotama from "../../assets/images/logo_unnar.png";
import { siteConfig } from "@/configs/SiteConfig";
import NavAuthButton from "./NavAuthButton";

const MainNav = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full">
        <Link to="/" className="mr-6 flex items-center space-x-1">
          <div className="p-[5.5px] sm:p-[6px]">
            <img
              src={logoNarotama}
              alt="Logo Universitas Narotama"
              className="w-10 h-10 sm:h-12 sm:w-12 rounded-full"
            />
          </div>
          <div className="font-bold text-xs md:text-xl">
            {siteConfig.logo.name}
          </div>
        </Link>
        <div className="items-center justify-end hidden sm:flex">
          <NavAuthButton />
        </div>
      </nav>
    </>
  );
};

export default MainNav;
