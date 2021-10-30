import { takeEvery, call, put } from "@redux-saga/core/effects";
import { POPULATE_ADDRESS, getAddress } from "./actions";
import { serverGetAddress } from "./api";

export function* getAddressListSaga() {
  console.log("saga");
  const addresses = yield call(serverGetAddress);
  if (addresses) {
    yield put(getAddress(addresses));
  }
}

export function* addressListSaga() {
  yield takeEvery(POPULATE_ADDRESS, getAddressListSaga);
}
