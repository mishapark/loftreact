import React from "react";
import Header from "./Header";
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";
import Signup from "./Signup";
import { ReactComponent as Logo} from "./icons/bigLogo.svg"

import styles from "./App.module.css"

const PAGES = {
  map: <Map />,
  profile: <Profile />,
  login: <Login />,
  signup: <Signup/>
};

class App extends React.Component {
  state = { currentPage: "map" };
  loggedIn = false;
  signedUp = true;

  navigateTo = (event) => {
    if (event.target.name === "login") {
      this.loggedIn = false;
    }
    this.setState({ currentPage: event.target.name });
  };

  onLogin = () => {
    this.loggedIn = !this.loggedIn;
    this.setState({ currentPage: this.state.currentPage });
  };

  signUp = () => {
    this.signedUp = !this.signedUp;
    this.setState({ currentPage: this.state.currentPage });
  };

  render() {
    if (!this.loggedIn) {
      return (
        <div className={styles.container}>
          <div className={styles.logo}><Logo/></div>
          <div className={styles.cardContainer}>
            {this.signedUp ? (
              <Login submitHandler={this.onLogin} signupHandler={this.signUp} />
            ) : (
              <Signup submitHandler={this.onLogin} signupHandler={this.signUp} />
            )}
          </div>
        </div>
      );
    }

    return (
      <>
        <Header routeHandler={this.navigateTo} />
        <main>{PAGES[this.state.currentPage]}</main>
      </>
    );
  }
}

export default App;
