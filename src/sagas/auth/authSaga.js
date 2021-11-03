import { takeEvery, call, put } from "@redux-saga/core/effects";
import { AUTHENTICATE, logIn } from "./actions";
import { serverLogin } from "./api";

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const { success, token } = yield call(serverLogin, email, password);
  if (success) {
    yield put(logIn());
    localStorage.setItem("token", token);
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
