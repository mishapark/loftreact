import { logIn } from "./actions";
import { serverLogin } from "./api";
import { AUTHENTICATE } from "./actions";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password);
    if (success) {
      store.dispatch(logIn());
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
    }
  } else {
    next(action);
  }
};
