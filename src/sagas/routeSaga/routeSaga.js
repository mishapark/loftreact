import { takeEvery, call, put } from "@redux-saga/core/effects";
import { BUILD_ROUTE, getCoordinates } from "./actions";
import { serverBuildRoute } from "./api";

export function* buildRouteSaga(action) {
  const { from, to } = action.payload;
  const result = yield call(serverBuildRoute, from, to);
  if (result) {
    yield put(getCoordinates(result));
  }
}

export function* routeSaga() {
  yield takeEvery(BUILD_ROUTE, buildRouteSaga);
}
