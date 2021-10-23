import { combineReducers } from "redux";
import { logIn, logOut } from "./actions";

const email = localStorage.getItem("email");
const password = localStorage.getItem("email");

const initialState = {
  isLoggedIn: (email && password) ? true : false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case logIn.toString():
      return { isLoggedIn: true };
    case logOut.toString():
      return { isLoggedIn: false };
    default:
      return state;
  }
}

export default combineReducers({auth})