import React from "react";
import MainNav from "./navbar/MainNav";
import MobileNav from "./navbar/MobileNav";

const SiteHeader = () => {
  return (
    <header className="z-10 fixed top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Main Nav */}
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-2">
            {/* Mobile Nav */}
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
