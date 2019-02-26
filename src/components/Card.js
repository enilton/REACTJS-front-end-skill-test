import React, { Component } from "react";
import "../style/Card";

export default class Card extends Component {
  handleClick = () => {};

  render() {
    const { cardInfo } = this.props;

    return (
      <li className="cardInfo">
        <strong>{cardInfo.imgURL}</strong>
        <p>{cardInfo.text}</p>
        <button type="button" onClick={this.handleClick}>
          <p>More...</p>
        </button>
      </li>
    );
  }
}
