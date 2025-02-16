import React from "react";
import style from "./loader.module.scss";

export default function Loader() {
  return (
    <div
      className={`${style.loaderContainer}`}
    >
      <div className={`${style.loader}`}></div>
    </div>
  );
}
