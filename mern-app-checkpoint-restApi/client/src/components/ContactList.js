import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readContacts } from '../redux/actions/contactActions';
import ContactCards from './ContactCards';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readContacts());
  }, [dispatch]);

  const contactList = useSelector((state) => state.ContactReducer.contacts);

  return (
    <div>
      {!contactList.length ? (
        <h1>no contacts</h1>
      ) : (
        contactList.map((contact) => <ContactCards key={contact._id} contact={contact} />)
      )}
    </div>
  );
};

export default ContactList;
