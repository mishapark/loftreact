import React, { useEffect } from "react";
import Card from "../Card/Card";
import TaxiFormMsg from "../TaxiFormMsg/TaxiFormMsg";
import Car from "../Car/Car";
import styles from "./TaxiForm.module.css";
import {
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core/";
import carsData from "./TaxiData.json";
import { ReactComponent as Circle } from "../../icons/departLogo.svg";
import { ReactComponent as Nav } from "../../icons/navLogo.svg";
import classNames from "classnames/bind";
import { populateAddress } from "../../sagas/addressListSaga/actions";
import { connect } from "react-redux";

const cx = classNames.bind(styles);

const TaxiFormComponent = (props) => {
  // const [active, setActive] = useState(false);
  const addActive = (event) => {};

  const populateList = props.populateAddress;
  useEffect(() => {
    populateList();
  }, [populateList]);

  let content;

  if (!props.card.cardName) {
    content = <TaxiFormMsg />;
  } else {
    content = (
      <form action="">
        <div className={styles.inputs}>
          <div className={styles.container}>
            <Circle style={{ marginRight: "15px" }} />
            <FormControl className={styles.formControl}>
              <InputLabel shrink>Start</InputLabel>
              <Select displayEmpty>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {props.addressList.addresses.map((address) => (
                  <MenuItem key={address}>{address}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={styles.container}>
            <Nav style={{ marginRight: "15px" }} />
            <FormControl className={styles.formControl}>
              <InputLabel shrink>Destination</InputLabel>
              <Select displayEmpty>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {props.addressList.addresses.map((address) => (
                  <MenuItem key={address}>{address}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <Card>
          <div className={styles.carsContainer}>
            <div className={styles.cars}>
              {carsData.map((car) => (
                <Car
                  addActive={addActive}
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
