import React from "react";
import { ReactComponent as Logo } from "./icons/logo.svg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <div className={styles.logo}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navButton}>
            <button
              onClick={props.routeHandler}
              name="map"
            >
               Карта
            </button>
          </li>
          <li className={styles.navButton}>
            <button
              onClick={props.routeHandler}
              name="profile"
            >
              Профиль
            </button>
          </li>
          <li className={styles.navButton}>
            <button
              onClick= {props.routeHandler}
              name="login"
            >
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
