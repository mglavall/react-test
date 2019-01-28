import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {
    edit: false,
    newTitle: this.props.title,
    hoveredCard: false
  };

  onCardMouseEnterHandler() {
    this.setState({ hoveredCard: true });
  }

  onCardMouseLeaveHandler() {
    this.setState({ hoveredCard: false });
  }

  handleClick(event) {
    this.setState({ edit: !this.state.edit });
  }

  handleChange(event) {
    this.setState({ newTitle: event.target.value });
  }

  handleAddCard() {
    this.props.cardEdited(this.props.id, this.state.newTitle);
    this.setState({ edit: !this.state.edit });
  }

  render() {
    let card = (
      <div
        className="card d-flex flex-col"
        onMouseEnter={this.onCardMouseEnterHandler.bind(this)}
        onMouseLeave={this.onCardMouseLeaveHandler.bind(this)}
      >
        <div className="h-100">{this.props.title}</div>
        <button
          className={"edit-btn" + (this.state.hoveredCard ? " hovered" : "")}
          onClick={this.handleClick.bind(this)}
        >
          Edit Card
        </button>
      </div>
    );
    if (this.state.edit) {
      card = (
        <div className="card d-flex flex-col">
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
