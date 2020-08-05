import React from "react";
import "./App.css";
import User from './User';
import Dashboard from './Dashboard'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <h1>ciao</h1>
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
