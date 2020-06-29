import React, { useEffect, useState } from 'react';

import * as apiFunctions from '../apiFunctions';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function f() {
      const newContacts = await apiFunctions.getAllContacts();
      const c = newContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <p>{contact.firstName}</p>
            <p>{contact.secondName}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </li>
        );
      });
      setContacts(c);
    }
    f();
  }, []);

  if (contacts.length === 0) {
    return <p>No contacts</p>;
  }

  return <ul>{contacts}</ul>;
};

export default ContactList;
