import { createAction } from "redux-actions";

export const GET_ADDRESS = "GET_ADDRESS";
export const POPULATE_ADDRESS = "POPULATE_ADDRESS";

export const getAddress = createAction(GET_ADDRESS);
export const populateAddress = createAction(POPULATE_ADDRESS);