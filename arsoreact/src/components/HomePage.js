import React, { Component } from "react";
import Labangonreport from "./Labangonreport/Labangonreport";
import Talambanreport from "./Talambanreport/Talambanreport";
import Formexample from "./Formexample/Formexample";
import Roadtoreact from "./Roadtoreact/Roadtoreact";
import Todos from "./Todos/Todos";
import Tabsreact from "./Tabsreact/Tabsreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
          <Route path="/talamban" component={Talambanreport} />
          <Route path="/formex" component={Formexample} />
          <Route path="/todos" component={Todos} />
          <Route path="/rtr" component={Roadtoreact} />
          <Route path="/tabs" Component={Tabsreact} />
        </Switch>
      </Router>
    );
  }
}