import React, { Component } from 'react';
import '../../compiled/containers/Charts/Charts.css';
import {fetchTokenStatistics} from "../../redux/tokens/creators";
import {connect} from "react-redux";

class Charts extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={'charts'}>
        charts
      </div>
    );
  }
}

export default connect(
  null,
  {fetchTokenStatistics}
)(Charts);
