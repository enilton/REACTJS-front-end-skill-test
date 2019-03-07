import React, { Component } from 'react';
import '../style/Card';

export default class Card extends Component {
  render() {
  	const { contact } = this.props;    
  	return (
  		contact.visible &&
      <div className="card" >
      	<img src={contact.imgURL} alt="Logo" className="img" />
      	<strong>{contact.name}</strong>
      	<p>{contact.email}</p>
      </div>
  	);
  }
}
