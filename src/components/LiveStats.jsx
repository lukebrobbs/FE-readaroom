import React, { Component } from 'react';
import StatsContainer from './Stats/StatsContainer';
import TimeChartContainer from './TimeChart/TimeChartContainer';
import MoodbarsContainer from './MoodBars/MoodBarsContainer';
import MoodGaugesContainer from './MoodGauges/MoodGaugeContainer';
import Nav from './Nav';

class LiveStats extends Component {
  state = {
    stats: true,
    bars: true,
    gauges: false,
    timechart: false,
    linechart: false
  };

  toggleCheckbox = toToggle => {
    this.setState({ [toToggle]: !this.state[toToggle] });
  };

  render() {
    const { stats, bars, gauges, timechart, linechart } = this.state;
    return (
      <React.Fragment>
        <Nav toggleCheckbox={this.toggleCheckbox} />
        {stats && <StatsContainer />}
        {bars && <MoodbarsContainer />}
        {gauges && <MoodGaugesContainer />}
        {timechart && <TimeChartContainer />}
        {/* {linechart && <MoodGauges />} */}
      </React.Fragment>
    );
  }
}

export default LiveStats;
