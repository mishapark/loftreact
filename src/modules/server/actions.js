import { createAction } from "redux-actions";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const SAVE_CARD = "SAVE_CARD";
export const POPULATE_CARD = "POPULATE_CARD";
export const SHOW_UPDATED_CARD = "SHOW_UPDATED_CARD";
export const GET_CARD_DATA = "GET_CARD_DATA";

export const logIn = createAction(LOG_IN);
export const logOut = createAction(LOG_OUT);
export const authenticate = createAction(AUTHENTICATE)

export const showUpdatedCard = createAction(SHOW_UPDATED_CARD)
export const saveCard = createAction(SAVE_CARD)
export const populateCard = createAction(POPULATE_CARD)
export const getCardData = createAction(GET_CARD_DATA)