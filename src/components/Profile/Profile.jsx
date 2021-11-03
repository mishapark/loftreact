import React, { useState } from "react";
import { Credit } from "../CreditCard/CreditCard";
import { CardNotification } from "../CardNotification/CardNotification";
import styles from "./Profile.module.css";
import { connect } from "react-redux";

const Profile = (props) => {
  const [isUpdated, setIsUpdated] = useState(props.isUpdated);
  const updateForm = () => {
    setIsUpdated(!isUpdated);
  };

  return (
    <div className={styles.container}>
      {isUpdated ? (
        <Credit updateForm={updateForm} />
      ) : (
        <CardNotification updateForm={updateForm} />
      )}
    </div>
  );
};

export const ProfileWithUpdate = connect((state) => ({
  isUpdated: state.profileCard,
}))(Profile);
