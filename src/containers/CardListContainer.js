import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";

class CardListContainer extends Component {
  render() {
    return <CardList />;
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer.cards
  };
};

export default connect(mapStateToProps)(CardListContainer);
