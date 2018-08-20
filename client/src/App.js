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
          <h1 className="App-title">Statistics of transfers for ERC20 Tokens</h1>
        </header>
        <p className="App-intro">
          To get started, enter valid smart contract address for ERC20 Token and run `get statistics`.
        </p>
        <p>
          Data visible in the chart are number of transfers of given token in window of 10 000 blocks.
        </p>
        <p>
          You can specify number of windows that will be fetched and compare multiple Tokens.
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
