import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {
    edit: false,
    newTitle: this.props.title
  };
  handleClick(event) {
    this.setState({ edit: !this.state.edit });
  }

  handleChange(event) {
    this.setState({ newTitle: event.target.value });
  }

  handleAddCard() {
    debugger;
    this.props.cardEdited(this.props.id, this.state.newTitle);
    this.setState({ edit: !this.state.edit });
  }

  render() {
    let card = (
      <div className="card">
        {this.props.title}
        <i className="far fa-edit" onClick={this.handleClick.bind(this)} />
      </div>
    );
    if (this.state.edit) {
      card = (
        <div className="card">
          <textarea
            type="text"
            rows="4"
            maxLength="80"
            value={this.state.newTitle}
            onChange={this.handleChange.bind(this)}
            name="card"
          />
          <button onClick={this.handleAddCard.bind(this, this.props.id, this.state.newTitle)}>
            Add card
          </button>
        </div>
      );
    }
    return card;
  }
}

export default Card;
