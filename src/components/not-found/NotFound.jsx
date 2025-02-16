import React from "react";
import style from "./notFound.module.scss";

export default function NotFound() {
  return (
    <section className={style.notFound}>
      <h2 className="text-4xl md:text-6xl lg:text-8xl">404 Not Found</h2>
      <p>Your visited page not found.</p>
    </section>
  );
}
