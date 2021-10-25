import { combineReducers } from "redux";
import auth from "./auth";
import {card, profileCard} from "./card";

export default combineReducers({
  auth,
  card,
  profileCard
});
