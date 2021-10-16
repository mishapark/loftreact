import React, { useState } from "react";
import { LoginWithAuth } from "../Login/Login";
import Signup from "../Signup/Signup";
import { ReactComponent as Logo } from "../../icons/bigLogo.svg";

import styles from "./Home.module.css";

const Home = () => {
  const [signedUp, setSignedUp] = useState(true);

  const signUp = () => {
    setSignedUp(!signedUp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.cardContainer}>
        {signedUp ? (
          <LoginWithAuth signupHandler={signUp} />
        ) : (
          <Signup signupHandler={signUp} />
        )}
      </div>
    </div>
  );
};

export default Home;
