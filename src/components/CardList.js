import React from "react";
import CardContainer from "../containers/CardContainer";
import "./CardList.css";

const cardList = props => {
  //Add the card of type new to the array
  const cards = props.cards.concat({ id: props.cards[props.cards.length - 1].id + 1, new: true });
  const cardList = cards.map(card => {
    return <CardContainer key={card.id} title={card.title} new={card.new} />;
  });
  return <div className="card-grid container">{cardList} </div>;
};

export default cardList;
