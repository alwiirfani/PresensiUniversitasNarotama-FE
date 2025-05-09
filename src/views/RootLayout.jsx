import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        "font-sans",
        "bg-white"
      )}>
      <div className="relative flex flex-col min-h-dvh bg-background overflow-hidden">
        <SiteHeader />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
