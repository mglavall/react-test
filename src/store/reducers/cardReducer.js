import * as actionTypes from "../actions";

const initialState = {
  cards: [
    { id: 1, title: "hola1", description: "wtf" },
    { id: 2, title: "hola1", description: "wtf" },
    { id: 3, title: "hola1", description: "wtf" },
    { id: 4, title: "hola1", description: "wtf" },
    { id: 5, title: "hola1", description: "wtf" },
    { id: 6, title: "hola1", description: "wtf" }
  ]
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CARD:
      let id = 1;
      if (state.cards.length > 0) {
        // Generate the id of the new card
        id = state.cards[state.cards.length - 1].id + 1;
      }
      return { ...state, cards: state.cards.concat({ id, title: action.val.title }) };
    case actionTypes.EDIT_CARD:
      const newCardArray = [...state.cards];
      if (newCardArray[action.index]) {
        // Add the new data to the card
        newCardArray[action.index] = { ...state.cards[action.index], ...action.val };
      }
      return { ...state, cards: newCardArray };
  }
  return state;
};

export default cardReducer;
