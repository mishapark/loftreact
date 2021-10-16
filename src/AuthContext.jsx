import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (email, password) => {
    if (email !== "valid@mail.com" || password !== "123") {
      return;
    }

    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </AuthContext.Consumer>
      );
    }
  };
};
