import { createAction } from "redux-actions";

export const BUILD_ROUTE = "BUILD_ROUTE";
export const GET_COORDINATES = "GET_COORDINATES";

export const buildRoute = createAction(BUILD_ROUTE);
export const getCoordinates = createAction(GET_COORDINATES);