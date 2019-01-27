import React from "react";
import "./Card.css";

const card = props => {
  return (
    <div className="card col-10">
      <div>new card</div>
      <button onClick={props.cardAdded.bind(this, "nueva carta")}>Create card</button>
    </div>
  );
};

export default card;
