import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";

const Header = () => {
  return (
    <>
      <ul className={s.header}>
        <li className={s.headerItem}>
          <NavLink
            to={routes.home}
            exact
            className={s.link}
            activeClassName={s.linkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            exact
            className={s.link}
            activeClassName={s.linkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
