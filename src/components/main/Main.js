import React, { Component } from "react";
import ContactForm from "../contactForm/ContactForm";

class Main extends Component {
  state = { contacts: [] };

  addContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  render() {
    return (
      <>
        <ContactForm addContact={this.addContact} />
      </>
    );
  }
}

export default Main;
