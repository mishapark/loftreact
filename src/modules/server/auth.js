import { combineReducers } from "redux";
import { logIn, logOut } from "./actions";

const token = localStorage.getItem("token");

const initialState = {
  isLoggedIn: token ? true : false,
};

const cardInfo = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
};

const cardUpdate = {
  isUpdated: false,
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

const card = (state = cardInfo, action) => {
  switch (action.type) {
    case "GET_CARD_DATA":
      return {
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
      };
    default:
      return state;
  }
};

const profileCard = (state = cardUpdate, action) => {
  switch (action.type) {
    case "SHOW_UPDATED_CARD":
      return {
        isUpdated: true,
      };
    default:
      return state;
  }
};

export default combineReducers({ auth, card, profileCard });
