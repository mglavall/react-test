import * as actionTypes from "../actions";

const initialState = {
  cards: [
    { id: 1, title: "card1", description: "description1" },
    { id: 2, title: "card2", description: "description2" },
    { id: 3, title: "card3", description: "description3" }
  ]
};

const cardReducer = (state = initialState, action) => {
  return state;
};

export default cardReducer;
