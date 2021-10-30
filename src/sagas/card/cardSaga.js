import { takeEvery, call, put } from "@redux-saga/core/effects";
import {
  SAVE_CARD,
  POPULATE_CARD,
  showUpdatedCard,
  getCardData,
} from "./actions";
import { updateCard, getCard } from "./api";

export function* saveCardSaga(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const success = yield call(
    updateCard,
    cardNumber.value,
    expiryDate.value,
    cardName.value,
    cvc.value,
    token
  );
  if (success) {
    yield put(showUpdatedCard());
  }
}

export function* populateCardSaga() {
  const token = localStorage.getItem("token");
  const { cardNumber, expiryDate, cardName, cvc, success } = yield call(
    getCard,
    token
  );
  if (success) {
    yield put(
      getCardData({
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc,
      })
    );
  }
}

export function* cardSaga() {
  yield takeEvery(SAVE_CARD, saveCardSaga);
  yield takeEvery(POPULATE_CARD, populateCardSaga);
}
