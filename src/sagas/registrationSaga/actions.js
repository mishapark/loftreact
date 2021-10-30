import { createAction } from "redux-actions";

export const SIGN_UP = "SIGN_UP";
export const REGISTER = "REGISTER";

export const signUp = createAction(SIGN_UP);
export const register = createAction(REGISTER);

