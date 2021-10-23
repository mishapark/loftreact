import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

export const Private = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({ component: RouteComponent, isLoggedIn, ...rest }) => {
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoggedIn ? <RouteComponent {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
});