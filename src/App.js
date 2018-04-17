import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import utils from "./utils/db";
import TimeChart from "./components/TimeChart";
import { addNewDataPoint } from "./actions";

class App extends Component {
  addToReduxState = () => {
    console.log(this.props);
    this.props.store.dispatch(addNewDataPoint("Test"));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => utils.addStudentsToSession()}>Register</button>
          <button onClick={() => this.addToReduxState()}>
            Start Emotion Extraction
          </button>

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TimeChart />
      </div>
    );
  }
}

export default App;
