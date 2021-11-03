import React from "react";
import Card from "../Card/Card";
import { Button } from "@material-ui/core/";
import styles from "./TaxiFormMsg.module.css";
import { useHistory } from "react-router";

export default function TaxiFormMsg() {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/profile");
  };
  return (
    <Card>
      <div className={styles.container}>
        <p className={styles.text}>Fill the credit card info</p>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.btn}
          onClick={clickHandler}
        >
          Go to profile
        </Button>
      </div>
    </Card>
  );
}
