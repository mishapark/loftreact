import { getAddress } from "./actions";

const initialState = {
  addresses: [],
};

const addressList = (state = initialState, action) => {
  switch (action.type) {
    case getAddress.toString():
      return action.payload;
    default:
      return state;
  }
};

export default addressList;