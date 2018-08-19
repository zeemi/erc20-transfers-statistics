import React, { Component } from 'react';
import logo from './logo.svg';
import './compiled/App.css';
import {fetchTokenStatistics} from "./redux/tokens/creators";
import {connect} from "react-redux";
import Inputs from "./containers/Inputs/Inputs";
import Charts from "./containers/Charts/Charts";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <Inputs/>
        <Charts/>
      </div>
    );
  }
}

export default connect(
  null,
  {fetchTokenStatistics}
)(App);
