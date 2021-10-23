import React from "react";
import CreditCard from "../CreditCard/CreditCard";
import styles from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={styles.container}>
        <CreditCard/>
    </div>
  );
};

export default Profile;
