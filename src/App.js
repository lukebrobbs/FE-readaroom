import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeChartContainer from './components/TimeChart/TimeChartContainer';
import StartButtonContainer from './components/StartButton/StartButtonContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StartButtonContainer />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TimeChartContainer />
      </div>
    );
  }
}

export default App;
