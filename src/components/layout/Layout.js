import React from "react";
import s from "./layout.module.css";
import Header from "../header/Header";

const Layout = ({ children }) => (
  <div className={s.layout}>
    <Header />
    <hr />
    <main>{children}</main>
  </div>
);

export default Layout;
