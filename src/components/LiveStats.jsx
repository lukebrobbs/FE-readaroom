import React, { Component } from "react";
import StatsContainer from "./Stats/StatsContainer";
import TimeChartContainer from "./TimeChart/TimeChartContainer";
import MoodbarsContainer from "./MoodBars/MoodBarsContainer";
import MoodGaugesContainer from "./MoodGauges/MoodGaugeContainer";
import LineChartContainer from "./LineChart/LineChartContainer";
import Nav from "./Nav";

class LiveStats extends Component {
  state = {
    currentlyRendered: "moodBoard"
  };

  toggleCheckbox = (event, toToggle) => {
    console.log(event.target);
    this.setState({ currentlyRendered: toToggle });
  };

  render() {
    const { currentlyRendered } = this.state;
    return (
      <React.Fragment>
        <Nav toggleCheckbox={this.toggleCheckbox} />
        <StatsContainer />
        {currentlyRendered === "moodBoard" && <MoodbarsContainer />}
        {currentlyRendered === "moodBoard" && <MoodGaugesContainer />}
        {currentlyRendered === "charts" && <TimeChartContainer />}
        {currentlyRendered === "graphs" && <LineChartContainer />}
      </React.Fragment>
    );
  }
}

export default LiveStats;
