import './style';
import { Component, render } from 'preact';
import Chip from './components/Chip';
import Card from './components/Card';
import Logo from './style/react_logo.png';


export default class App extends Component {

  state = {
  	contacts: [],
  	selectedContact: ''
  };

  componentDidMount() {
  	let myContacts = [];
  	for (let i = 0; i < 10; i++) {
  		const contact = {
  			_id: i,
  			name: 'user' + i,
  			email: 'user' + i + '@user.com',
  			visible: true,
  			imgURL: Logo
  		};
  		myContacts.push(contact);
  	}
  	this.setState({ contacts: myContacts });
  }

  render() {
   
  	return (
  		<div>
  			<div class="list" >
  				{this.state.contacts.map(contact => (
  					<Card key={contact._id} contact={contact} />
  				))}
  			</div>

  			<div class="list" >
  				{this.state.contacts.map(contact => {
  					<Chip key={contact._id} contact={contact} />;
  				})}
  			</div>        
  		</div>
  	);
  }
}

if (typeof window !== 'undefined') {
	render(<App />, document.getElementById('root'));
}

if (typeof window !== 'undefined') {
	render(<App />, document.getElementById('root'));
}
