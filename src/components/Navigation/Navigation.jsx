import React from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import styles from "./Navigation.module.css"

const Navigation = () => {
  return <nav className={styles.header}>
      <HeaderButton text="Карта"/>
      <HeaderButton text="Профиль"/>
      <HeaderButton text="Выйти"/>
  </nav>;
};

export default Navigation;
