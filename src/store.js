import { createStore, compose, applyMiddleware } from "redux";
import roorReducer from "./modules/reducers"
import { authMiddleware } from "./modules/auth";
import { cardMiddleware } from "./modules/card";

const createAppStore = () => {
  const store = createStore(
    roorReducer,
    compose(
      applyMiddleware(authMiddleware, cardMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );
  return store;
};
export default createAppStore;
