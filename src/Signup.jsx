import React from "react";
import Card from "./Card";
import styles from "./Login.module.css";

const Signup = (props) => {
  return (
    <Card>
      <container className={styles.container}>
        <h1 className={styles.login}>Регистрация </h1>
        <form onSubmit={props.submitHandler} className={styles.form}>
          <label htmlFor="email">Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            size="28"
            placeholder="mail@mail.ru"
            required
          />
          <label htmlFor="password">Как вас зовут?*</label>
          <input
            type="text"
            name="name"
            id="name"
            size="28"
            placeholder="Петр Александрович"
            required
          />
          <label htmlFor="password">Придумайте пароль*</label>
          <input
            type="password"
            name="password"
            id="password"
            size="28"
            placeholder="*************"
            required
            style={{ marginBottom: "50px" }}
          />
          <button type="submit" className={styles.submitBtn}>
            Зарегистрироваться
          </button>
          <p className={styles.newUser}>
            Уже зарегистрированы?&nbsp;
            <button className={styles.signup} type="button" onClick={props.signupHandler}>
              Войти
            </button>
          </p>
        </form>
      </container>
    </Card>
  );
};

export default Signup;
