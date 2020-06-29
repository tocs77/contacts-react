// This file contains functions for server api calls

import axios from './axios-instance';

export const getAllContacts = async () => {
  let response = await axios.get('/contacts');
  const newContacts = response.data.map((contact) => {
    const c = {};
    c.firstName = contact.firstName;
    c.secondName = contact.secondName;
    c.phone = contact.phone;
    c.email = contact.email;
    c.id = contact.id;
    return c;
  });

  return newContacts;
};