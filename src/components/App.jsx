import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  handlerSubmit = ({ name, number }, { resetForm }) => {
    if (this.state.contacts.find(elem => elem.name === name)) {
      Report.failure('Помилка', 'У вас вже доданий цей контакт', 'Поняв');
      return;
    }
    const id = nanoid(10);
    this.setState(prevState => ({
      contacts: prevState.contacts.concat({ name, number, id }),
    }));
    resetForm();
  };
  handlerFilter = evt => {
    this.setState(prevState => ({
      filter: evt.target.value,
    }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submit={this.handlerSubmit} />
        <h2>Contacts</h2>
        <Filter handlerFilter={this.handlerFilter} />
        <ContactList
          delCont={this.deleteContact}
          filter={this.state.filter}
          list={this.state.contacts}
        />
      </div>
    );
  }
}
