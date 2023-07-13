export const ADD_USER_CARD = "ADD_USER_CARD"
export const DECRE_CARD_QUANTITY = "DECRE_CARD_QUANTITY"
export const INCRE_CARD_QUANTITY = "INCRE_CARD_QUANTITY"

export const addUserCard = (card) => ({
  type: ADD_USER_CARD,
  payload: card
})

export const increCardQuantity = (card) => ({
  type: INCRE_CARD_QUANTITY,
  payload: card
})

export const decreCardQuantity = (card) => ({
  type: DECRE_CARD_QUANTITY,
  payload: card
})
