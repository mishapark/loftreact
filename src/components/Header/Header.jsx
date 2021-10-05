import React from "react";
import logo from "../../img/LoftTaxi.png";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css"

const Header = () => {
  return <div className={styles.header}>
      <img src={logo} alt="Logo" />
      <Navigation/>
  </div>;
};

export default Header;
