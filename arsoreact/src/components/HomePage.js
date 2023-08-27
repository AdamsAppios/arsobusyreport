import React, { Component } from "react";
import Formexample from "./Formexample/Formexample";
import Roadtoreact from "./Roadtoreact/Roadtoreact";
import Todos from "./Todos/Todos";
import Tabsreact from "./Tabsreact/Tabsreact";
import Moneymain from "./MoneyCounter/Moneymain";
import Refillingcc from "./Monitorcctv/Refillingcc";
import RefillingCcountmain from "./RefillingCCTV/RefillingCcountmain";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/">
            Please use another url
          </Route>
          <Route path="/formex" element={<Formexample />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/rtr" element={ <Roadtoreact />} />
          <Route path="/rtab" element={ <Tabsreact />} />
          <Route path="/moncount" element={<Moneymain />} />
          <Route path="/cctv/talamban-model" element={<Refillingcc />} /> 
          <Route path="/cctv/cctvpurejs" element={<RefillingCcountmain />} /> 
        </Routes>
      </Router>
    );
  }
}
