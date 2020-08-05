import React, { useEffect, useState } from "react";
import "./App.css";
import User from './User';
import Dashboard from './Dashboard'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let socket;
const App = () => {
  return (
    <Router>
    <Switch>
    <Route path="/User" >
      <User />
    </Route>
    <Route path="/Dashboard">
      <Dashboard />
    </Route>
  </Switch>
  </Router>
  );
};
export default App;
