import React from "react";
import SideMenu from "../side-menu/SideMenu";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SideMenu />
        <div className="flex-1 p-4 sm:ml-64">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
