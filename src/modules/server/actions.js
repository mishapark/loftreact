import { createAction } from "redux-actions";

export const AUTHENTICATE = "AUTHENTICATE"

export const logIn = (createAction("LOG_IN"));
export const logOut = createAction("LOG_OUT");
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
