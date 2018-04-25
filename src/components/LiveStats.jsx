import React, { Component } from 'react';
import StatsContainer from './Stats/StatsContainer';

class LiveStats extends Component {
  state = {
    stats: true,
    bars: true,
    gauges: false,
    timechart: false,
    linechart: false
  };

  toggleState = toToggle => {
    this.setState({ [toToggle]: !this.state[toToggle] });
  };

  render() {
    return <StatsContainer />;
  }
}

export default LiveStats;
