import Card from "../Card/Card";
import React from "react";
import styles from "./Car.module.css";


const Car = (props) => {
  return (
    <div className={props.className} onClick={props.addActive}>
      <Card>
        <div className={styles.container}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.subtitle}>Price</p>
          <p className={styles.price}>{props.price}</p>
          <div className={styles.imgContainer}>
            <img
              src={require(`../../img/${props.img}`).default}
              alt=""
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Car;
