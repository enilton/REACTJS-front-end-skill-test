import React, { Component } from "react";
import "../style/Chip";

export default class Chip extends Component {

  state = {
    contact : ''
  }

  handleClick = () => {
    let contact = this.state.contact;
    contact.visible = false;    
    this.setState({ contact: contact });
  }

  componentDidMount () {
    
    const { contact } = this.props;
    this.setState({ contact: contact });    
  }

  render() {   
    let contact = this.state.contact;
    
    return (  

          //contact.visible &&
          <li className="contact">           
            {
              contact.img && 
              <img src={contact.img} /> 
            }               
            <strong>{contact.name}</strong>                 
            <span class="closebtn" onClick={this.handleClick}>&times;</span>                    
          </li>    
    );
  }
}
