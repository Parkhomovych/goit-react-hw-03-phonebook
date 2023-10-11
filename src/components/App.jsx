import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
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
