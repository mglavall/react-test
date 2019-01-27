import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import Card from "../components/Card";
import NewCard from "../components/NewCard";

class CardListContainer extends Component {
  editCard = () => {
    this.props.onEditCard(1, "macaerron");
  };
  render() {
    if (this.props.new) {
      return <NewCard cardAdded={this.props.onAddCard} />;
    }
    return <Card title={this.props.title} />;
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
