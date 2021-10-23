import React, { useState } from "react";
import { LoginWithAuth } from "../Login/Login";
import Signup from "../Signup/Signup";
import { ReactComponent as Logo } from "../../icons/bigLogo.svg";

import styles from "./Home.module.css";

const Home = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  let form;
  form = isSignedUp ? (
    <LoginWithAuth switchForm={() => setIsSignedUp(false)} />
  ) : (
    <Signup switchForm={() => setIsSignedUp(true)}/>
  );

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.cardContainer}>{form}</div>
    </div>
  );
};

export default Home;
