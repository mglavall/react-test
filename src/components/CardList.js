import React from "react";
import Card from "./Card";
import "./CardList.css";

const cardList = props => {
  console.log(props.cards);
  const cardList = props.cards.map(card => {
    return <Card key={card.id} title={card.title} />;
  });
  return <div className="card-grid container">{cardList} </div>;
};

export default cardList;
