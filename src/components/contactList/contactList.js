import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Context } from '../../Context';

import ContactCard from './contactCard/contactCard';

import * as apiFunctions from '../../apiFunctions';

import classes from './contactList.module.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  let history = useHistory();
  const { filterContext } = useContext(Context);

  const updateContacts = useCallback(() => {
    async function f() {
      const newContacts = await apiFunctions.getAllContacts();
      newContacts.sort((a, b) => parseInt(a.id) < parseInt(b.id));
      setContacts(newContacts);
    }
    f();
  }, []);

  const filterContacts = () => {
    //Use filter to select contacts
    if (filterContext.length > 0) {
      const filteredContacts = contacts.filter((contact) => {
        return (
          contact.firstName.toLowerCase().includes(filterContext.toLowerCase()) ||
          contact.secondName.toLowerCase().includes(filterContext.toLowerCase()) ||
          contact.email.toLowerCase().includes(filterContext.toLowerCase()) ||
          contact.phone.toLowerCase().includes(filterContext.toLowerCase())
        );
      });
      return filteredContacts;
    } else {
      return [...contacts];
    }
  };

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

  const nc = filterContacts(contacts);

  const contactCards = nc.map((contact) => {
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
