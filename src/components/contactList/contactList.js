import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import ContactCard from './contactCard/contactCard';

import * as apiFunctions from '../../apiFunctions';

import classes from './contactList.module.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  let history = useHistory();

  const updateContacts = useCallback(() => {
    async function f() {
      const newContacts = await apiFunctions.getAllContacts();
      setContacts(newContacts);
    }
    f();
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      updateContacts();
    }
    return () => (isSubscribed = false);
  }, [updateContacts]);

  const editHandler = async (id) => {
    history.push(`/edit/${id}`);
  };

  const deleteHandler = async (id) => {
    await apiFunctions.deleteContact(id);
    updateContacts();
  };

  if (contacts.length === 0) {
    return <p>No contacts</p>;
  }

  const contactCards = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        editHandler={() => editHandler(contact.id)}
        deleteHandler={() => deleteHandler(contact.id)}
      />
    );
  });

  return <ul className={classes.contactList}>{contactCards}</ul>;
};

export default ContactList;
