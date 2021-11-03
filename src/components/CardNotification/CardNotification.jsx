import React from "react";
import Card from "../Card/Card";
import { Button } from "@material-ui/core/";
import styles from "./CrediCardNotificationtCard.module.css";
import { populateCard } from "../../sagas/card/actions";
import { connect } from "react-redux";

const CardNotificationComponent = (props) => {
  const clickHandler = () => {
    props.updateForm();
    props.populateCard();
  };
  return (
    <Card>
      <div className={styles.container}>
        <h1 style={{ marginBottom: "13px" }}>Profile</h1>
        <p style={{ marginBottom: "28px" }}>
          Your credit card has been updated successfully. You can now call a
          taxi.
        </p>
        <Button
          className={styles.btn}
          variant="contained"
          color="primary"
          onClick={clickHandler}
        >
          Submit
        </Button>
      </div>
    </Card>
  );
};

export const CardNotification = connect(null, { populateCard })(
  CardNotificationComponent
);
