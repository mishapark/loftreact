import React from "react";
import styles from "./HeaderButton.module.css"

const HeaderButton = ({text, url}) => {
  return <a href="/" className={styles.button}>
      {text}
  </a>;
};

export default HeaderButton;
