import { createStore, compose, applyMiddleware } from "redux";
import rootReducer, { authMiddleware, cardMiddleware } from "./modules/server";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
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
