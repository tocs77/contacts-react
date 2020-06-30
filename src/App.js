import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import ContactList from './components/contactList/contactList';
import EditDialog from './components/editDialog/editDialog';
import AddDialog from './components/addDialog/addDialog';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route exact={true} path='/' component={ContactList} />
        <Route exact={true} path='/edit/:id' component={EditDialog} />
        <Route exact={true} path='/add/' component={AddDialog} />
      </div>
    </BrowserRouter>
  );
}

export default App;
