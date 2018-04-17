import { Chart } from 'react-google-charts';
import React from 'react';

class TimeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none'
      },
      rows: [[3, 3.5], [4, 5], [4, 5.5], [6.5, 7], [8, 12], [11, 14]],
      columns: [
        { type: 'number', label: 'Age' },
        { type: 'number', label: 'Weight' }
      ]
    };
  }
  render() {
    return (
      <Chart
        chartType="LineChart"
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="LineChart"
        width={'100%'}
        height={'400px'}
        legend_toggle
      />
    );
  }
}
export default TimeChart;
