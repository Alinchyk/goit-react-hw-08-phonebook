import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicateContact = visibleContacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
    );

    if (isDuplicateContact) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
      </Label>

      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="[+]?[0-9]{1,4}?[-.\s]?[(]?[0-9]{1,3}?[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
