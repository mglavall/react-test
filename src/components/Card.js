import React from "react";
import "./Card.css";

const card = props => {
  return <div className="card col-10">{props.title} </div>;
};

export default card;
