import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './addDialog.module.css';

import * as apiFunctions from '../../apiFunctions';

const AddDialog = () => {
  const [contact, setContact] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
  });
  let history = useHistory();

  const cancelHandler = () => {
    history.push('/');
  };

  const addHandler = async () => {
    await apiFunctions.addContact(contact);
    history.push('/');
  };

  const updateContact = (field, value) => {
    const newContact = { ...contact };
    newContact[field] = value;
    setContact(newContact);
  };

  return (
    <div className={classes.editDialog}>
      <h2 className={classes.title}>Add contact</h2>
      <div className={classes.inputs}>
        <div className={classes.inputBox}>
          <label className={classes.label}>First Name</label>
          <input
            className={classes.input}
            type='text'
            defaultValue={contact.firstName}
            onChange={(e) => updateContact('firstName', e.target.value)}
          ></input>
        </div>
        <div className={classes.inputBox}>
          <label className={classes.label}>Second Name</label>
          <input
            className={classes.input}
            type='text'
            defaultValue={contact.secondName}
            onChange={(e) => updateContact('secondName', e.target.value)}
          ></input>
        </div>
        <div className={classes.inputBox}>
          <label className={classes.label}>Email</label>
          <input
            className={classes.input}
            type='email'
            defaultValue={contact.email}
            onChange={(e) => updateContact('email', e.target.value)}
          ></input>
        </div>
        <div className={classes.inputBox}>
          <label className={classes.label}>Phone</label>
          <input
            className={classes.input}
            type='text'
            defaultValue={contact.phone}
            onChange={(e) => updateContact('phone', e.target.value)}
          ></input>
        </div>
      </div>

      <div className={classes.buttonBox}>
        <button className={classes.button} onClick={cancelHandler}>
          Cancel
        </button>
        <button className={classes.button} onClick={addHandler}>
          OK
        </button>
      </div>
    </div>
  );
};

export default AddDialog;
