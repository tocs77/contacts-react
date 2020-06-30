import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import ContactList from './components/contactList/contactList';
import EditDialog from './components/editDialog/editDialog';
import AddDialog from './components/addDialog/addDialog';

import { Context } from './Context';

function App() {
  const [filterContext, setFilterContext] = useState('');
  const value = { filterContext, setFilterContext };
  return (
    <BrowserRouter>
      <div className='App'>
        <Context.Provider value={value}>
          <Header />
          <Route exact={true} path='/' component={ContactList} />
          <Route exact={true} path='/edit/:id' component={EditDialog} />
          <Route exact={true} path='/add/' component={AddDialog} />
        </Context.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
