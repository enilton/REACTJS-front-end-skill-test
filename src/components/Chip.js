import React, { Component } from "react";
import "./Chip.css";

export default class Chip extends Component {
  handleClick = () => {};

  render() {
    const { contact } = this.props;

    return (
      <li className="contact">
        <strong>{contact.name}</strong>
        <p>{contact.email}</p>
        <button type="button" onClick={this.handleClick}>
          <p>+</p>
        </button>
      </li>
    );
  }
}
