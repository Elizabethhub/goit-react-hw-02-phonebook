import React, { Component } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import Section from "../section/Section";

class Main extends Component {
  state = { contacts: [], filter: "" };

  addContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  onDeleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} contacts={contacts} />
        </Section>
        <Filter handleInputChange={this.handleInputChange} />
        <Section title="Contacts">
          <ContactList contacts={contacts} filter={filter} onDeleteContact={this.onDeleteContact} />
        </Section>
      </>
    );
  }
}

export default Main;
