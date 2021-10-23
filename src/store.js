import { createStore, compose, applyMiddleware } from "redux";
import rootReducer, { authMiddleware } from "./modules/server";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );
  return store;
};
export default createAppStore;
