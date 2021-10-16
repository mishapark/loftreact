import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styles from "./Login.module.css";
import { withAuth } from "../../AuthContext";
import { Button, Input, Link } from "@material-ui/core/";

const Login = (props) => {
  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.logIn(email.value, password.value);
  };

  return (
    <Card>
      <div className={styles.container}>
        <h1 className={styles.login}>Login</h1>
        <form onSubmit={authenticate} className={styles.form}>
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
          <Link className={styles.forgetPsd}>Forgot password?</Link>
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
              onClick={props.signupHandler}
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

export const LoginWithAuth = withAuth(Login);
