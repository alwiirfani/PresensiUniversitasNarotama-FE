import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoNarotama from "../../assets/images/logo_unnar.png";
import { siteConfig } from "@/configs/SiteConfig";
import NavAuthButton from "./NavAuthButton";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const location = useLocation();
  return (
    <>
      <nav className="flex items-center justify-between w-full">
        <div className="flex gap-6 w-[90%]">
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
          <div className="items-center justify-center hidden sm:flex gap-4 w-[55%]">
            <Link
              to={"/dashboard"}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-flex",
                location.pathname === "/dashboard"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}>
              Dashboard
            </Link>
            <Link
              to={"/hama"}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-flex",
                location.pathname === "/hama"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}>
              Hama
            </Link>
            <Link
              to={"/wereng"}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-flex",
                location.pathname === "/wereng"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}>
              Wereng
            </Link>
          </div>
        </div>
        <div className="items-center justify-end hidden sm:flex">
          <NavAuthButton />
        </div>
      </nav>
    </>
  );
};

export default MainNav;
