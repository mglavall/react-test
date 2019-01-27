import React, { Component } from "react";
import "./NewCard.css";

class NewCard extends Component {
  state = {
    cardTitle: "Add new card."
  };

  handleChange(event) {
    this.setState({ cardTitle: event.target.value });
  }

  render() {
    return (
      <div className="card d-flex flex-col">
        <textarea
          type="text"
          rows="4"
          maxlength="80"
          value={this.state.cardTitle}
          onChange={this.handleChange.bind(this)}
          name="card"
        />
        <button
          className="add-button"
          onClick={this.props.cardAdded.bind(this, this.state.cardTitle)}
        >
          Create card
        </button>
      </div>
    );
  }
}

export default NewCard;
