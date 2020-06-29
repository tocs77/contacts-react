import React from 'react';

import './App.css';

import axios from './axios-instance';

import ContactList from './components/contactList/contactList';
import Header from './components/header/header'

function App() {
  axios.get('/contacts').then((response) => console.log(response));

  return (
    <div className='App'>
      <Header />
      <ContactList />
    </div>
  );
}

export default App;
