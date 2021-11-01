import React from "react";
import Card from "../Card/Card";
import { Button } from "@material-ui/core/";
import styles from "./TaxiOrderMsg.module.css";

export default function TaxiFormMsg(props) {
  return (
    <Card style={{ position: "absolute", top: "160px", left: "100px" }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your order is placed</h1>
        <p className={styles.text}>The taxi is on its way! ETA: 10 min</p>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.btn}
          onClick={props.newOrderHandler}
        >
          Place new order
        </Button>
      </div>
    </Card>
  );
}
