import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import ShowCollection from './ShowCollection'
import ShowUser from './ShowUser';
import CreateUser from './CreateUser';
import CreateCollection from './CreateCollection';

function App() {
  return (
    <>
    <Navigation />

    <Route path="/">
        <Home />
    </Route>

    <Route path="/show-collection/">
        <ShowCollection />
    </Route>
    
    <Route path="/create-collection/">
        <CreateCollection />
    </Route>

    <Route path="/show-user/">
        <ShowUser />
    </Route>
    
    <Route path="/create-user/">
        <CreateUser />
    </Route>
    
    </>
    
  )
}

export default App;
