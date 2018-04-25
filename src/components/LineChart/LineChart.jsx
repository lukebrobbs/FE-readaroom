import { Chart } from "react-google-charts";
import React from "react";
import produce from "immer";
import Nav from "../Nav";

class LineChart extends React.Component {
  state = {
    options: {
      title: "Audience Emotions over Time",
      hAxis: {
        title: "Time",
        viewWindow: { min: 0, max: 120 }
      },
      vAxis: {
        title: "No of people",
        minValue: 0,
        maxValue: this.props.people
      },
      isStacked: "relative",
      animation: { duration: 2000 }
      // explorer: { axis: 'horizontal', keepinBound: true }
    }
  };
  shouldComponentUpdate(nextProps) {
    if (this.props.data[0] !== nextProps.data[0]) {
      return true;
    } else return false;
  }
  componentDidUpdate() {
    this.props.updateGraph(this.props.data);
    const { data } = this.props;
    const latest = data[0];
    if (this.state.options.hAxis.viewWindow.max <= latest - 3) {
      this.setState(
        produce(this.state, newState => {
          newState.options.hAxis.viewWindow.min += 3;
          newState.options.hAxis.viewWindow.max += 3;
        })
      );
    }
  }

  render() {
    console.log(this.props.people);
    return (
      <React.Fragment>
        <Chart
          id="time-chart"
          chartType="LineChart"
          data={this.props.rows}
          options={this.state.options}
          graph_id="AreaChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </React.Fragment>
    );
  }
}
export default LineChart;
