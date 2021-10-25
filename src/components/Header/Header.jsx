import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../modules/auth";

const Header = (props) => {
  const unauthenticate = () => {
    localStorage.clear();
    props.logOut();
  };

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
            <Link to="/map" name="map">
              Map
            </Link>
          </li>
          <li className={styles.navButton}>
            <Link to="/profile" name="profile">
              Profile
            </Link>
          </li>
          <li className={styles.navButton}>
            <Link to="/" onClick={unauthenticate} name="login">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  routeHandler: PropTypes.func,
};

export const HeaderWithAuth = connect(null, { logOut })(Header);
