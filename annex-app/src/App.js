import React from 'react';
import './App.css';
import Navigation from './Navigation';
import FeatureCollection from './FeatureCollection';
import Collection from './Collection';
import User from './User'
import ShowCollection from './ShowCollection'
import ShowUser from './ShowUser';
import CreateUser from './CreateUser';
import CreateCollection from './CreateCollection';

function App() {
  return (
    <>
    <Navigation />

    <FeatureCollection />

    <Collection />
    <ShowCollection />
    <CreateCollection />

    <User />
    <ShowUser />
    <CreateUser />
    </>
    
  )
}

export default App;
