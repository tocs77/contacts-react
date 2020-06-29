import React from 'react';

import './App.css';

import axios from './axios-instance';

import ContactList from './components/contactList';

function App() {
  axios.get('/contacts').then((response) => console.log(response));

  return (
    <div className='App'>
      <ContactList />
    </div>
  );
}

export default App;
