import React from "react";
import { HeaderWithAuth } from "./components/Header/Header";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

import { withAuth } from "./AuthContext";

const PAGES = {
  map: <Map />,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: "map" };


  navigateTo = (event) => {
    this.setState({ currentPage: event.target.name });
  };

  render() {
    if (this.props.isLoggedIn) {
      return (
        <>
          <HeaderWithAuth routeHandler={this.navigateTo} />
          <main>{PAGES[this.state.currentPage]}</main>
        </>
      );
    }

    return <Home />;
  }
}

export default withAuth(App);
