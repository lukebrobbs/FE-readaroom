import { Chart } from 'react-google-charts';
import React from 'react';
import db from '../config.js';

class TimeChart extends React.Component {
  state = {
    options: {
      title: 'Audience Emotions over Time',
      hAxis: { title: 'Time', minValue: 0 },
      vAxis: { title: '% audience', minValue: 0, maxValue: 100 },
      isStacked: true
    }
  };
  componentDidUpdate() {
    this.props.updateGraph(this.props.data);
  }

  render() {
    console.log(this.props.data);
    return (
      <Chart
        chartType="SteppedAreaChart"
        data={this.props.rows}
        options={this.state.options}
        graph_id="SteppedAreaChart"
        width={'100%'}
        height={'400px'}
        legend_toggle
      />
    );
  }
}
export default TimeChart;
