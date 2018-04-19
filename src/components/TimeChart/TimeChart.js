import { Chart } from 'react-google-charts';
import React from 'react';

class TimeChart extends React.Component {
  state = {
    options: {
      title: 'Audience Emotions over Time',
      hAxis: { title: 'Time', minValue: 0, maxValue: 50000 },
      vAxis: { title: '% audience', minValue: 0, maxValue: 1 },
      isStacked: 'relative',
      explorer: { axis: 'horizontal' }
      // animation: { duration: 2000 }
    }
  };
  shouldComponentUpdate(nextProps) {
    if (this.props.data[0] !== nextProps.data[0]) {
      return true;
    } else return false;
  }
  componentDidUpdate() {
    this.props.updateGraph(this.props.data);
  }

  render() {
    return (
      <Chart
        chartType="AreaChart"
        data={this.props.rows}
        options={this.state.options}
        graph_id="AreaChart"
        width={'100%'}
        height={'400px'}
        legend_toggle
      />
    );
  }
}
export default TimeChart;
