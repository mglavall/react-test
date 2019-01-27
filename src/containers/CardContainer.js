import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import Card from "../components/Card";
import NewCard from "../components/NewCard";

class CardContainer extends Component {
  render() {
    debugger;
    if (this.props.new) {
      return <NewCard cardAdded={this.props.onAddCard} />;
    }
    return <Card title={this.props.title} id={this.props.id} cardEdited={this.props.onEditCard} />;
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer.cards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: title => dispatch({ type: actionTypes.CREATE_CARD, val: { title } }),
    onEditCard: (id, title) => dispatch({ type: actionTypes.EDIT_CARD, val: { title, id } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
