import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import utils from './utils/db';
import TimeChart from './components/TimeChart';
import { addNewDataPoint } from './actions';
import moment from 'moment';

class App extends Component {
  students = ['Sami', 'Luke', 'Joe', 'Spence'];

  addToReduxState = () => {
    setInterval(() => {
      const timestamp = moment();
      this.students.forEach(student => {
        this.props.store.dispatch(
          addNewDataPoint(timestamp, student, utils.createTestEmotionData())
        );
      });
    }, 5000);
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
        <TimeChart store={this.props.store} />
      </div>
    );
  }
}

export default App;
