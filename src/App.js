import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import ShowCollection from "./ShowCollection";
import ShowUser from "./ShowUser";
import CreateUser from "./CreateUser";
import CreateCollection from "./CreateCollection";

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/show-collection/:id">
          <ShowCollection />
        </Route>

        <Route path="/create-collection/">
          <CreateCollection />
        </Route>

        <Route path="/show-user/:id">
          <ShowUser />
        </Route>

        <Route path="/create-user/">
          <CreateUser />
        </Route>
      </Switch>
    </>
  );
}

export default App;
