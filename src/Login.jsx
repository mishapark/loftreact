import React from "react";
import PropTypes from "prop-types"
import Card from "./Card";
import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <h1 className={styles.login}>Войти</h1>
        <form onSubmit={props.submitHandler} className={styles.form}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            size="28"
            placeholder="Введите email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            size="28"
            placeholder="Введите пароль"
            required
          />
          <button className={styles.forgetPsd}>
            Забыли пароль?
          </button>
          <button type="submit" className={styles.submitBtn}>
            Войти
          </button>
          <p className={styles.newUser}>
            Новый пользователь?&nbsp;
            <button className={styles.signup} type="button" onClick={props.signupHandler}>
              Регистрация
            </button>
          </p>
        </form>
      </div>
    </Card>
  );
};

Login.propTypes = {
  submitHandler: PropTypes.func,
  signupHandler: PropTypes.func
}

export default Login;
