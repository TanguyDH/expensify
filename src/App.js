import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './container/Dashboard/Dashboard';
import CreateExpensive from "./container/CreateExpenive/CreateExpensive";
import EditExpensive from "./container/EditExpensive/EditExpensive";

import NotFound from './container/NotFound/NotFound';
import "react-dates/lib/css/_datepicker.css";
import LoginPage from './container/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

 const App = () => (

  <Switch>
    <PublicRoute path='/' exact component={LoginPage} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/edit/:id"  component={EditExpensive} />
    <PrivateRoute path="/create"  component={CreateExpensive} />
    <Route component={NotFound} />
  </Switch>

);


export default App;

