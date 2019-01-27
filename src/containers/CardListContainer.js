import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import * as actionTypes from "../store/actions";

class CardListContainer extends Component {
  editCard = () => {
    this.props.onEditCard(1, "macaerron");
  };
  render() {
    return (
      <div>
        <button onClick={this.editCard}>remove</button>
        <CardList cards={this.props.cards} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer.cards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: title => dispatch({ type: "CREATE_CARD", val: { title } }),
    onEditCard: (index, title) => dispatch({ type: "EDIT_CARD", val: { title }, index: index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardListContainer);
