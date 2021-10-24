import React from "react";
import Card from "../Card/Card";
import { Button } from "@material-ui/core/";
import styles from "./CrediCardNotificationtCard.module.css";

const CardNotification = (props) => {
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
          onClick={props.updateForm}
        >
          Go back to card
        </Button>
      </div>
    </Card>
  );
};

export default CardNotification;
