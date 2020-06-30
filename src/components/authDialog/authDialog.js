import React, { useState } from 'react';

import classes from './authDialog.module.css';

import * as apiFunctions from '../../apiFunctions';

const AuthDialog = (props) => {
  const [data, setData] = useState({ name: '', password: '' });
  const [wrongAuth, setWrongAuth] = useState(false);

  const signinHandler = async () => {
    const response = await apiFunctions.authenticate(data.name, data.password);
    if (response.length === 0) {
      setWrongAuth(true);
    } else {
      props.onAuth();
    }
  };

  const updateData = (field, value) => {
    const newData = { ...data };
    newData[field] = value;
    setData(newData);
  };

  // const addHandler = async () => {
  //   await apiFunctions.addContact(contact);
  //   history.push('/');
  // };

  // const updateContact = (field, value) => {
  //   const newContact = { ...contact };
  //   newContact[field] = value;
  //   setContact(newContact);
  // };

  return (
    <div className={classes.editDialog}>
      <h2 className={classes.title}>Sign in</h2>
      <h3 className={classes.memo}>User name: test Password: test </h3>
      <div className={classes.inputs}>
        <div className={classes.inputBox}>
          <label className={classes.label}>User name</label>
          <input
            className={classes.input}
            type='text'
            onChange={(e) => updateData('name', e.target.value)}></input>
        </div>
        <div className={classes.inputBox}>
          <label className={classes.label}>Password</label>
          <input
            className={classes.input}
            type='text'
            onChange={(e) => updateData('password', e.target.value)}></input>
        </div>
      </div>
      {wrongAuth ? (
        <h3 className={classes.error}>Incorrect name or password</h3>
      ) : null}
      <div className={classes.buttonBox}>
        <button className={classes.button} onClick={signinHandler}>
          SignIn
        </button>
      </div>
    </div>
  );
};

export default AuthDialog;
