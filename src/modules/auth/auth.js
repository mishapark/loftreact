import { logIn, logOut } from "./actions";

const token = localStorage.getItem("token");

const initialState = {
  isLoggedIn: token ? true : false,
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
};

export default auth;
