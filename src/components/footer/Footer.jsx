import React from "react";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-BfNap0Pe.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="Recipe Logo" />
          Recipe
        </Link>
        <h2>Route</h2>
      </div>
      <hr />
      <p>
        © 2025 <Link to={"/"}>Ahmed Nabil™</Link> . All Rights Reserved.
      </p>
    </footer>
  )
}
