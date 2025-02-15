import React from "react";
import SideMenu from "../side-menu/SideMenu";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <SideMenu />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
