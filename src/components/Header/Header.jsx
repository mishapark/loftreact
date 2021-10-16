import React from "react";
import PropTypes from "prop-types"
import { ReactComponent as Logo } from "../../icons/logo.svg";
import styles from "./Header.module.css";
import { withAuth } from "../../AuthContext";

const Header = (props) => {
  const unauthenticate = () => {
    props.logOut()
  }

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
               Map
            </button>
          </li>
          <li className={styles.navButton}>
            <button
              onClick={props.routeHandler}
              name="profile"
            >
              Profile
            </button>
          </li>
          <li className={styles.navButton}>
            <button
              onClick= {unauthenticate}
              name="login"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  routeHandler: PropTypes.func
}

export const HeaderWithAuth = withAuth(Header);
