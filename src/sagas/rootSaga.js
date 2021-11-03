import { fork } from "redux-saga/effects";
import { authSaga } from "./auth/authSaga";
import { cardSaga } from "./card/cardSaga";
import { addressListSaga } from "./addressListSaga/addressListSaga";
import { registrationSaga } from "./registrationSaga/registerSaga";
import { routeSaga } from "./routeSaga/routeSaga";

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(cardSaga);
  yield fork(addressListSaga);
  yield fork(registrationSaga);
  yield fork(routeSaga);
}
