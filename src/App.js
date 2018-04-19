import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import utils from "./utils/db";
import TimeChartContainer from "./components/TimeChartContainer";
import { addNewDataPoint, addDataPoint } from "./actions";
import moment from "moment";

class App extends Component {
  students = ["Sami", "Luke", "Joe", "Spence"];

  addToReduxState = () => {
    const startTime = moment()._d;
    setInterval(() => {
      const timestamp = moment()._d - startTime;
      const chunkedData = [];
      this.students.forEach(student => {
        chunkedData.push({
          timestamp,
          student,
          emotions: utils.createTestEmotionData()
        });
      });
      this.props.store.dispatch(addDataPoint(timestamp, chunkedData));
    }, 4000);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.addToReduxState()}>
            Start Emotion Extraction
          </button>

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
