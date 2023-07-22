import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { Item, ListBtn } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <p>{`${name} : ${number}`}</p>
          <ListBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </ListBtn>
        </Item>
      ))}
    </ul>
  );
};

export default ContactList;
