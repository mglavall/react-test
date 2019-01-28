import * as actionTypes from "../actions";

const initialState = {
  cards: [
    { id: 1, title: "Poor life choices." },
    { id: 2, title: "Poor life choices." },
    { id: 3, title: "Winking at old people." },
    { id: 4, title: "Winking at old people." },
    { id: 5, title: "Trying to wake up from this nightmare." },
    { id: 6, title: "Trying to remember what music was." }
  ]
};

const cardReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.CREATE_CARD:
      let id = 1;
      if (state.cards.length > 0) {
        // Generate the id of the new card
        id = state.cards[state.cards.length - 1].id + 1;
      }
      return { ...state, cards: state.cards.concat({ id, title: action.val.title }) };

    case actionTypes.EDIT_CARD:
      //If the id exists edit the card title
      const newCardArray = state.cards.map(el =>
        el.id === action.val.id ? Object.assign({}, el, { title: action.val.title }) : el
      );

      return { ...state, cards: newCardArray };
  }
  return state;
};

export default cardReducer;
