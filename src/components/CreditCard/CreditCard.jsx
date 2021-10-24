import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Button, Input } from "@material-ui/core/";
import { ReactComponent as TaxiLogo } from "../../icons/smallLogo.svg";
import { ReactComponent as Chip } from "../../icons/chip.svg";
import { ReactComponent as MC } from "../../icons/MC.svg";
import styles from "./CreditCard.module.css";

import { saveCard, populateCard } from "../../modules/server";
import { connect } from "react-redux";

const CreditCard = (props) => {
  const [cardNum, setCardNum] = useState(props.card.cardNumber);
  const [cardDate, setCardDate] = useState(props.card.expiryDate);
  const [cardName, setCardName] = useState(props.card.cardName);

  useEffect(() => {
    async function fetchData() {
      await props.populateCard();
    }
    fetchData();
    setCardNum(props.card.cardNumber);
  }, []);

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
                onChange={(e) => setCardName(e.target.value)}
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
                onChange={(e) => setCardNum(e.target.value)}
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
                    onChange={(e) => setCardDate(e.target.value)}
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
              <div className={styles.cardImage}>
                <div className={styles.spaceRow}>
                  <TaxiLogo />
                  <div>{cardDate}</div>
                </div>
                <div className={styles.startRow}>
                  <div className={styles.cardNumber}>{cardNum}</div>
                </div>
                <div className={styles.spaceRow}>
                  <Chip />
                  <div>{cardName}</div>
                  <MC />
                </div>
              </div>
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

export const Credit = connect((state) => ({ card: state.card }), {
  saveCard,
  populateCard,
})(CreditCard);
