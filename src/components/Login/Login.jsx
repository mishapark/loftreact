import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styles from "./Login.module.css";

import { Button, Input, Link } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../../modules/server";

const Login = (props) => {
  const history = useHistory();
  const logIn = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.authenticate({"email": email.value, "password": password.value});
    history.push("/map");
    console.log(props.isLoggedIn);
  };

  return (
    <Card>
      <div className={styles.container}>
        <h1 className={styles.login}>Login</h1>
        <form onSubmit={logIn} className={styles.form}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            size="28"
            placeholder="Enter email"
            className={styles.input}
            required
          />
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            size="28"
            placeholder="Enter password"
            className={styles.lastInput}
            required
          />
          <Link href="/#" className={styles.forgetPsd}>
            Forgot password?
          </Link>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitBtn}
          >
            Login
          </Button>
          <p className={styles.newUser}>
            New User?&nbsp;
            <Link
              className={styles.signup}
              type="button"
              onClick={props.switchForm}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
};

Login.propTypes = {
  submitHandler: PropTypes.func,
  signupHandler: PropTypes.func,
};

export const LoginWithAuth = connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }), {authenticate})(Login);
