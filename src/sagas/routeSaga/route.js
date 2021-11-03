import { getCoordinates } from "./actions";

const initialState = {
  coordinates: [],
};

const route = (state = initialState, action) => {
  switch (action.type) {
    case getCoordinates.toString():
      return { coordinates: action.payload };
    default:
      return state;
  }
};

export default route;
