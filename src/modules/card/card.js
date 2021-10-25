const cardInfo = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
};

const cardUpdate = {
  isUpdated: false,
};

export const card = (state = cardInfo, action) => {
  switch (action.type) {
    case "GET_CARD_DATA":
      return {
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
      };
    default:
      return state;
  }
};

export const profileCard = (state = cardUpdate, action) => {
  switch (action.type) {
    case "SHOW_UPDATED_CARD":
      return {
        isUpdated: true,
      };
    default:
      return state;
  }
};
