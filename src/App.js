import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

import Navbar from './Navbar'
import Users from './Users'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/create' component={CreateUser} />
          <Route exact path='/update/:id' component={UpdateUser} />
        </Switch>
    </Router>
  );
}