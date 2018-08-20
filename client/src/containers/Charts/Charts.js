import React, { Component } from 'react';
import '../../compiled/containers/Charts/Charts.css';
import {connect} from "react-redux";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {getChartsData, getChartsDataKeys, getEndTimestamp, getStartTimestamp} from "../../redux/tokens/selectors";

class Charts extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {statisticsData, chartsDataKeys, startTimestamp, endTimestamp} = this.props;
    return (
      <div className={'charts'}>
        <LineChart width={800} height={500} data={statisticsData}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis label={`From ${new Date(startTimestamp * 1000).toLocaleDateString()} to ${new Date(endTimestamp * 1000).toLocaleDateString()}`}/>
          <YAxis label={{ value: 'Transfers per 10k blocks', angle: -90 }}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          {chartsDataKeys.map((key) => {
            return <Line key={key} type="monotone" dataKey={key} activeDot={{r: 8}}/>
            }
          )}

        </LineChart>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    statisticsData: getChartsData(state),
    chartsDataKeys: getChartsDataKeys(state),
    startTimestamp: getStartTimestamp(state),
    endTimestamp: getEndTimestamp(state)
  }),
  {}
)(Charts);
