import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import WheatherDetail from "./Components/WheatherDetail";

export default function RouterComponent() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/detail/:id" exact component={WheatherDetail} />
        </Switch>
      </div>
    </Router>
  );
}
