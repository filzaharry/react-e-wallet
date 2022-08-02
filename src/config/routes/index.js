import React from "react";
import Login from "../../components/login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Notifications />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;