import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./AuthContext";
import { StylesProvider, MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "loft-taxi-mui-theme";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
