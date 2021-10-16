import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styles from "../Login/Login.module.css";
import { Button, Input, Link } from "@material-ui/core/";

const Signup = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <h1 className={styles.login}>Signup </h1>
        <form onSubmit={props.submitHandler} className={styles.form}>
          <label htmlFor="email">Email* </label>
          <Input
            type="email"
            name="email"
            id="email"
            size="28"
            placeholder="mail@mail.com"
            className={styles.input}
            required
          />
          <label htmlFor="name">What is you name?*</label>
          <Input
            type="text"
            name="name"
            id="name"
            size="28"
            placeholder="John Doe"
            className={styles.input}
            required
          />
          <label htmlFor="password">Password*</label>
          <Input
            type="password"
            name="password"
            id="password"
            size="28"
            placeholder="*************"
            required
            style={{ marginBottom: "50px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitBtn}
          >
            Signup
          </Button>
          <p className={styles.newUser}>
            Already a user?&nbsp;
            <Link
              className={styles.signup}
              type="button"
              onClick={props.signupHandler}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
};

Signup.propTypes = {
  submitHandler: PropTypes.func,
  signupHandler: PropTypes.func,
};

export default Signup;
