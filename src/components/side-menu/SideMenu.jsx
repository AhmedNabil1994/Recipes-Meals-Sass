import React from "react";
import style from "./sideMenu.module.scss";
import logo from "../../assets/logo-BfNap0Pe.png";
import { Link } from "react-router-dom";
import { GiMeal } from "react-icons/gi";

export default function SideMenu() {
  return (
    <>
      <section className={style.sideMenu}>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
            <img src={logo} className="" alt="Recipe Logo" />
            <ul>
              <li>
                <Link
                  to="/"
                >
                  <GiMeal />
                  <span className="ms-3">Meals</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                >
                  <GiMeal />
                  <span className="ms-3">Ingredients</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                >
                  <GiMeal />
                  <span className="ms-3">Area</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
