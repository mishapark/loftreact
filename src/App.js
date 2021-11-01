import React from "react";
import { HeaderWithAuth } from "./components/Header/Header";
import { Map } from "./components/Map/Map";
import { ProfileWithUpdate } from "./components/Profile/Profile";
import Home from "./components/Home/Home";

import { Private } from "./HOCS/PrivateRoute/PrivateRoute";
import { Switch, Route } from "react-router";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Private
          path="/map"
          component={() => (
            <>
              <HeaderWithAuth />
              <Map />
            </>
          )}
        />
        <Private
          path="/profile"
          component={() => (
            <>
              <HeaderWithAuth />
              <ProfileWithUpdate />
            </>
          )}
        />
      </Switch>
    );
  }
}

export default App;
