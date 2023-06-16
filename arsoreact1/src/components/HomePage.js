import React, { Component } from "react";
import RefillingReport from "./MakeReports/RefillingReport";
import Formexample from "./Formexample/Formexample";
import Roadtoreact from "./Roadtoreact/Roadtoreact";
import Todos from "./Todos/Todos";
import Tabsreact from "./Tabsreact/Tabsreact";
import Moneymain from "./MoneyCounter/Moneymain";
import Refillingcc from "./Monitorcctv/Refillingcc";

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
            Please use another url
          </Route>
          <Route path="/refillingreport" component={RefillingReport} />
          <Route path="/formex" component={Formexample} />
          <Route path="/todos" component={Todos} />
          <Route path="/rtr" component={Roadtoreact} />
          <Route path="/rtab" component={Tabsreact} />
          <Route path="/moncount" component={Moneymain} />
          <Route path="/cctv/talamban-model" component={Refillingcc} /> 
        </Switch>
      </Router>
    );
  }
}
