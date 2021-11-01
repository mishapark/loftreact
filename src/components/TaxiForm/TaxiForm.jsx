import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import TaxiFormMsg from "../TaxiFormMsg/TaxiFormMsg";
import Car from "../Car/Car";
import styles from "./TaxiForm.module.css";
import { Button, Select, FormControl, InputLabel } from "@material-ui/core/";
import carsData from "./TaxiData.json";
import { ReactComponent as Circle } from "../../icons/departLogo.svg";
import { ReactComponent as Nav } from "../../icons/navLogo.svg";
import { ReactComponent as X } from "../../icons/X.svg";
import classNames from "classnames/bind";
import { populateAddress } from "../../sagas/addressListSaga/actions";
import { connect } from "react-redux";

const cx = classNames.bind(styles);

const TaxiFormComponent = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const changeFromHandler = (event) => {
    setFrom(event.target.value);
  };

  const changeToHandler = (event) => {
    setTo(event.target.value);
  };

  const populateList = props.populateAddress;
  useEffect(() => {
    populateList();
  }, [populateList]);

  let content;

  if (!props.card.cardName) {
    content = <TaxiFormMsg />;
  } else {
    content = (
      <form onSubmit={props.submitHandler}>
        <div className={styles.inputs}>
          <div className={styles.container}>
            <Circle style={{ marginRight: "15px" }} />
            <FormControl className={styles.formControl}>
              <InputLabel shrink>Start</InputLabel>
              <Select
                native
                value={from}
                onChange={changeFromHandler}
                name="from"
              >
                <option value="" disabled>
                  From
                </option>
                {props.addressList.addresses
                  .filter((place) => place !== to)
                  .map((address) => (
                    <option key={address}>{address}</option>
                  ))}
              </Select>
            </FormControl>
            <X
              style={{ marginLeft: "15px", cursor: "pointer" }}
              onClick={() => setFrom("")}
            />
          </div>
          <div className={styles.container}>
            <Nav style={{ marginRight: "15px" }} />
            <FormControl className={styles.formControl}>
              <InputLabel shrink>Destination</InputLabel>
              <Select native value={to} onChange={changeToHandler} name="to">
                <option value="" disabled>
                  To
                </option>
                {props.addressList.addresses
                  .filter((place) => place !== from)
                  .map((address) => (
                    <option key={address}>{address}</option>
                  ))}
              </Select>
            </FormControl>
            <X
              style={{ marginLeft: "15px", cursor: "pointer" }}
              onClick={() => setTo("")}
            />
          </div>
        </div>

        <Card>
          <div className={styles.carsContainer}>
            <div className={styles.cars}>
              {carsData.map((car) => (
                <Car
                  // addActive={addActive}
                  key={car.id}
                  name={car.name}
                  price={car.price}
                  img={car.img}
                  className={cx({ car: true, active: true })}
                />
              ))}
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.submitBtn}
              disabled={!from || !to}
            >
              Order Taxi
            </Button>
          </div>
        </Card>
      </form>
    );
  }

  return (
    <Card style={{ position: "absolute", top: "160px", left: "100px" }}>
      {content}
    </Card>
  );
};

export const TaxiForm = connect(
  (state) => ({ addressList: state.addressList, card: state.card }),
  {
    populateAddress,
  }
)(TaxiFormComponent);
