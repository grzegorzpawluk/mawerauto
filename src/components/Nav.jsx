import React, { useState } from "react";
import NavStyles from "./../theme/Nav.module.css";
import { Link } from "react-router-dom";
import classes from "classnames";
import mawerLogo from "../mawer_logo.jpg";

function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className={NavStyles.logo}>
        <Link to="/">
          <img className={NavStyles.image} src={mawerLogo} alt="logo" />
        </Link>
      </div>
      <ul
        className={
          toggle
            ? classes(NavStyles.open, NavStyles.navLinks)
            : NavStyles.navLinks
        }>
        <Link to="/cars">
          <li className={NavStyles.link} onClick={() => setToggle(!toggle)}>
            Samochody
          </li>
        </Link>
        <Link to="/about">
          <li className={NavStyles.link} onClick={() => setToggle(!toggle)}>
            O firmie
          </li>
        </Link>
        <Link to="/contact">
          <li className={NavStyles.link} onClick={() => setToggle(!toggle)}>
            Kontakt
          </li>
        </Link>
      </ul>
      <div
        className={
          toggle
            ? classes(NavStyles.burger, NavStyles.toggle)
            : NavStyles.burger
        }
        onClick={() => {
          setToggle(!toggle);
        }}>
        <div className={NavStyles.line1}></div>
        <div className={NavStyles.line2}></div>
        <div className={NavStyles.line3}></div>
      </div>
    </nav>
  );
}

export default Nav;
