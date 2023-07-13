import { ADD_USER_CARD, INCRE_CARD_QUANTITY, DECRE_CARD_QUANTITY } from "../action";

const initials = {
  userCard: [
    {
      id: 0,
      name: "user0",
      firstName: "Terry",
      lastName: "Medhurst",
      quantity: 1,
      price: 100,
      image: "https://i.dummyjson.com/data/products/1/4.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
    },
    {
      id: 1,
      name: "user1",
      firstName: "Sheldon",
      lastName: "Quigley",
      quantity: 1,
      price: 150,
      image: "https://i.dummyjson.com/data/products/2/3.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
    },
    {
      id: 2,
      name: "user2",
      firstName: "Terrill",
      lastName: "Hills",
      quantity: 1,
      price: 250,
      image: "https://i.dummyjson.com/data/products/2/2.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      id: 3,
      name: "user3",
      firstName: "Miles",
      lastName: "Cummerata",
      quantity: 1,
      price: 500,
      image: "https://i.dummyjson.com/data/products/2/1.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      id: 4,
      name: "user4",
      firstName: "Mavis",
      lastName: "Schultz",
      quantity: 1,
      price: 900,
      image: "https://i.dummyjson.com/data/products/5/1.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
    },
    {
      id: 5,
      name: "user5",
      firstName: "Alison",
      lastName: "Schultz",
      quantity: 1,
      price: 850,
      image: "https://i.dummyjson.com/data/products/4/2.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
    },
    {
      id: 6,
      name: "user6",
      firstName: "Oleta",
      lastName: "Schultz",
      quantity: 1,
      price: 550,
      image: "https://i.dummyjson.com/data/products/5/2.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
    },
    {
      id: 7,
      name: "user7",
      firstName: "Ewell",
      lastName: "Schultz",
      quantity: 1,
      price: 1000,
      image: "https://i.dummyjson.com/data/products/5/3.jpg",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
    },
  ],

  userAddCard: [],
  totalCardPrice: 0,

}

const useReducer = (state = initials, action) => {

  switch (action.type) {
    case ADD_USER_CARD:
      return {
        ...state.userAddCard,
        userAddCard: [...state.userAddCard, action.payload],
        totalCardPrice: state.totalCardPrice + action.payload.price
      };

    case INCRE_CARD_QUANTITY:

      const exitUserCard = state.userAddCard?.find((user) => user.id === action.payload.id)

      const userAddCardQuantity = state?.userAddCard?.map((user) => (
        user.id === action.payload.id ? { ...user, quantity: user.quantity + 1 } : user
      ))

      const userTotalCardPrice = userAddCardQuantity.reduce((total, user) => total + user.price * user.quantity, 0)

      if (exitUserCard) {
        return {
          ...state,
          userAddCard: userAddCardQuantity,
          totalCardPrice: userTotalCardPrice
        };
      } else {
        return {
          ...state,
          userAddCard: [...state.userAddCard, { ...action.payload, quantity: 1 }]
        }
      };

    case DECRE_CARD_QUANTITY:

      const userRemoveCardQuantity = state?.userAddCard?.map((user) => (
        user.id === action.payload.id && user.quantity >= 1 ? { ...user, quantity: user.quantity - 1 } : user
      ))

      const userRemoveCardPrice = userRemoveCardQuantity.reduce((total, user) => total + user.price * user.quantity, 0)

      return {
        ...state,
        userAddCard: userRemoveCardQuantity,
        totalCardPrice: userRemoveCardPrice,
      };

    default:
      return state
  }
}

export default useReducer;


