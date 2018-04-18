import { Chart } from "react-google-charts";
import React from "react";
import db from "../config.js";

class TimeChart extends React.Component {
  state = {
    options: {
      title: "Audience Emotions over Time",
      hAxis: { title: "Time", minValue: 0 },
      vAxis: { title: "% audience", minValue: 0, maxValue: 100 },
      legend: "none"
    },
    rows: [[0, 0, 0, 0, 0, 0, 0, 0]],
    columns: [
      { type: "number", label: "Age" },
      { type: "number", label: "Weight" }
    ]
  };
  calculateGraphVectors = () => {
    const whateverYouWannaCallIT = this.props.store
      .getState()
      .dataPoint.reduce((acc, curr) => {
        for (let key in curr.emotion) {
        }

        acc[curr.timestamp] = {
          HAPPY: 0,
          SAD: 0,
          ANGRY: 0,
          CONFUSED: 0,
          DISGUSTED: 0,
          SURPRISED: 0,
          CALM: 0
        };
        return acc;
      }, {});
  };
  render() {
    console.log(this.props.array);
    return (
      <div />
      // <Chart
      //   chartType="LineChart"
      //   rows={this.state.rows}
      //   columns={this.state.columns}
      //   options={this.state.options}
      //   graph_id="SteppedAreaChart"
      //   width={"100%"}
      //   height={"400px"}
      //   legend_toggle
      // />
    );
  }
}
export default TimeChart;
