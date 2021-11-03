import { takeEvery, call, put } from "@redux-saga/core/effects";
import { SIGN_UP } from "./actions";
import { logIn } from "../auth/actions";
import { signup } from "./api";

export function* signUpSaga(action) {
  const { email, password, name, surname } = action.payload;
  const { success, token } = yield call(signup, email, password, name, surname);
  if (success) {
    yield put(logIn());
    localStorage.setItem("token", token);
  }
}

export function* registrationSaga() {
  yield takeEvery(SIGN_UP, signUpSaga);
}
