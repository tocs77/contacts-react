import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './editDialog.module.css';

import * as apiFunctions from '../../apiFunctions';

const EditDialog = (props) => {
  const [contact, setContact] = useState({});
  let history = useHistory();

  const getContact = useCallback((id) => {
    async function f() {
      const newContact = await apiFunctions.getContact(id);
      setContact(newContact);
    }
    f();
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      getContact(props.match.params.id);
    }
    return () => (isSubscribed = false);
  }, [getContact, props.match.params.id]);

  const cancelHandler = () => {
    history.push('/');
  };

  const updateHandler = async () => {
    await apiFunctions.updateContact(contact.id, contact);
    history.push('/');
  };

  const updateContact = (field, value) => {
    const newContact = { ...contact };
    newContact[field] = value;
    setContact(newContact);
  };

  return (
    <div className={classes.editDialog}>
      <h2 className={classes.title}>Edit contact</h2>
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
        <button className={classes.button} onClick={updateHandler}>
          OK
        </button>
      </div>
    </div>
  );
};

export default EditDialog;
