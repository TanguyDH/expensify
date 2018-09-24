import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './container/Dashboard/Dashboard';
import CreateExpensive from "./container/CreateExpenive/CreateExpensive";
import EditExpensive from "./container/EditExpensive/EditExpensive";
import Layout from "./hoc/Layout/Layout";
import NotFound from './container/NotFound/NotFound';
import "react-dates/lib/css/_datepicker.css";



const App = () => (
<Layout>
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/edit/:id"  component={EditExpensive} />
    <Route path="/create"  component={CreateExpensive} />
    <Route component={NotFound} />
  </Switch>
</Layout>
);


export default App;

