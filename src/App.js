import React, { Component } from 'react';
import TimeChartContainer from './components/TimeChart/TimeChartContainer';
import StartButtonContainer from './components/StartButton/StartButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Read-A-Room</h1>
        </header>
        <StartButtonContainer />
        <TimeChartContainer />
      </div>
    );
  }
}

export default App;
