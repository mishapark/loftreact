import React, { useEffect } from "react";
import Card from "../Card/Card";
import { Button, Input } from "@material-ui/core/";
import { ReactComponent as TaxiLogo } from "../../icons/smallLogo.svg";
import { ReactComponent as Chip } from "../../icons/chip.svg";
import { ReactComponent as MC } from "../../icons/MC.svg";
import styles from "./CreditCard.module.css";

import { saveCard } from "../../sagas/card/actions";
import { connect } from "react-redux";

const CreditCard = (props) => {
  const saveCard = (event) => {
    event.preventDefault();
    const { name, cardNumber, date, cvc } = event.target;
    const cardInfo = {
      cardNumber: cardNumber,
      expiryDate: date,
      cardName: name,
      cvc: cvc,
      token: localStorage.getItem("token"),
    };
    props.saveCard(cardInfo);
    props.updateForm();
  };

  let sideCard = null;
  if (!props.card.cardName) {
    sideCard = (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <div className={styles.loaderText}>Enter card details please</div>
      </div>
    );
  } else {
    sideCard = (
      <>
        <div className={styles.spaceRow}>
          <TaxiLogo />
          <div>{props.card.expiryDate}</div>
        </div>
        <div className={styles.startRow}>
          <div className={styles.cardNumber}>{props.card.cardNumber}</div>
        </div>
        <div className={styles.spaceRow}>
          <Chip />
          <div>{props.card.cardName}</div>
          <MC />
        </div>
      </>
    );
  }

  return (
    <Card style={{ width: "770px" }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Profile</h1>
        <div className={styles.subtitle}>Enter card details</div>
        <form onSubmit={saveCard} className={styles.form}>
          <div className={styles.formBody}>
            <div className={styles.details}>
              <label htmlFor="name" className={styles.label}>
                Cardholder Name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                size="28"
                placeholder="Enter name"
                className={styles.input}
                required
              />
              <label htmlFor="cardNumber" className={styles.label}>
                Card Number
              </label>
              <Input
                type="text"
                name="cardNumber"
                id="cardNumber"
                size="28"
                placeholder="Enter card number"
                className={styles.input}
                required
              />
              <div className={styles.dateCvc}>
                <div>
                  <label htmlFor="date" className={styles.label}>
                    MM/YY
                  </label>
                  <Input
                    type="text"
                    name="date"
                    id="date"
                    size="28"
                    placeholder="Enter date"
                    className={styles.lastInput}
                    style={{ marginRight: "35px" }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className={styles.label}>
                    CVC
                  </label>
                  <Input
                    type="text"
                    name="cvc"
                    id="cvc"
                    size="28"
                    placeholder="Enter cvc"
                    className={styles.lastInput}
                    required
                  />
                </div>
              </div>
            </div>
            <Card style={{ flex: 1 }}>
              <div className={styles.cardImage}>{sideCard}</div>
            </Card>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitBtn}
          >
            Save
          </Button>
        </form>
      </div>
    </Card>
  );
};

export const Credit = connect((state) => ({ card: state.card }), { saveCard })(
  CreditCard
);
