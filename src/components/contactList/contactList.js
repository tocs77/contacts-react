import React, { useEffect, useState } from 'react';

import ContactCard from './contactCard/contactCard';

import * as apiFunctions from '../../apiFunctions';

import classes from './contactList.module.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const editHandler = (id) => {
    console.log('Edit ', id);
  };

  const deleteHandler = (id) => {
    console.log('Delete ', id);
  };

  useEffect(() => {
    async function f() {
      const newContacts = await apiFunctions.getAllContacts();
      const c = newContacts.map((contact) => {
        return (
          <ContactCard
            contact={contact}
            key={contact.id}
            editHandler={() => editHandler(contact.id)}
            deleteHandler={()=>deleteHandler(contact.id)}
          />
        );
      });
      setContacts(c);
    }
    f();
  }, []);

  if (contacts.length === 0) {
    return <p>No contacts</p>;
  }

  return <ul className={classes.contactList}>{contacts}</ul>;
};

export default ContactList;
