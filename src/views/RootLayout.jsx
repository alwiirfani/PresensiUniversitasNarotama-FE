import SiteHeader from "@/components/SiteHeader";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

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
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
