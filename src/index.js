import "./style";
import { Component, render } from "preact";
import { Result } from "./result";
import Chip from "./components/Chip";

export default class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    let myContacts = [];
    for (let i = 0; i < 10; i++) {
      const contact = {
        name: "user" + i,
        email: "user" + i + "@user.com"
      };
      myContacts.push(contact);
    }
    this.setState({ contacts: myContacts });
  }

  render() {
    return (
      <div>
        <div class="list">
          {this.state.contacts.map(contact => (
            <Chip key={contact.email} contact={contact} />
          ))}
        </div>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
