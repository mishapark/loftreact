import { AUTHENTICATE } from "./actions";
import { logIn } from "./actions";
import { serverLogin } from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const { success, token } = await serverLogin(email, password);
    if (success) {
      store.dispatch(logIn());
      localStorage.setItem("token", token);
    }
  } else {
    next(action);
  }
};