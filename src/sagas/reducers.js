import { combineReducers } from "redux";
import auth from "./auth/auth";
import addressList from "./addressListSaga/addressList";
import route from "./routeSaga/route";
import { card, profileCard } from "./card/card";

export default combineReducers({
  auth,
  card,
  profileCard,
  addressList,
  route,
});
