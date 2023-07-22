import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { WrapperContacts, Container, TextStyled } from './PhonebookView.syled';

const PhonebookView = () => {
  const contacts = useSelector(getVisibleContacts);
  const empty = () => contacts.length > 0;

  return (
    <Container>
      <WrapperContacts>
        <h1>Phonebook</h1>
        <ContactForm />
      </WrapperContacts>
      <WrapperContacts>
        <h2>Contacts</h2>

        <Filter />
        {empty() ? (
          <>
            <ContactList />
          </>
        ) : (
          <TextStyled>
            Phonebook is empty! <br /> Add your contacts.
          </TextStyled>
        )}
      </WrapperContacts>
    </Container>
  );
};
export default PhonebookView;
