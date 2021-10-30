import React from "react";
import Card from "../Card/Card";
import styles from "../Login/Login.module.css";
import { Button, Input, Link } from "@material-ui/core/";
import { connect } from "react-redux";
import { signUp } from "../../sagas/registrationSaga/actions";
import { useHistory } from "react-router-dom";

const SignupComponent = (props) => {
  const history = useHistory();
  const signup = (event) => {
    event.preventDefault();
    const { email, fname, lname, password } = event.target;
    props.signUp({
      email: email.value,
      password: password.value,
      name: fname.value,
      surname: lname.value,
    });
  };

  if (props.isLoggedIn) {
    history.push("/map");
  }

  return (
    <Card>
      <div className={styles.container}>
        <h1 className={styles.login}>Signup </h1>
        <form onSubmit={signup} className={styles.form}>
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
          <label htmlFor="name">What is your first name?*</label>
          <Input
            type="text"
            name="fname"
            id="fname"
            size="28"
            placeholder="John"
            className={styles.input}
            required
          />
          <label htmlFor="name">What is your last name?*</label>
          <Input
            type="text"
            name="lname"
            id="lname"
            size="28"
            placeholder="Doe"
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
              onClick={props.switchForm}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
};

export const Signup = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { signUp }
)(SignupComponent);
